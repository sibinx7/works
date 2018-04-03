import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {autobind} from 'autobind-decorator'
import {addToSurvey, updateToSurvey, updateSurveyIndex} from '../actions/index'


class QuestionOption extends Component{
  constructor(props){
    super(props)
    this.state = this.props;
  }

  updateValue = (e) => {
    const {setUpdate, index} = this.props;
    this.setState({
      option: e.target.value
    }, () => {
      setUpdate(this.state.option, index)
    });
  }

  render(){
    let {option,index} = this.state;
    return(
      <div>
        <input type="text" value={option} onChange={this.updateValue} name={`option-${index}`}/>
      </div>
    )
  }
}

class QuestionOptions extends Component{
  constructor(props){
    super(props)
    this.state = {
      options: this.props.options || []
    }
  }

  addNewOption = () => {
    let {options}  = this.state;
    options.push('');
    this.setState({options})
  }


  getValue = (item, index) => {
    console.log('GET VALUE');
    console.log(item);
    let { updateOptions } = this.props;
    let {options} = this.state;
    options[index] = item;
    this.setState({
      options
    }, ()=> {
        updateOptions(options)
    })
  }


  render(){
    let { options } = this.state;
    return(
      <div className={`grid-x grid-margin-x flex-end-content`}>
        <div className={`small-12 medium-10 float-right cell`}>
          <div className={`callout`}>
            {
              options.map((option,index) => {
                return(
                  <QuestionOption option={option} index={index} key={index} setUpdate={this.getValue}/>
                )
              })
            }

            <button className={`button tiny`} onClick={this.addNewOption} type={'button'}> Add Option</button>
          </div>
        </div>
      </div>
    );
  }
}

class QuestionElement extends Component{
  constructor(props){
    super(props)
    this.state = {
      item: this.props.item,
      index: this.props.index
    };
  }

  updateQuestion = (e) => {

    let {item} = this.state;

    item.question = e.target.value

    this.setState({
      item
    }, () => {
      this.triggerUpdate(this.state.item)
    })
  }


  triggerUpdate = (item) => {
    let {index,updateValue} = this.props;
    updateValue(index, item)
  }


  updateType = (e) => {
    let {item} = this.state;
    item['type'] = e.target.value;
    this.setState({
      item
    }, () => {
      this.triggerUpdate(this.state.item)
    })
  };

  updateOptions = (options) => {
    let {item} = this.state;
    item['options'] = options;
    this.setState({item},()=>{
      this.triggerUpdate(this.state.item)
    })
  };

  updateField = (e) => {
    let {item} = this.state;
    item['field'] = e.target.value;
    this.setState({
      item
    }, () => {
      this.triggerUpdate(this.state.item)
    })
  }
  render(){
    let {item:{question, type, options, field, id}, index} = this.state;
    return(
      <div>
        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-1 cell">
            <div>#{index}</div>
          </div>
          <div className="small-12 medium-6 cell">
            <div>
              <input type="text" value={question || ''} onChange={this.updateQuestion}
                     id={`question-${index}`}
                     name={`question`} placeholder={`Add your Questions`}/>
            </div>
          </div>

        <div className="small-12 medium-2 cell">
          <div>
            <select name="" id="" value={type} onChange={this.updateType}>
              <option value="text">TextBox</option>
              <option value="radio">Radio Button</option>
              <option value="checkbox">CheckBox</option>
              <option value="textarea">TextArea</option>
              <option value="dropdown">Dropdown</option>
            </select>
          </div>
        </div>
          <div className="small-12 medium-3 cell">
            <input type="text" placeholder={`Field Name`} value={field} onChange={this.updateField}/>
          </div>
        </div>
        { (type!=='' && type!=='text' && type!=='textarea') ? <QuestionOptions
          options={options}
          type={type} updateOptions={this.updateOptions}/> :'' }
      </div>
    )
  }
}


class ShowQuestions extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const {questions} = this.props;
    return(
      <div>
        {
          questions.map((item,index) => {
            return(
              <div key={index}>
                {JSON.stringify(item)}
              </div>
            )
          })
        }

      </div>
    )
  }
}

class SurveyCreate extends Component{
  constructor(props){
    super(props)
    this.state = {
      questions: [],
      name:'',
      created_at:null
    }
  }

  componentDidMount(){
    const {match:{params:{id}}, surveys, survey_index} = this.props;
    console.log(survey_index)
    if(id){
      let currentSurvey = (surveys.filter((item)=>{
        return item.id === parseInt(id)
      }))[0];
      if(currentSurvey && currentSurvey.questions){
        this.setState({...currentSurvey})
      }
    }
  }

  submitForm = (e) =>{
    e.preventDefault();
    const { questions,name, id, created_at } = this.state;
    const { addToStorage, history, survey_index, updateSIndex, updateToSurvey } = this.props;


    console.log(survey_index)
    console.log('SURVEY INDEX')
    if(id===undefined){
      if(questions.length > 0){// bad checking, question is and collection
        addToStorage({
          id: survey_index+1,
          name,
          questions,
          created_at: new Date()
        });
        updateSIndex()
        history.push('/surveys')
      }
    }else{
      console.log(this.state);
      updateToSurvey({...this.state});
      history.push(`/surveys/show/${id}`)
    }

  }

  addQuestion = (e) => {
    e.preventDefault();
    let {questions} = this.state;
    questions.push({
      question:'',
      type:'',
      options:'',
      field:''
    });
    this.setState({questions});
    console.log('Added question')
  }

  updateValue = (index, item) => {
    let {questions} = this.state;
    questions[index] = item;
    this.setState({questions});
  }


  updateName = (e) => {
    this.setState({
      name: e.target.value
    })
  }


  render(){
    let { questions, name, id, created_at } = this.state;
    return(
      <div>
        <form method="post" onSubmit={this.submitForm}>
         <div className="form-group">
           <label htmlFor="">Survey Name</label>
           <input type="text" name={`survey_name`} value={name} onChange={this.updateName}/>
         </div>

         <div className="question-wrapper">
           {questions.map((item,index) => {
             return(
               <QuestionElement item={item} key={index} index={index}  updateValue={this.updateValue}/>
             )
           })}
         </div>
          <button type={`button`}
                  className={`button secondary`}
                  onClick={this.addQuestion}>Add Question</button>

          <div className="clearfix"></div>
          <hr/>

          <button type={`submit`} className={`button primary`}>{ id!=undefined ? 'Update':'Save'}</button>
          <button type={`reset`} className={`button secondary`}>Cancel</button>
        </form>
      </div>
    )
  }
}
//<ShowQuestions questions={questions}/>

const mapStateToProps = ({survey_index, surveys}) => {
  return {
    survey_index,
    surveys
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToStorage: (questions) => {
      dispatch(addToSurvey(questions))
    },
    updateToStorage: (questions,id) => {
      dispatch(updateToSurvey(questions,id))
    },
    updateSIndex: () => {
      dispatch(updateSurveyIndex())
    }
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SurveyCreate));
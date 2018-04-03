import React, {Component} from 'react';
import {autobind} from 'autobind-decorator'



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
      <div>

        {
          options.map((option,index) => {
            return(
              <QuestionOption option={option} index={index} key={index} setUpdate={this.getValue}/>
            )
          })
        }

        <button className={`button tiny`} onClick={this.addNewOption}> Add Option</button>
      </div>
    );
  }
}

class QuestionElement extends Component{
  constructor(props){
    super(props)
    this.state = {
      item: this.props.item
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
    item.type = e.target.value;
    this.setState({
      item
    }, () => {
      this.triggerUpdate(this.state.item)
    })
  };

  updateOptions = (options) => {
    console.log('GETTING');
    console.log(options)
    let {item} = this.state;
    item['options'] = options;
    this.setState({item},()=>{
      this.triggerUpdate(this.state.item)
    })
  };
  render(){
    let {index, question, type, options} = this.state.item;
    return(
      <div>
        <div>{index}</div>
        <div>
          <input type="text" value={question || ''} onChange={this.updateQuestion}
                 id={`question-${index}`}
                 name={`question`}/>
        </div>
        <div>
          <select name="" id="" value={type} onChange={this.updateType}>
            <option value="text">TextBox</option>
            <option value="radio">Radio Button</option>
            <option value="checkbox">CheckBox</option>
            <option value="textarea">TextArea</option>
            <option value="dropdown">Dropdown</option>
          </select>
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
      questions: []
    }
  }



  submitForm = (e) =>{
    e.preventDefault();
    console.log('Submit')
  }

  addQuestion = (e) => {
    e.preventDefault();
    let {questions} = this.state;
    questions.push({
      question:'',
      type:'',
      options:''
    });
    this.setState({questions});
    console.log('Added question')
  }

  updateValue = (index, item) => {
    let {questions} = this.state;
    questions[index] = item;
    this.setState({questions});
  }

  render(){
    let { questions } = this.state;
    return(
      <div>
        <form method="post" onSubmit={this.submitForm}>
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
          <ShowQuestions questions={questions}/>
          <button type={`submit`} className={`button primary`}>Save</button>
          <button type={`reset`} className={`button secondary`}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default SurveyCreate;
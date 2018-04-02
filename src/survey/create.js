import React, {Component} from 'react';
import {autobind} from 'autobind-decorator'


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
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    let {item} = this.state;
    item.type = e.target.value;
    this.setState({
      item
    }, () => {
      this.triggerUpdate(this.state.item)
    })
  }
  render(){
    let {index, question, type} = this.state.item;
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
      </div>
    )
  }
}


class ShoeQuestions extends Component{
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
              <div>
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
      answer:''
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
          <ShoeQuestions questions={questions}/>
          <button type={`submit`} className={`button primary`}>Save</button>
          <button type={`reset`} className={`button secondary`}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default SurveyCreate;
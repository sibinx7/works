import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const QuestionTextField = ({field='name'}) =>{
  console.log(field)
  return <input name={field} placeholder={`Enter your Input`} type={`text`} />
}

const QuestionRadio = ({options, field='name'}) => {
  if(options.length === 0) return '';
  return (<div className={`radio-inputs`}>
    {
      options.map((option,index) => {
        return <label htmlFor="" key={index}>{option}<input type="radio" value={option} name={field}/></label>
      })
    }
  </div>)
}

const QuestionDropdown = ({options, field='name'}) => {
  return (<div>
    <select name={field} id="">
      {options.map((option, index) => {
        return <option value={option} key={index}>{option}</option>
      })}
    </select>
  </div>)
}

const QuestionCheckBox = ({options, field='name'}) => {
  return (<div className={`checkbox-inputs`}>
    {
      options.map((option,index) => {
        return <label htmlFor="" key={index}>{option}<input type="checkbox" value={option} name={field}/></label>
      })
    }
  </div>)
}

const QuestionTextArea = ({field}) => {
  return <textarea name={field}></textarea>
}
class QuestionAnswer extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {question, options, type, field} = this.props;
    return(
      <div>
        <h4>{question}</h4>
        {
          (type === 'text' || type === '') && <QuestionTextField field={field}/>
        }
        {
          (type === 'radio') && <QuestionRadio options={options} field={field}/>
        }
        {
          (type === 'textarea') && <QuestionTextArea/>
        }
        {
          (type === 'dropdown') && <QuestionDropdown options={options} field={field}/>
        }
        {
          (type === 'checkbox') && <QuestionCheckBox options={options} field={field}/>
        }
      </div>
    )
  }

}

class SurveyShow extends Component{
  constructor(props){
    super(props);
    this.state = {
      survey:{}
    }
  }

  componentDidMount(){
    const {match:{params:{id}}, surveys} = this.props;
    console.log(surveys)
    console.log('<<<<<<')
    const selectedSurvey = surveys.filter((item,index) => {
      return item.id == parseInt(id)
    });

    console.log(selectedSurvey)
    this.setState({
      survey: selectedSurvey[0]
    })
  }

  render(){
    const {survey} = this.state;
    console.log(survey)
    if(survey && !survey.questions){
      return (<div>Wait...</div>)
    }
    console.log(survey)
    const {name,questions,id,created_at} = survey;


    console.log(this.state)
    console.log(name)
    return(
      <div className={`survey-show`}>
        <h1>{name}</h1>
        <div className="callout">
          {
            questions.map((question,index) => {
              return <QuestionAnswer {...question} index={index} key={index}/>
            })
          }
        </div>
        <div className="clearfix"></div>
        <p>
          <Link to={`/surveys/edit/${id}`} className={`button tiny secondary`}>Edit</Link>
          <Link to={`/surveys`} className={`button tiny info`}>List</Link>
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({surveys}) =>{
  return {
    surveys
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeSurvey: (index) => {

    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SurveyShow));
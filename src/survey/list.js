import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {surveys} from "../reducers/surveys";
import {withRouter} from 'react-router'



const EmptyList = () => {
  return (<tbody><tr>
    <td colSpan={4}>Nothing found...</td>
  </tr></tbody>)
}

class SurveyItems extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {items} = this.props;
    return(
      <tbody>
      {
        items.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <Link to={`/surveys/show/${item.id}`}>
                  {item.name}
                </Link>
              </td>
              <td>{item.questions.length || 0}</td>
              <td>
                <button type={'button'}>Delete</button>
              </td>
            </tr>
          )
        })
      }
      </tbody>
    )
  }
}
class SurveyList extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {surveys} = this.props;
    return(
      <div className={`create-form`}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Questions</th>
              <th>Actions</th>
            </tr>
          </thead>
          {surveys.length > 0 ? <SurveyItems items={surveys} {...this.props}/>: <EmptyList/>}
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({survey_index, surveys}) => {
  return {
    surveys,
    survey_index
  }
}
export default withRouter(connect(mapStateToProps)(SurveyList));
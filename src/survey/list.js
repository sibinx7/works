import React, {Component} from 'react';

class SurveyList extends Component{
  constructor(props){
    super(props)
  }

  render(){
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
          <tbody>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default SurveyList;
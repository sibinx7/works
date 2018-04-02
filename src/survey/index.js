import React, {Component} from 'react'
import {Redirect, Switch, Link} from 'react-router-dom'
import {Route, withRouter} from 'react-router';
import SurveyList from "./list";
import SurveyCreate from "./create";
import SurveyShow from "./show";

class Survey extends Component{
  constructor(props){
    super(props)
  }


  render(){
    let url;
    const { match } = this.props;
    if(match && match.url){
      url = match.url ? match.url:''
    }
    return(
      <div className={`survey-wrapper page-content`}>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="small-12 cell">
              <h1 className={`text-center margin-bottom-3`}>
                Survey
                <small className="pull-right">
                  <Link to={`${url}/create`}>
                    <span>+</span>
                  </Link>
                </small>
              </h1>
              <div className="clearfix"></div>
              <div className="survey-main">
                <Switch>
                  <Route path={`${url}/index`} component={SurveyList}/>
                  <Route path={`${url}/create`} component={SurveyCreate}/>
                  <Route path={`${url}/:id`} component={SurveyShow}/>
                  <Redirect exact from={`${url}/`} to={`${url}/index`}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Survey)
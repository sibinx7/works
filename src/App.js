import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import CSidebar from './containers/cSidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

/* Pages */

import Home from './home/Home';
import Portfolio from './home/Portfolio';
import Services from './home/Services';
import About from './home/About';


/* End Pages */

class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
    render() {
        return (
          <Router>
            <main className = "App" >
              <CSidebar/>
              <div className='page'>
                <Header/>
                <div className="content">
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/portfolio' component={Portfolio}/>
                  <Route path='/services' component={Services}/>
                </div>
              </div>
            </main>
          </Router>
        );
    }
}

export default App;
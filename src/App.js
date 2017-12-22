import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom';


/* Pages */

import Home from './home/Home';
import Portfolio from './home/Portfolio';
import Services from './home/Services';

/* End Pages */

class App extends Component {
    render() {
        return (
          <Router>
            <main className = "App" >
              <Sidebar/>
              <div className='page'>
                <Header/>
                <div>
                  <Route exact path='/' component={Home}/>
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
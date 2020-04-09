import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import * as jQuery from "jquery"

import Header from './common/header';
import Footer from "./common/footer";
import CSidebar from './common/sidebar';

/* Pages */
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';
import Contact from "./pages/Contact.jsx"

/* End Pages */



class App extends Component {
	state = {
		error:false 
	}
  constructor(props){
    super(props)
  }
  componentDidMount(){
		
			
	}
	
	componentDidCatch(e){		
		this.setState({error: true})
	}

    render() {
			const {	error } = this.state;
        return (
          <Router>
            <main className="main">
							<Header/>							
              <div className='page'>
                <div className="content">
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/portfolio' component={Portfolio}/>
                  <Route path='/services' component={Services}/>
                  <Route path="/contact" component={Contact}/>
                </div>
              </div>
              <Footer/>
            </main>
          </Router>
        );
    }
}

export default App;

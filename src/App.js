import React, { Component } from 'react';
import logo from './logo.svg';
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
import Footer from "./components/Footer";
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
            <main className="main">
              <Header/>
              <div className='page'>
                <div className="content">
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/portfolio' component={Portfolio}/>
                  <Route path='/services' component={Services}/>
                </div>
              </div>
              <Footer/>
            </main>
          </Router>
        );
    }
}

export default App;

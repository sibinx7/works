import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/* Pages */
import Home from './home/Home';
import Portfolio from './home/Portfolio';
import Services from './home/Services';
import About from './home/About';
import Contact from './home/Contact';
import ChartDiagram from './home/ChartDiagram'

/* Common Section */
import Header from './components/Header';
import Footer from "./components/Footer";
import Survey from "./survey/index";


/* End Pages */

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <main className="main">
          <Header/>
          <div className='page'>
            <div className="content">
              <Route exact path='/' component={ Home }/>
              <Route path='/about' component={ About }/>
              <Route path={`/contact`} component={ Contact }/>
              <Route path='/portfolio' component={ Portfolio }/>
              <Route path='/services' component={ Services }/>
              <Route path={`/csv-parse`} component={ChartDiagram}/>
              <Route path={`/surveys`} component={ Survey }/>
            </div>
          </div>
          <Footer/>
        </main>
      </Router>
    );
  }
}

export default App;
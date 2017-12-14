import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {
    render() {
        return (
          <main className = "App" >
						<sidebar></sidebar>
						<div className='page'>
							<Header></Header>							
						</div>
          </main>
        );
    }
}

export default App;
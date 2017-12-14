import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Header';
import Sidebar from './Sidebar';


class App extends Component {
    render() {
        return (
          <main className = "App" >
						<Sidebar/>
						<div className='page'>
							<Header/>
						</div>
          </main>
        );
    }
}

export default App;
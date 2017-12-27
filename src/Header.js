import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render(){
    return <header className="header">
			<nav className="header__nav">			
				<a href="" className="header__toggle">
					<span></span>
				</a>
				<ul className="header__menu">
					<li><Link to="/">Home</Link></li>
					<li><Link	to="/about">About</Link></li>
					<li><Link to="/portfolio">Portfolio</Link></li>
					<li><Link	 to="/services">Services</Link></li>
				</ul>
			</nav>
    </header>
  }
}
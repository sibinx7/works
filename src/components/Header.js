import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars, faDatabase, faHome, faCubes,
  faEnvelopeOpen, faMapSigns, faTimes } from '@fortawesome/fontawesome-free-solid';
import { faDropbox, faDocker } from '@fortawesome/fontawesome-free-brands';

import {connect} from 'react-redux';

import {toggleSidebar} from '../actions/index'

import $ from 'jquery';

const mapStateToProps =({rsidebar}) =>{
	return {
		rsidebar: !rsidebar
	}
}

@connect(
	mapStateToProps
)

class Header extends Component {

  constructor(props){
    super(props)
    this.toggleSidebarAction = this.toggleSidebarAction.bind(this)
  }


  toggleSidebarAction(e){
    e.preventDefault();

    const {dispatch, rsidebar} = this.props
		dispatch(toggleSidebar(true))
  }

  openSecondaryNav = (e) => {
    e.preventDefault();
    const header = $('header');
    header.toggleClass('open-sec-menu');
  };

  closeSecondaryNav = (e) => {
    e.preventDefault();
    const header = $('header');
    header.removeClass('open-sec-menu');
  };

  render(){
    return <header className="header">
			<div className="container">
        <nav className={`main-nav`}>
          <ul className="menu align-left">
            <li>
              <a href="javascript:void(0)" onClick={this.openSecondaryNav}>
                <FontAwesomeIcon icon={faBars}/>
              </a>
            </li>
          </ul>
          <ul className="menu align-center menu-brand">
            <li><a href="#">Works</a></li>

          </ul>
          <ul className="menu align-right">
            <li><a href="#">
              <FontAwesomeIcon icon={ faDropbox }/>
            </a></li>
            <li><a href="">
              <FontAwesomeIcon icon={ faDatabase }/>
            </a></li>
          </ul>
        </nav>
        <nav className="secondary-nav">
          <ul>
            <li className={`close-button-li`}>
              <a href="javascript:void(0)" onClick={this.closeSecondaryNav}>
                <FontAwesomeIcon icon={ faTimes }/>
              </a>
            </li>
            <li>
              <Link to={`/`}>
                <FontAwesomeIcon icon={faHome}/>
                Home
              </Link>
            </li>
            <li><Link to={`/services`}>
              <FontAwesomeIcon icon={faDocker}/>
              Services
            </Link></li>
            <li><Link to={`/portfolio`}>
              <FontAwesomeIcon icon={ faCubes }/>
              Projects
            </Link></li>
            <li><Link to={`/contact`}>
              <FontAwesomeIcon icon={ faEnvelopeOpen }/>
              Contact
            </Link></li>
            <li><Link to={`/about`}>
              <FontAwesomeIcon icon={ faMapSigns }/>
              About
            </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  }
}



export default Header;
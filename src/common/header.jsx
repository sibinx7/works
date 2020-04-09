import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  '@fortawesome/fontawesome-free';
import {connect} from 'react-redux';
import {toggleSidebar} from '../actions/index'


const $ = window.$;
const jQuery  = $;



const mapStateToProps =({rsidebar}) =>{
	return {
		rsidebar: !rsidebar
	}
}



class Header extends Component {

	state = {
		error: false 
	}

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

	componentDidCatch(e){
		this.setState({error: true})
	}

  render(){

		const {	error } = this.state;
		
		if(!!error){
			return <p>Unknown error</p>
		}

    return <header className="header">
			<div className="container">
        <nav className={`main-nav`}>
          <ul className="menu align-left">
            <li>
              <a href="javascript:void(0)" onClick={this.openSecondaryNav}>
                <span className="fas fa-bars"></span>              
              </a>
            </li>
          </ul>
          <ul className="menu align-center menu-brand">
            <li><a href="#">Works</a></li>

          </ul>
          <ul className="menu align-right">
            <li><a href="#">
              <span className="fas fa-dropbox"></span>                          
            </a></li>
            <li><a href="">
              <span className="fas fa-database"></span>                                      
            </a></li>
          </ul>
        </nav>
        <nav className="secondary-nav">
          <ul>
            <li className={`close-button-li`}>
              <a href="javascript:void(0)" onClick={this.closeSecondaryNav}>
                <span className="fas fa-times"></span>                
              </a>
            </li>
            <li>
              <a href="">
              <span className="fas fa-home"></span>                              
                Home
              </a>
            </li>
            <li><a href="">
            <span className="fas fa-docker"></span>                              
              Service
            </a></li>
            <li><a href="">
              <span className="fas fa-cubes"></span>                              
              Projects
            </a></li>
            <li><a href="">
              <span className="fas fa-envelope-open"></span>                            
              Contact
            </a></li>
            <li><a href="">
              <span className="fas fa-map-signs"></span>                              
              About
            </a></li>
          </ul>
        </nav>
      </div>
    </header>
  }
}

// export default Header;

Header = connect(mapStateToProps)(Header)

export default Header;
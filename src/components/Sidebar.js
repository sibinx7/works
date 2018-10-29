import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import FontAwesome from '@fortawesome/fontawesome-free'

import '../scss/sidebar.scss';


import {toggleSidebar} from '../actions/index'

export default class Sidebar extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  
    const {history, closeSidebarAction,rsidebar} = this.props;
    /* Listen URL change */

  }
  render(){

    const {rsidebar, closeSidebarAction} = this.props;


    return <aside className={rsidebar? 'aside__open':''}>
      <a href="" className="aside__close" onClick={(e) => {
        e.preventDefault();
        closeSidebarAction(false)
      }}>
        <span className="fas fa-times-circle"></span>      
      </a>
      <div className="sidebar__categories">
        <ul className='clearfix'>
          <li>
            <Link to=''>
              <span className="fas fa-home"></span>            
            </Link>
          </li>
          <li>
            <Link to='/portfolio' title={`Portfolio`} data-toggle={`tooltip`}>
              <span className="fas fa-building"></span>                        
            </Link>
          </li>
          <li>
            <Link to='' title={`Service`} data-toggle={`tooltip`}>
              <span className="fas fa-keyboard"></span>                                      
            </Link>
          </li>
          <li>
            <Link to=''>
              <span className="fas fa-coffee"></span>                                    
            </Link>
          </li>
          <li>
            <Link to="/services" title={`Contact`} data-toggle={`tooltip`}>
              <span className="fas fa-handshake"></span>                                    
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  }
}
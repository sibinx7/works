import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeSolid from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


import './scss/sidebar.scss';

export default class Sidebar extends Component{
  render(){
    return <aside>
      <div className="sidebar__categories">
        <ul className='clearfix'>
          <li>
            <Link to=''>
              <FontAwesomeIcon icon='home'/>
            </Link>
          </li>
          <li>
            <Link to=''>
              <FontAwesomeIcon icon={['fas','building']}/>
            </Link>
          </li>
          <li>
            <Link to=''>
              <FontAwesomeIcon icon={['fas','keyboard']}/>
            </Link>
          </li>
          <li>
            <Link to=''>
              <FontAwesomeIcon icon='coffee'/>
            </Link>
          </li>
          <li>
            <Link to="">
              <FontAwesomeIcon icon='handshake'/>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  }
}
import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import FontAwesome from '@fortawesome/fontawesome'
import FontAwesomeSolid from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


import '../scss/sidebar.scss';
import * as Tooltip from 'tooltip.js/dist/esm/tooltip'



import {toggleSidebar} from '../actions/index'

export default class Sidebar extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let $,jquery;
    const Tooltip = window.Tooltip || {};
    $ = jquery = window.$ || {};

    const {history, closeSidebarAction,rsidebar} = this.props;
    /* Listen URL change */
    history.listen((location,action) => {
      if(!rsidebar){
        closeSidebarAction(false)
      }
    });


    $(document).ready(function(){
      const linkTooltip = $('.sidebar__categories ul li').children("[data-toggle='tooltip']");
      try{
        linkTooltip.each((index, ele)=> {
          new Tooltip(ele,{
            placement: 'right',
            title: ele.getAttribute('title')
          })
        })
      }catch(e){
        console.log(e)
      }
    })

  }
  render(){

    const {rsidebar, closeSidebarAction} = this.props;


    return <aside className={rsidebar? 'aside__open':''}>
      <a href="" className="aside__close" onClick={(e) => {
        e.preventDefault();
        closeSidebarAction(false)
      }}>
        <FontAwesomeIcon icon={['fas','times-circle']}/>
      </a>
      <div className="sidebar__categories">
        <ul className='clearfix'>
          <li>
            <Link to=''>
              <FontAwesomeIcon icon='home'/>
            </Link>
          </li>
          <li>
            <Link to='/portfolio' title={`Portfolio`} data-toggle={`tooltip`}>
              <FontAwesomeIcon icon={['fas','building']}/>
            </Link>
          </li>
          <li>
            <Link to='' title={`Service`} data-toggle={`tooltip`}>
              <FontAwesomeIcon icon={['fas','keyboard']}/>
            </Link>
          </li>
          <li>
            <Link to=''>
              <FontAwesomeIcon icon='coffee'/>
            </Link>
          </li>
          <li>
            <Link to="/services" title={`Contact`} data-toggle={`tooltip`}>
              <FontAwesomeIcon icon='handshake'/>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  }
}
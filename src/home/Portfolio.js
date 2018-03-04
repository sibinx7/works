import React, {Component} from 'react';
import axios from 'axios';
import settings from '../api/env';
import $ from 'jquery'
import '@fortawesome/fontawesome';
import ReactFontAwesome from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/fontawesome-free-solid'


let DemoWebsite =  require('../images/dummy-website.png');
// DemoWebsite = require('../images/square-1.png');
// DemoWebsite = require('../images/normal-image.jpg');



class PortfolioSlice extends Component{


  constructor(props){
    super(props)
    this.state = {
      elementWidth:0
    }
  }

  componentDidMount(){
    const elementWidth = Math.ceil($('.slice__wrapper').width());
    this.setState({elementWidth})

  }
  render(){
    const {name,image, number,link} = this.props;
    const backgroundImage = image || DemoWebsite;
    const {elementWidth} = this.state;
    const elementBox = (elementWidth/5);
    const styleData = {
      backgroundImage: `url(${backgroundImage})`,
      width: `${elementBox}px`,
      backgroundSize: `${elementWidth}px 100%`
    };

    const translate3D = {
      // webkitTransform: `translate3d(${elementBox}px, 0,0)`,
      // transform: `translate3d(${elementBox}px, 0,0)`
    };

    const bPositionOne = { backgroundPosition: `0 0`};
    const bPositionTwo = { backgroundPosition: `-${(elementBox)}px 0`};
    const bPositionThree = { backgroundPosition: `-${((elementBox)*2)}px 0`};
    const bPositionFour = { backgroundPosition: `-${((elementBox)*3)}px 0`};
    const bPositionFive = { backgroundPosition: `-${((elementBox)*4)}px 0`};
    return(
      <div className="slice__wrapper">
        <div className="portfolio__view slice__view">
          <div className="portfolio__back slice__back">
            <a href={link} target='_blank'>
              <span>{name}</span>
              <ReactFontAwesome icon={faChevronDown}/>
            </a>
          </div>
          <div className="slice slice__one" style={ {...styleData,...bPositionOne }}>
            <span className="overlay"></span>
            <div className="slice slice__two" style={{...styleData, ...bPositionTwo,...translate3D}} data-width={`${elementWidth/5}`}>
              <span className="overlay"></span>
              <div className="slice slice__three" style={{...styleData, ...bPositionThree,...translate3D}}>
                <span className="overlay"></span>
                <div className="slice slice__four" style={{...styleData, ...bPositionFour,...translate3D}}>
                  <span className="overlay"></span>
                  <div className="slice slice__five" style={{...styleData,...bPositionFive,...translate3D}}>
                    <span className="overlay"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Portfolio extends Component{
  constructor(){
    super();
    this.state = {
      projects:[]
    }

  }


  fetchProject(){

  }


  componentWillMount(){

  }

  componentDidMount(){

  }

  render(){
    const {projects} = this.state;
    return <div className="portfolio__content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="portfolio__list">
                {
                  projects.map((item,index) =>{
                    return (<div className="portfolio__item" key={index}>
                      <div className="portfolio__image">
                        <PortfolioSlice {...item} number={index}/>
                      </div>
                    </div>)
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Portfolio;
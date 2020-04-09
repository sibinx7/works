import React, {Component} from 'react';
import {  Link } from "react-router-dom";

import '@fortawesome/fontawesome-free';

const Skills = [
  {name: 'JavaScript'},
  {name: 'HTML'},
  {name: 'CSS'},
  {name: 'Ruby On Rails'},
  {name: 'Laravel'},
  {name: 'WordPress'},
  {name: 'React JS'},
  {name: 'Angular JS 5'},
  {name: 'Middleman'}
];

export default class Footer extends Component{
  constructor(props){
    super(props)
    this.state = {
      skills: Skills
    }
  }
  render(){
    const { skills } = this.state;
    return (
      <footer className={`footer`}>
        <div className="footer__top">
          <div className="container">
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 medium-3">
                <div className="footer__box">
                  <h3>About 7chip</h3>
                  <p>
                    <a href="http://www.7chip.com"><b>7chip</b></a> is a software company which mainly focus on WordPress, Laravel and Ruby On Rails
                    Projects. 7chip started a technology blog, later we start to do small projects from Freelancer and other sources.
                    Now we are capable to do upto medium size projects.
                  </p>
                  <p>
                    Phone: 8943648198/8281604078
                  </p>
                  <p>
                    Skype: sibin.xavier.1
                  </p>
                  <p>
                    Email: sibinx7@gmail.com/sibinx7@outlook.com
                  </p>
                </div>
              </div>
              <div className="cell small-12 medium-6">
                <div className="grid-x">
                  <div className="cell small-12 medium-6">
                    <div className="footer__box">
                      <h3>Freelance</h3>
                      <ul>
                        <li>
                          <a href="">Projects</a>
                        </li>
                        <li>
                          <a href="">Pricing</a>
                        </li>
                        <li>
                          <a href="">Portfoios</a>
                        </li>
                        <li>
                          <a href="">Service</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cell small-12 medium-6">
                    <div className="footer__box">
                      <h3>Information</h3>
                      <ul>
                        <li>
                          <a href="">About me</a>
                        </li>
                        <li>
                          <Link to="contact">Contact</Link>
                        </li>
                        <li>
                          <a href="">WordPress</a>
                        </li>
                        <li>
                          <a href="">Culture</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cell small-12 medium-3">
                <div className="footer__box">
                  <h3 className={`text-uppercase`}>Skills</h3>
                  <div className="clearfix"></div>
                  <ul className="skill_sets">
                    {
                      skills.map((item, index) => {
                        return <li key={`${index }`}>{item.name}</li>
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="grid-x">
              <div className="cell small-12 medium-5">
                <ul className="social__icons">
                  <li><a href="">
                    <span className="fab fa-facebook-f"></span>                  
                  </a></li>
                  <li><a href="">
                    <span className="fab fa-twitter"></span>                  
                  </a></li>
                  <li><a href="">
                    <span className="fab fa-youtube"></span>                  
                  </a></li>
                  <li><a href="">
                    <span className="fab fa-linkedin-in"></span>                    
                  </a></li>
                </ul>
              </div>
              <div className="cell small-12 medium-2"></div>
              <div className="cell small-12 medium-5 text-right">
                <p>
                  Copyright &copy; 2018, All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

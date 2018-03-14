import React, {Component} from 'react'
import '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee, faGem } from '@fortawesome/fontawesome-free-solid'
import settings from '../api/env';

const profileImg = require('../images/profile-img.jpg');


export default  class About extends Component{
  render(){
    return <div className='about__content'>
      <div className="about__section">
        <div className="container">
          <div className="grid-x">
            <div className="cell small-12">
              <div className="grid-x grid-margin-x">
                <div className="cell small-12 medium-4">
                  <a href="http://sibin.7chip.com" target={`__blank`} className={`thumbnail`}>
                    <img src={profileImg} alt="Sibin Xavier"/>
                  </a>
                </div>
                <div className="cell small-12 medium-8">
                  <h5>Who am I</h5>
                  <div className="card">
                    <div className="card-section">
                      <h2>About Me</h2>
                      <p>
                        I am a Frontend Developer with more than 4 Year experience. Good in WordPress, PSD to HTML, Ruby on Rails Web Development.
                      </p>
                      <div className="about__me">
                        <p>
                          <b>Name:</b>
                          <span>Sibin Xavier</span>
                        </p>
                        <p>
                          <b>Freelance Status:</b>
                          <span>Not available</span>
                        </p>
                        <p>
                          <b>Date of Birth:</b>
                          <span>27 - 02 - 1991</span>
                        </p>
                        <p>
                          <b>Email:</b>
                          <span>sibinx7@gmail.com</span>
                        </p>
                        <p>
                          <b>Phone:</b>
                          <span>+91-8943648198, +91-8281604078, +91-8589961286</span>
                        </p>
                        <p>
                          <b>Address:</b>
                          <span>East Cheranalloor, Koovappady, Perumbavoor, Ernakulam</span>
                        </p>
                        <p>
                          <b>Nationality:</b>
                          <span>Indian</span>
                        </p>
                        <p>
                          <b>Gender:</b>
                          <span>Male</span>
                        </p>
                        <p>
                          <b>Work Status:</b>
                          <span>Web Developer/ Frontend Developer</span>
                        </p>
                      </div>
                      <div className="about__download">
                        <a href={`${settings.RESUME_URL}`}
                           target='__blank'
                           className={`text-uppercase button button-dark large button-icon`}>
                          <FontAwesomeIcon icon= { faGem }/>
                          Resume
                        </a>
                        <a href="" className={`text-uppercase button button-dark large button-icon`}>
                          <FontAwesomeIcon icon={ faCoffee }/>
                          Hire Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
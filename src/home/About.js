import React, {Component} from 'react'

export default  class About extends Component{
  render(){
    return <div className='about-content'>
      <div className="about-section">
        <h5>Who am I</h5>
        <h2>About Me</h2>
        <p>
          I am a Frontend Developer with more than 4 Year experience. Good in WordPress, PSD to HTML, Ruby on Rails Web Development.
        </p>
        <div className="about-me">
          <p>
            <b>Name :</b>
            <span>Sibin Xavier</span>
          </p>
          <p>
            <b>Freelance :</b>
            <span>Available</span>
          </p>
          <p>
            <b>Date of Birth</b>
            <span>27 - 02 - 1991</span>
          </p>
          <p>
            <b>Email</b>
            <span>sibinx7@gmail.com</span>
          </p>
          <p>
            <b>Phone :</b>
            <span>+91 - 8943648198</span>
          </p>
          <p>
            <b>Address :</b>
            <span>East Cheranalloor, Koovappady, Perumbavoor, Ernakulam</span>
          </p>
          <p>
            <b>Nationality</b>
            <span>Indian</span>
          </p>
          <p>
            <b>Gender</b>
            <span>Male</span>
          </p>
          <p>
            <b>Work Status</b>
            <span>Web Developer</span>
          </p>
        </div>
        <div className="about-download">
          <a href="">Resume</a>
          <a href="">Hire Me</a>
        </div>
      </div>
    </div>
  }
}
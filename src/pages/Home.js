import React, {Component} from 'react';
import {Link} from 'react-router-dom'

// import  '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free'


const jQuery = require("jquery/dist/jquery");
const $ = jQuery;
window.$ = window.jQuery = $;

const  Morphext = require("morphext/dist/morphext.min")
const wordy =  require("wodry.js/dist/wodry.min");
const tooltip = require("tooltip.js/dist/umd//tooltip.min")




class Home extends Component{

	state = {
		error: false 
	}

  constructor(){
    super();
    this.skills = [];
		this.develop = [];
		
  }
  componentWillMount(){
    this.skills = [
      'PHP', 'WordPress', 'Ruby on Rails', 'HTML5',' Angular 1', 'Angular 4', 'Angular 5',
      'React JS', 'Ember JS', 'CSS', 'ES6', 'Spike JS', 'Middleman', 'Laravel', 'Divi Visual Builder',
      'TypeScript', 'MEAN Stack', 'Hapi JS', 'Express JS', 'Node JS', 'Bootstrap', 'Foundation',
      'Material Design', 'Foundation Email Framework'
    ]


    this.develop = [
      'Ruby on Rails Website',
      'Laravel Website',
      'WordPress Website',
      'PSD to HTML Conversion',
      'PSD to WordPress Conversion',
      'Frontend Development',
      'Angular 1, 4, 5 Websites',
      'React JS',
      'Ember JS',
      'MEAN Stack',
    ]
  }


  componentDidMount(){
  
    $(document).ready((e)=> {
      /* Text animation */
      try{
				const wodryText = $('.wodry-text');
				wodryText.Morphext({
					animation:'flipInX',
					separator:'|'
				});
			}catch(e){
				// console.log(e)
			}
      /* End Text animation */

    })
	}
	
	componentDidCatch(){
		this.setState({
			error: 1 
		})
	}

  render(){

		const {	error } = this.state;

		if(error){
			return <div className="card">
				<div className="card-body">
					Unknown errors
				</div>
			</div>
		}

    return <div className="main-content home">
      <div className="home__welcome">
        <div className="container">
          <h1 className={`text-center`}>
            We Develop
            <span className="d-inline wodry-text">
            {
              this.develop.join('|')
            }
            </span>
          </h1>
        </div>
      </div>
      <section className='home__information'>
        <div className="container">
          <p className={`text-center`}>
            Thanks for visiting my portfolio website. Here I develop WordPress Website for
            small and medium clients, PSD to HTML Projects, Laravel and Ruby on Rails Projects.
          </p>
          <p className="text-center">
            <Link className={`button button-secondary large rounded-0`} to={`/portfolio`}>
              <span className="fas fa-eye mr-1"></span>            
              &nbsp;
              Projects
            </Link>
          </p>
        </div>
      </section>
      <section className={`home__skills`}>
        <div className="container">
          <h2 className='text-uppercase text-uppercase section__title text-center'>Skills</h2>
          <ul className="skill__list">
            {
              this.skills.map( (item, index) => <li key={index}>
                <div className="wave__box">
                  <div className="wave__common wave__one"></div>
                  <div className="wave__common wave__two"></div>
                  <div className="wave__common wave__three"></div>
                  <div className="wave__text">
                    <span>{item}</span>
                  </div>
                </div>
              </li> )
            }
          </ul>
        </div>
      </section>

    </div>
  }
}

export default Home;
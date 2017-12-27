import React, {Component} from 'react';

class Home extends Component{

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

  render(){
    return <div className="main-content">
      <h3>Welcome to 7chip</h3>
      <h2>Crafted Websites</h2>
      <h1>
        I Develop
        {
          this.develop.map( (item, index) => <span className="" key={index}>{item}</span>)
        }
      </h1>
      <section>
        <p>
          Thanks for visiting my portfolio website. Here I develop WordPress Website for
          small and medium clients, PSD to HTML Projects, Laravel and Ruby on Rails Projects.
        </p>
      </section>
      <section>
        <h5 className='text-uppercase'>Skills</h5>
        <ul>
          {
            this.skills.map( (item, index) => <li key={index}>{item}</li> )
          }
        </ul>
      </section>

    </div>
  }
}

export default Home;
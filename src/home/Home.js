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


  componentDidMount(){
    const $ = window.$;
    $(document).ready((e)=> {
      /* Text animation */
      const wodryText = $('.wodry-text');
      wodryText.Morphext({
        animation:'flipInX',
        separator:'|'
      });
      /* End Text animation */

    })
  }
  render(){

    return <div className="main-content home">
      <div className="home__welcome">
        <div className="container">
          <h3>Welcome to 7chip</h3>
          <h2>Crafted Websites</h2>
          <h1>
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
        <p>
          Thanks for visiting my portfolio website. Here I develop WordPress Website for
          small and medium clients, PSD to HTML Projects, Laravel and Ruby on Rails Projects.
        </p>
      </section>
      <section className={`home__skills`}>
        <div className="container">
          <h2 className='text-uppercase text-uppercase section__title'>Skills</h2>
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
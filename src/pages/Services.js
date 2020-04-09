import React, {Component} from 'react';

class Services extends Component{
  constructor(){
    super();

    this.service_list = [];

    this.testmonials = [];
  }


  componentWillMount(){
    this.service_list = [
      {
        image: '',
        title: 'PSD to HTML',
        content: ''
      },
      {
        image: '',
        title: 'WordPress Development',
        content:''
      },
      {
        image: '',
        title: 'Ruby on Rails Development',
        content: ''
      },
      {
        image: '',
        title: 'Laravel Development',
        content: ''
      },
      {
        image: '',
        title: 'E- Commerce  Development',
        content: ''
      }
    ]
  }

  render(){
    return <div className="main-services">
      <h5> We Offer</h5>
      <h2>Services</h2>
      <div className="clearfix"></div>
      <div className="service-box">
        <ul>
          {
            this.service_list.map( (item, index) => {
              return <li key={index}>
                <div className="item__image">
                  <img src={item.image} alt={item.title}/>
                </div>
                <div className="item__content">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </li>
            })
          }
        </ul>
      </div>
      <div className="clearfix"></div>

    </div>
  }
}

export default Services;
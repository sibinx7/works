import React, { Component } from "react";
import gql from "graphql-tag";
import {    Mutation    } from "react-apollo";
import {    SEND_MESSAGE    } from "../queries/index";

import $ from "jquery"



export class ContactForm extends Component{
    constructor(props){
        super()
    }

    componentDidMount(){
        const { mutation    } = this.props;
        console.log(this.props)
        console.log(mutation)
        console.log("Mutation....")
    }

    submitForm = (e, sendMessage) => {
        e.preventDefault();                            
        const submitElement= e.currentTarget;
        const formSerializeArray = $(submitElement).serializeArray();
        console.log("FORM DATA...")
        let formData = {};
        formData = formSerializeArray.map((item) => {
            return {
                [item.name]: item.value
            }
        });
        sendMessage({
            variables:{
                ...formData
            }
        });
        console.log(formData);
        return false;
    }


    render(){
        return(
            <Mutation mutation={SEND_MESSAGE}>
                {
                    (sendMessgae) => {
                        
                        return(
                            <div className="contact__form">
                                           <form action="" onSubmit={ (e) => this.submitForm(e, sendMessgae) }>
                            <div className="form-group">
                                    <label htmlFor="" className="form-control-label"></label>
                                    <input className="form-control" type="text" name="name" id="name" placeholder="Enter your Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-control-label"></label>
                                    <input className="form-control" name="email" type="text" id="email" placeholder="Enter your Email"/>
                                </div>                                
                                <div className="form-group">
                                    <label htmlFor="" className="form-control-label"></label>
                                    <textarea className="form-control" rows="7" name="message" id="message" placeholder="Enter your Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="button primary">Send Message</button>
                                </div>
                            </form>
            </div>
                        )
                    }
                }
            </Mutation>
        )
    }
}

export default class Contact extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="portfolio__content">
                <div className="container">
                    <div className="grid-x grid-margin-x">
                        <div className="cell col-12 col-md-6 small-12 medium-6">
                            <h1>Contact Me</h1>
                             <ContactForm/>   
                        </div>
                    </div>
      </div>
      </div>
        )
    }
}
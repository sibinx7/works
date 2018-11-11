import { gql } from "apollo-boost";

export const FETCH_PROJECTS = gql`
  query {
    allProjects{
      id,
      name,
      date,
      client {
        name        
      }
      type
      image
      description
      tags
      likes  
    }
  }
`


export const UPDATE_LIKE = gql`
  mutation updateLikes($id: ID!){
    updateLikes(id: $id){
      id
      like 
    }
  }
` 

export const SEND_MESSAGE = gql`
  mutation sendMessgae($message: String!){
    sendMessage(message: $message){
      name,
      email,
      message 
    }
  }
`
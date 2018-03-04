import settings from "../api/env";
import axios from "axios/index";

export const toggleSidebar = (status=false) =>{
  return {
    type:"TOGGLE_SIDEBAR",
    status
  }
};

export const AJAX_PROCESSING = (status) => {
  return {
    type: 'AJAX_CALLING',
    status
  }
};

export const projectFetchSuccess = (item) => {
  return {
    type: 'PROJECT_FETCH_SUCCESS',
    item
  }
};

export const projectFetchError = (item, error) => {
  return {
   type: 'PROJECT_FETCH_ERROR',
   error,
   item
  }
};


export const fetchProjects = (items=[]) => {
  return (dispatch) => {
    dispatch(AJAX_PROCESSING(true));
    axios.get(settings.PORTFOLIO_URL)
      .then((response)=>{
        const {data} = response;
        dispatch(AJAX_PROCESSING(false));
        dispatch(projectFetchSuccess(data))
      }).catch((error)=> {
        dispatch(projectFetchError(
          error,
          []
        ))
    });
  }
};
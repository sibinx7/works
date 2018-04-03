import { combineReducers } from 'redux'
import projects from './projects';
import {survey_index, surveys } from './surveys';


export const AJAX_PROCESSING = (status = false, action) => {
  switch (action.type) {
    case 'AJAX_PROCESSING':
      return action.status;
    default:
      return status
  }
};

export default combineReducers({
  AJAX_PROCESSING,
  projects,
  surveys,
  survey_index
});
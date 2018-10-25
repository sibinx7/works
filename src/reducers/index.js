import { combineReducers } from 'redux'
import projects from './projects';


export const AJAX_LOADING = (status = false, action) => {
  switch (action.type) {
    case 'AJAX_CALLING':
      return action.status || true;
    default:
      return status
  }
};

export default combineReducers({
  AJAX_LOADING,
  projects
});
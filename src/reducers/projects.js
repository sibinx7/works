const projects = (state=[], action) => {
  switch (action.type) {
    case 'PROJECT_FETCH_SUCCESS':
      return action.projects;
    case 'FILTER':
      const { filter } = action;
      if(filter===''){

      }else if(filter===''){

      }else{

      }
    default:
      return state;
  }
};

export default projects;
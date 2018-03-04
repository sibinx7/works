const projects = (state=[], action) => {
  switch (action.type) {
    case 'INIT':
      return state = action.data
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
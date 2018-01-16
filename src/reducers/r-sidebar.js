const rsidebar = (state, action) => {
  switch (action.type){
    case 'TOGGLE_SIDEBAR':
      return !state;
    default:
      return false
  }
};


export default rsidebar;


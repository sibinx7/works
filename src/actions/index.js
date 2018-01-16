export const toggleSidebar = (status=false) =>{
  return {
    type:"TOGGLE_SIDEBAR",
    status
  }
}
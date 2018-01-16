import {connect} from 'react-redux';
import {toggleSidebar} from '../actions/index';
import Sidebar from '../components/Sidebar';



const mapStateToProps = ({rsidebar}) => {
  return {
    rsidebar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeSidebarAction: (status=false) => {
      dispatch(toggleSidebar(status))
    }
  }
}

const CSidebar = connect(mapStateToProps,mapDispatchToProps)(Sidebar);


export default CSidebar;



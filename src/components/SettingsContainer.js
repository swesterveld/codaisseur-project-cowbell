import React, { Component } from 'react'
import Settings from './Settings';
import {connect} from 'react-redux';

class SettingsContainer extends Component {
  state = {  }
  render() { 
    return ( <Settings profile={this.props.profiles[this.props.currentUserId]} /> );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentUserId: state.currentUserId,
  }
}

export default connect(mapStateToProps, null)(SettingsContainer);
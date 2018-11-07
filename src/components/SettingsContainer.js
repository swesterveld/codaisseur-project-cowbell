import React, { Component } from 'react'
import Settings from './Settings';
import {connect} from 'react-redux';

class SettingsContainer extends Component {
  state = {  }
  render() { 
    return ( <Settings profile={this.props.profiles[this.props.currentUserId]} match={this.props.match} /> );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentUserId: state.currentUserId,
  }
}

// ipv `null` zullen hier actions kunnen komen om filters toe te voegen of properties te wijzigen van huidige user
export default connect(mapStateToProps, null)(SettingsContainer);
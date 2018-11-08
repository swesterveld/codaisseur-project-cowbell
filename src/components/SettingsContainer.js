import React, { Component } from 'react'
import Settings from './Settings';
import {connect} from 'react-redux';

class SettingsContainer extends Component {
  state = {  }
  render() { 
    return ( <Settings /> );
  }
}

export default SettingsContainer;
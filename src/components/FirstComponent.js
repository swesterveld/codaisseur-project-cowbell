import React, { Component } from 'react';
import {connect} from 'react-redux';

class FirstComponent extends Component {
  state = {  }
  render() { 
    return ( null );
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.test,
  }
}

export default connect(mapStateToProps, null)(FirstComponent);
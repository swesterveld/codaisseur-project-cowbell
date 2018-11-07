import React, { Component } from 'react'

class MatchEntry extends Component {
  state = {  }
  render() { 
    return ( <li>
      <p>{this.props.profile.name}</p>
      <p>{this.props.profile.genres}</p>
    </li> );
  }
}
 
export default MatchEntry;
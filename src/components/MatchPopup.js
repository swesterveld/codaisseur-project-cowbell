import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

class MatchPopup extends Component {
  state = {  }
  render() { 
    return ( this.props.matchedProfile && <div>
      <img src={this.props.currentProfile.pictureURL} alt="your profile"></img>
      <img src={this.props.matchedProfile.pictureURL} alt="your profile"></img>
      <p>{this.props.matchedProfile.name} digs your vibe!</p>
      <button><Link to={`/matches/${this.props.matchedProfile.id}`}>Get in touch!</Link></button>
      <button onClick={this.props.keepSearching}>Keep searching</button>
    </div> );
  }
}
 
export default MatchPopup;
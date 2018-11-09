import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './MatchPopup.css';
// import PropTypes from 'prop-types';

class MatchPopup extends Component {
  render() { 
    return ( this.props.matchedProfile && <div className="main-div">
      <img className="profile-circle" id="own-profile-circle" src={this.props.currentProfile.pictureURL} alt="your profile"></img>
      <img className="profile-circle" id="matched-profile-circle" src={this.props.matchedProfile.pictureURL} alt="matched profile"></img>
      <h1 id="vibe-digger">{this.props.matchedProfile.name} digs <br/> your vibe!</h1>
      <button className="matched-button" id="get-in-touch"><Link to={`/matches/${this.props.matchedProfile.id}`}><p>Get in touch!</p></Link></button>
      <button className="matched-button" id="keep-searching" onClick={this.props.keepSearching}><p>Keep searching</p></button>
    </div> );
  }
}
 
export default MatchPopup;
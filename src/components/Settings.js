import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Settings extends Component {
  render() { 
    return ( <div>
      <div> {/* moet vervangen worden door het ding met de CSS van ProfileCard */}
        <img src={this.props.profile.pictureURL} alt="your profile" />
        <p>{this.props.profile.name}, {this.props.profile.type === 'musician' && this.props.profile.age}</p>
        <p>{this.props.profile.location}</p>
      </div>
      <button><Link to="/settings/filters">Search preferences</Link></button>
      <button><Link to="/settings/profile">Edit profile</Link></button>
      <button><Link to="/settings/detailed-settings">Settings</Link></button>
    </div> );
  }
}

export default Settings;
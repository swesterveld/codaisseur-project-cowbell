import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProfilePicture from './ProfilePicture'

class Settings extends Component {
  render() { 
    return (
      <div>
        <div>
          <ProfilePicture profile={this.props.profile} />
        </div>
        <button><Link to="/settings/filters">Search preferences</Link></button>
        <button><Link to="/settings/profile">Edit profile</Link></button>
        <button><Link to="/settings/detailed-settings">Settings</Link></button>
      </div>
    );
  }
}

export default Settings;
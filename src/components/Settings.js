import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProfilePicture from './ProfilePicture'
import './Settings.css'

class Settings extends Component {
  render() { 
    return (
      <div>
        <div>
          <ProfilePicture profile={this.props.profile} />
        </div>
        <div id={"setting-buttons"}>
          <div id={"settings-filters"} className={"settings-item"}>
            <div>
              <Link to="/settings/filters"><img id={"settings-bt-filters"} src={require('../assets/bt_settings_filter.svg')} onClick={this.props.switchToContent} alt={"Configure Filters"}/></Link>
            </div>
            <div>
              Search preferences
            </div>
          </div>
          <div id={"settings-settings"} className={"settings-item"}>

            <div id={"settings-bt-settings"}>
              <Link to="/settings/detailed-settings"><img src={require('../assets/bt_settings_settings.svg')} alt={"Settings"}/></Link>
            </div>
            <div>
              Settings
            </div>
          </div>
          <div id={"settings-profile"} className={"settings-item"}>

            <div id={"settings-bt-profile"}>
              <Link to="/settings/profile"><img id={"settings_bt_profile"} src={require('../assets/bt_settings_edit_profile.svg')} onClick={this.props.switchToMedia} alt={"Edit Profile"}/></Link>
            </div>
            <div>
              Edit profile
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
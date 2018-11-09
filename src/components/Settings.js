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
            {/*<Link to="/settings/filters">*/}
            <div>
              <a href={"/settings/filters"}><img id={"settings-bt-filters"} src={require('../assets/bt_settings_filter.svg')} onClick={this.props.switchToContent} alt={"Configure Filters"}/></a>
            </div>
            <div>
              Search preferences
            </div>
            {/*</Link>*/}
          </div>
          <div id={"settings-settings"} className={"settings-item"}>
            {/*<Link to="/settings/detailed-settings">*/}
            <div id={"settings-bt-settings"}>
              <a href={"/settings/detailed-settings"}><img src={require('../assets/bt_settings_settings.svg')} alt={"Settings"}/></a>
            </div>
            <div>
              Settings
            </div>
            {/*</Link>*/}
          </div>
          <div id={"settings-profile"} className={"settings-item"}>
            {/*<Link to="/settings/profile">*/}
            <div id={"settings-bt-profile"}>
              <a href={"/settings/profile"}><img id={"settings_bt_profile"} src={require('../assets/bt_settings_edit_profile.svg')} onClick={this.props.switchToMedia} alt={"Edit Profile"}/></a>
            </div>
            <div>
              Edit profile
            </div>
            {/*</Link>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
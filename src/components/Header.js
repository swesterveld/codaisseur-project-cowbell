import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

class Header extends Component {
  render() { 
    return ( <div id={'header-container'}>
      <Link to="/settings"><img id="header-bt-settings" className="header-item" src={require('../assets/bt_menu_settings_inactive.svg')} alt="settings"/></Link>
      <Link to="/profile-list"><img id="header-bt-profiles" className="header-item" src={require('../assets/bt_menu_logo_active.svg')} alt="profiles"/></Link>
      <Link to="/matches"><img id="header-bt-matches" className="header-item" src={require('../assets/bt_menu_matches_inactive.svg')} alt="matches"/></Link>
    </div> );
  }
}
 
export default Header;
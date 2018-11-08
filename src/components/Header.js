import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() { 
    return ( <div className={'header-container'}>
      <Link to="/settings"><img className="bt-menu-settings" src={require('../assets/bt_menu_settings_inactive.svg')}/></Link>
      <Link to="/profile-list"><img className="bt-menu-profiles" src={require('../assets/bt_menu_logo_active.svg')}/></Link>
      <Link to="/matches"><img className="bt-menu-matches" src={require('../assets/bt_menu_matches_inactive.svg')}/></Link>
    </div> );
  }
}
 
export default Header;
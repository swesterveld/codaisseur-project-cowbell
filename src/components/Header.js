import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  state = {  }
  render() { 
    return ( <div>
      <Link to="/settings">Settings</Link>
      <Link to="/profile-list">Profile List</Link>
      <Link to="/matches">Matches</Link>
    </div> );
  }
}
 
export default Header;
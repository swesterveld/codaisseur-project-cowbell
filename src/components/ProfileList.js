import React, { Component } from 'react';
import ProfileDetailsContainer from './ProfileDetailsContainer';

class ProfileList extends Component {
  state = {  }

  render() { 
    return ( <div>
      <ProfileDetailsContainer />
      <button> like </button>
      <button> dislike </button>
    </div> );
  }
}

export default ProfileList;
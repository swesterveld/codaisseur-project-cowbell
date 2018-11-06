import React, { Component } from 'react';
import ProfileCardContainer from './ProfileCardContainer';

class ProfileList extends Component {
  state = {  }

  render() { 
    return ( <div>
      <ProfileCardContainer />
      <button> like </button>
      <button> dislike </button>
    </div> );
  }
}

export default ProfileList;
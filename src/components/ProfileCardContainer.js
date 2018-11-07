import React, { Component } from 'react';
import ProfileCard from './ProfileCard';

class ProfileCardsContainer extends Component {
  state = {  }

  render() { 
    return ( <div>
      <ProfileCard profile={this.props.profile} />
    </div> );
  }
}

export default ProfileCardsContainer;
import React, { Component } from 'react';
import ProfileCard from './ProfileCard';

class ProfileCardContainer extends Component {
  state = {  }

  render() { 
    return ( <div>
      <ProfileCard profile={this.props.profile} />
    </div> );
  }
}

export default ProfileCardContainer;
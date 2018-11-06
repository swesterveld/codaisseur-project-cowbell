import React, { Component } from 'react';
import ProfileCardContainer from './ProfileCardContainer';
import VotingButtonsContainer from './VotingButtonsContainer';

class ProfileList extends Component {
  state = {  }

  render() { 
    return ( <div>
      <ProfileCardContainer />
      <VotingButtonsContainer />
    </div> );
  }
}

export default ProfileList;
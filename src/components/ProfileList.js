import React, { Component } from 'react';
import ProfileCardContainer from './ProfileCardContainer';
import VotingButtonsContainer from './VotingButtonsContainer';

class ProfileList extends Component {

  render() { 
    return ( <div>
      <ProfileCardContainer profile={this.props.profile} />
      <VotingButtonsContainer />
    </div> );
  }
}

export default ProfileList;
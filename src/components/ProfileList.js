import React, { Component } from 'react';
import ProfileCardContainer from './ProfileCardContainer';
import VotingButtonsContainer from './VotingButtonsContainer';

class ProfileList extends Component {
  render() {
    return ( <div>
      <ProfileCardContainer profile={this.props.profile} showContactDetails={false} />
      <VotingButtonsContainer addLike={this.props.addLike} addDislike={this.props.addDislike} profileId={this.props.profile ? this.props.profile.id : null} />
    </div> );
  }
}

export default ProfileList;
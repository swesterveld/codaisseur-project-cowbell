import React, { Component } from 'react';
import ProfileCardContainer from './ProfileCardContainer';
import VotingButtonsContainer from './VotingButtonsContainer';

class ProfileBrowser extends Component {
  render() {
    return ( <div>
      <ProfileCardContainer profile={this.props.profile} showContactDetails={false} />
      {this.props.profile && <VotingButtonsContainer addLike={this.props.addLike} 
                                                     addDislike={this.props.addDislike} 
                                                     profileId={this.props.profile ? this.props.profile.id : null} />}
    </div> );
  }
}

export default ProfileBrowser;
import React, { Component } from 'react'
import VotingButtons from './VotingButtons';

class VotingButtonsContainer extends Component {
  state = {  }
  render() {
    return ( <VotingButtons addLike={this.props.addLike} profileId={this.props.profileId} /> );
  }
}
 
export default VotingButtonsContainer;
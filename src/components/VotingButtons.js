import React, { Component } from 'react'

class VotingButtons extends Component {  
  render() {
    return ( <div>
      <button onClick={this.props.handleDislike}> dislike </button>
      <button onClick={this.props.handleLike}> like </button>
    </div> );
  }
}
 
export default VotingButtons;
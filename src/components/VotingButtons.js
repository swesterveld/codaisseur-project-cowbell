import React, { Component } from 'react'

class VotingButtons extends Component {  
  render() {
    return ( <div>
      <button onClick={this.props.handleLike}> like </button>
      <button> dislike </button>
    </div> );
  }
}
 
export default VotingButtons;
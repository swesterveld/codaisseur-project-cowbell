import React, { Component } from 'react'

class VotingButtons extends Component {
  ///Oke maar nu zit dit dus alsnog in de presentational...
  handleLike = () => {
    this.props.addLike(this.props.profileId)
  }
  
  render() {
    return ( <div>
      <button onClick={this.handleLike}> like </button>
      <button> dislike </button>
    </div> );
  }
}
 
export default VotingButtons;
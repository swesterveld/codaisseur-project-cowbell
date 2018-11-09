import React, { Component } from 'react'

class VotingButtons extends Component {  
  render() {
    return (
      <div id={"voting-buttons"}>
        <img id={"voting-bt-back"} src={require('../assets/bt_back.svg')} alt="Back"/>
        <img id={"voting-bt-dislike"} onClick={this.props.handleDislike} src={require('../assets/bt_dislike.svg')} alt="Dislike"/>
        <img id={"voting-bt-like"} onClick={this.props.handleLike} src={require('../assets/bt_like.svg')} alt="Like"/>
      </div>
    );
  }
}
 
export default VotingButtons;
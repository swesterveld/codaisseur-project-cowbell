import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProfileList from './ProfileList';
import {updateCandidates} from '../actions/updateCandidates';
import {addLike} from '../actions/addLike';

class ProfileListContainer extends Component {
  state = { candidates: [],
            currentCandidate: null }
  
  componentDidMount() {
    this.props.updateCandidates(this.props.currentUserId);
    this.setState({candidates: this.props.profiles[this.props.currentUserId].candidates});
  }

  componentDidUpdate(oldProps, oldState) {
    // Does the state-setting again because this.props.updateCandidates seems to be async, so at the time of componentDidMount() this.state is still empty
    if (oldState.candidates !== this.state.candidates && this.state.candidates.length === this.props.profiles[this.props.currentUserId].candidates.length) {
      this.setState({candidates: this.props.profiles[this.props.currentUserId].candidates});
      this.getNewCandidate(); 
    }
  }

  addLike = (toId) => {
    this.props.addLike(this.props.currentUserId, toId);
  }

  getNewCandidate = () => {
    if (this.state.candidates[0]) {
      const newCandidateId = this.state.candidates[0] // Kan nog ingewikkelder gemaakt worden natuurlijk
      this.setState({candidates: this.state.candidates.filter((item, index) => index !== 0)})
      this.setState({currentCandidate: this.props.profiles[newCandidateId]});
    }
    else {
      this.setState({currentCandidate: null});
    }
  }
  
  render() {
    return ( <div>
      <ProfileList profile={this.state.currentCandidate} addLike={this.addLike}/>
    </div> );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentUserId: state.currentUserId,
  }
}

// export default ProfileListContainer;
export default connect(mapStateToProps, {updateCandidates, addLike})(ProfileListContainer);
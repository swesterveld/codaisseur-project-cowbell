import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProfileList from './ProfileList';
import {updateCandidates} from '../actions/updateCandidates';
import {addLike} from '../actions/addLike';
import {addDislike} from '../actions/addDislike'

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
    this.getNewCandidate();
  }

  addDislike = (toId) => {
    this.props.addDislike(this.props.currentUserId, toId);
    this.getNewCandidate();
  }

  getNewCandidate = () => {
    if (this.state.candidates[0]) {
      const newCandidateIndex = Math.round(Math.random()*(this.state.candidates.length-1));
      this.setState({
        candidates: this.state.candidates.filter((item, index) => index !== newCandidateIndex),
        currentCandidate: this.props.profiles[this.state.candidates[newCandidateIndex]]
      })
      // const newCandidateId = this.state.candidates[0] // Kan nog ingewikkelder gemaakt worden natuurlijk
      // this.setState({candidates: this.state.candidates.filter((item, index) => index !== 0),
      //                currentCandidate: this.props.profiles[newCandidateId]})
    }
    else {
      this.setState({currentCandidate: null});
    }
  }
  
  render() {
    return ( <div>
      <ProfileList profile={this.state.currentCandidate} addLike={this.addLike} addDislike={this.addDislike} />
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
export default connect(mapStateToProps, {updateCandidates, addLike, addDislike})(ProfileListContainer);
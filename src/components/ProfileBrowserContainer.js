import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProfileBrowser from './ProfileBrowser';
import {updateCandidates} from '../actions/updateCandidates';
import {updateMatches} from '../actions/updateMatches';
import {addLike} from '../actions/addLike';
import {addDislike} from '../actions/addDislike';
import MatchPopup from './MatchPopup';

class ProfileBrowserContainer extends Component {
  state = { candidates: [],
            currentCandidate: null,
            // previousCandidate: null,
            popupCandidate: null, }
  
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
    if (this.state.currentCandidate) {
      this.props.addLike(this.props.currentUserId, toId);
      if (this.state.currentCandidate.likes.includes(this.props.currentUserId)) {
        this.setState({popupCandidate: this.state.currentCandidate});
      }
      // this.props.updateMatches(this.props.currentUserId);
      this.getNewCandidate();
    }
  }

  addDislike = (toId) => {
    if (this.state.currentCandidate) {
      this.props.addDislike(this.props.currentUserId, toId);
      this.getNewCandidate();
    }
  }

  keepSearching = () => {
    this.setState({popupCandidate: null})
  }

  getNewCandidate = () => {
    if (this.state.candidates[0]) {
      const newCandidateIndex = Math.round(Math.random()*(this.state.candidates.length-1));
      this.setState({
        candidates: this.state.candidates.filter((item, index) => index !== newCandidateIndex),
        // previousCandidate: this.state.currentCandidate,
        currentCandidate: this.props.profiles[this.state.candidates[newCandidateIndex]]
      })
    }
    else {
      this.setState({currentCandidate: null});
    }
  }
  
  render() {
    return ( <div>
      <ProfileBrowser profile={this.state.currentCandidate} 
                                                     addLike={this.addLike} 
                                                     addDislike={this.addDislike} 
                                                     match={this.props.match} 
                                                     currentProfile={this.props.profiles[this.props.currentUserId]} />
      {this.state.popupCandidate && <MatchPopup currentProfile={this.props.profiles[this.props.currentUserId]} 
                                                matchedProfile={this.state.popupCandidate} 
                                                keepSearching={this.keepSearching} />}
    </div> );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentUserId: state.currentUserId,
  }
}

// export default ProfileBrowserContainer;
export default connect(mapStateToProps, {updateCandidates, updateMatches, addLike, addDislike})(ProfileBrowserContainer);
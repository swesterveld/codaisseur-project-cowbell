import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProfileList from './ProfileList';
import {updateCandidates} from '../actions/updateCandidates';
// import {addLike} from '../actions/addLike';

class ProfileListContainer extends Component {
  state = { candidates: [],
            currentCandidate: null }
  
  componentDidMount() {
    this.props.updateCandidates(this.props.currentUser.id); // is waarschijnlijk async ofzo
    this.setState({candidates: this.props.currentUser.candidates});
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.candidates !== this.state.candidates && this.state.candidates.length === this.props.currentUser.candidates.length) {
      console.log('yeey');
      this.setState({candidates: this.props.currentUser.candidates});
      this.getNewCandidate(); 
    }
  }

  /// Al dit candidate-spul maakt het ProfileListContainer-ding wel minder 'flexibel inzetbaar'...
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
      <ProfileList profile={this.state.currentCandidate}/>
    </div> );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentUser: state.currentUser,
  }
}

// export default ProfileListContainer;
export default connect(mapStateToProps, {updateCandidates})(ProfileListContainer);
import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProfileList from './ProfileList';
// import {addLike} from '../actions/addLike';

class ProfileListContainer extends Component {
  state = {  }
  componentDidMount() {
    updateCandidates();
  }
  
  render() {
    return ( <div>
      <ProfileList profile={this.props.profiles}/>
    </div> );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentProfile: state.currentUser,
    candidates: state.candidates,
  }
}

const updateCandidates = () => {
  return;
}

// export default ProfileListContainer;
export default connect(mapStateToProps, null)(ProfileListContainer);
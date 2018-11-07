import React, { Component } from 'react'
import Matches from './Matches';
import { connect } from 'react-redux';
import { updateMatches } from '../actions/updateMatches';

class MatchesContainer extends Component {
  state = { matchProfiles: null }

  componentDidMount() {
    this.props.updateMatches(this.props.currentUserId);
    this.setState({matchProfiles: this.getMatchProfiles()}) // Dit moet hier gebeuren omdat weer een of ander iets asynchronous ofzo?
  }

  getMatchProfiles() {
    return this.props.profiles[this.props.currentUserId].matches
      .map(matchId => this.props.profiles[matchId])
  }

  render() { 
    return ( <Matches profiles={this.state.matchProfiles} /> );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    currentUserId: state.currentUserId,
  }
}

export default connect(mapStateToProps, {updateMatches})(MatchesContainer);
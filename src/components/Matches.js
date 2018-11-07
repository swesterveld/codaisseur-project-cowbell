import React, { Component } from 'react'
import MatchEntry from './MatchEntry';
import {Link} from 'react-router-dom';

class Matches extends Component {
  renderMatches() {
    if (this.props.profiles && this.props.profiles.length) {
      return this.props.profiles.map(profile => {
        return ( <Link to={`/matches/${profile.id}`}><MatchEntry profile={profile} /></Link> )
      })
    }
    else return <p>No matches found</p>;
  }
  
  render() { 
    return ( <ul>
      {this.renderMatches()}
    </ul> );
  }
}
 
export default Matches;
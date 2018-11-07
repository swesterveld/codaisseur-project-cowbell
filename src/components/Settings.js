import React, { Component } from 'react'
import ProfileCardsContainer from './ProfileCardContainer';

class Settings extends Component {
  render() { 
    return ( <div>
      <ProfileCardsContainer profile={this.props.profile} match={this.props.match} />
      <button>Edit details</button>
      <form>
        <p>Add filter</p>
        <input type="list" />
        <input type="submit" />
      </form>
    </div> );
  }
}
 
export default Settings;
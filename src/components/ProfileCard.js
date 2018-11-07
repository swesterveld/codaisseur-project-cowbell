import React, { Component } from 'react';

class ProfileCard extends Component {

  renderProfile() {
    if (!this.props.profile) {
      return <p>No profiles available.</p>
    }
    else {
      return (<div>
        <p>Name: {this.props.profile.name}</p>
        <p>expand using object.entries-loop or sth</p>
      </div>)
    }
  }

  render() { 
    return ( <div>
      {this.renderProfile()}
    </div> );
  }
}

export default ProfileCard;
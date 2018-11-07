import React, { Component } from 'react';

class ProfileCard extends Component {

  renderProfilePicture() {
    return (
      <div>
        <img src={this.props.profile.pictureURL} alt={this.props.profile.name}/>
        <p>{this.props.profile.name}, {this.props.profile.age}</p>
        <p>{this.props.profile.location}</p>
      </div>
    )
  }

  renderContent() {
    return (
      <div>
        {this.renderDescription()}
        {this.renderMediaURLs()}
      </div>
    )
  }

  renderMediaURLs() {
    return (
      <div>
        <h2>Media</h2>
        <ul>
          {this.props.profile.recordingURLs.map((item,index) => {
            return <li><a href={item}>link {index+1}</a></li>
          })}
        </ul>
      </div>
    )
  }

  renderDescription() {
    return (
      <div>
        <h2>Description</h2>
        <p>
          <span>{this.props.profile.genres}</span>
          <span>{this.props.profile.roles}</span>
        </p>
        <p>{this.props.profile.description}</p>
      </div>
    )
  }

  render() { 
    if (!this.props.profile) {
      return (
        <p>No profiles available.</p>
      )
    }
    else {
      return (
        <div>
        {this.renderProfilePicture()}
        {this.renderContent()}
        </div>
      )
    }
  }
}

export default ProfileCard;
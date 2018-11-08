import React, { Component } from 'react';

export const MAX_CHIPS = 2

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

  renderSwitchButtons() {
    return ( 
      <div>
        <button onClick={this.props.switchToContent}>Description</button>
        <button onClick={this.props.switchToMedia}>Media</button>
      </div> 
    )
  }

  renderContent() {
    if (this.props.content) {
      return ( <div>
        {this.renderDescription()}
        {this.showContactDetails && this.renderContactDetails()}
      </div> )
    }
    else {
      return ( <div>
        {this.renderMediaURLs()}
      </div> )
    }
    
  }

  extractPlatform(url) {
    const platforms = [
      'Discogs',
      'SoundCloud',
      'Spotify',
      'YouTube'
    ]

    return platforms.find(p => {
      return url.replace('.','').includes(p.toLowerCase()) // replace() for domains like youtu.be
    })
  }

  renderChips(items, cssClass='chip') {
    let listItems = JSON.parse(JSON.stringify(items))
    listItems.splice(MAX_CHIPS)

    return (
      <ul>
      {
        listItems.map(item => {
          return <li key={item} className={cssClass}>{item}</li>
        })
      }
      </ul>
    )
  }

  renderMediaURLs() {
    return (
      <div>
        <h2>Media</h2>
        <ul>
          { this.props.profile.recordingURLs.map((url) => {
            let platform = this.extractPlatform(url)
            return <li className={`${platform.toLowerCase()}-url`} key={url}><a href={url}>{platform}</a></li>
          })}
        </ul>
      </div>
    )
  }

  renderDescription() {
    return (
      <div>
        <h2>Description</h2>
          { this.renderChips(this.props.profile.genres, "genre-chip") }
          { this.props.profile.type === 'musician' ? this.renderChips(this.props.profile.roles) : this.renderChips(this.props.profile.wantedRoles) }
        <p>{this.props.profile.description}</p>
      </div>
    )
  }

  renderContactDetails() {
    return (
      <div>
        {/* Dit is omdat nu nog de contact details een lege string zijn overal; uiteindelijk moet dit opgesplitst worden per medium in icoontjes enzo */}
        <p>this.props.profile.contactDetails</p>
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
          {this.renderSwitchButtons()}
          {this.renderContent()}
        </div>
      )
    }
  }
}

export default ProfileCard;
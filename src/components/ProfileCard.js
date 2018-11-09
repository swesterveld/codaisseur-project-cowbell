import React, { Component } from 'react';
import './ProfileCard.css'

export const MAX_CHIPS = 2
export const MEDIA_HEIGHT = 130
export const MEDIA_WIDTH = 230

// Dit dan veranderd worden naar de links naar de svg's ofzo
const CONTACT_MEDIA = ['telephone', 'messenger', 'whatsapp', 'email']

class ProfileCard extends Component {

  renderProfilePicture() {
    return (
      <div id={"cover"}>
        <div>
          <img id={"cover-photo"} src={this.props.profile.pictureURL} alt={this.props.profile.name}/>
          <div id={"cover-tag"}>
            <div id={"tag-name"}>{this.props.profile.name}, {this.props.profile.age}</div>
            <div id={"tag-location"}>{this.props.profile.location}</div>
          </div>
        </div>
      </div>
    )
  }

  renderSwitchButtons() {
    return ( 
      <div id={"details-options"}>
        <img id={"option-description"} src={require('../assets/bt_profile_person_active.svg')} onClick={this.props.switchToContent} alt={"Description"}/>
        <img id={"option-media"} src={require('../assets/bt_profile_media_inactive.svg')} onClick={this.props.switchToMedia} alt={"Media"}/>
        <img id={"option-share"} src={require('../assets/bt_share.svg')} alt={"Share"}/>
      </div>
    )
  }

  renderContent() {
    if (this.props.content) {
      return ( <div>
        {this.renderDescription()}
        {this.props.showContactDetails && this.renderContactDetails()}
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

  renderKeywords(list) {
    let keywords = [...list]
    return keywords.join(', ')
  }

  renderMediaURLs() {
    return (
      <div id={"details-media"}>
        <ul>
          { this.props.profile.recordingURLs.map((url) => {
            let platform = this.extractPlatform(url)
            let identifier = ''
            switch (platform) {
              case 'SoundCloud':
                let newUrl = url
                  .replace(/color=%23.+&/, 'color=%2356335c&')
                  .replace(/width=.+hei/, `width="${MEDIA_WIDTH}" hei`)
                  .replace(/height=.scro+ /, `height="${MEDIA_HEIGHT}" scro`)
                return <div key={url} dangerouslySetInnerHTML={{__html: `${newUrl}`}} />
              case 'Spotify':
                identifier = url.split('com/')[1]
                return <div key={url} dangerouslySetInnerHTML={{__html: `<iframe width="${MEDIA_WIDTH}" height="${MEDIA_HEIGHT}" src="https://open.spotify.com/embed/${identifier}" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`}} />
              case 'YouTube':
                identifier = url.split('?v=')[1]
                return <div key={url} dangerouslySetInnerHTML={{__html: `<iframe width="${MEDIA_WIDTH}" height="${MEDIA_HEIGHT}" src="https://www.youtube.com/embed/${identifier}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}} />
              default:
                return <li className={`${platform.toLowerCase()}-url`} key={url}><a href={url}>{platform}</a></li>
            }
          })}
        </ul>
      </div>
    )
  }

  renderDescription() {
    let roles = this.props.profile.type === 'musician' ? this.props.profile.roles : this.props.profile.wantedRoles
    return (
      <div id={"details-box"}>
        <div id={"details-keywords"}>
          <span id={"details-genres"}>{ this.renderKeywords(this.props.profile.genres) }</span>
          <span id={"details-roles"}>{ this.renderKeywords(roles) }</span>
        </div>
        <div id={"details-description"}>{this.props.profile.description}</div>
      </div>
    )
  }

  renderContactDetails() {
    let contactDetails = {...this.props.profile.contactInfo};
    console.log(this.props.profile);
    return (
      <div>
        {CONTACT_MEDIA
          .filter(medium => Boolean(contactDetails[medium]))
          .map(medium => <a key={medium} href={contactDetails[medium]}> {medium} </a>)}
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
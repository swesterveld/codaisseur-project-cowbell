import * as React from 'react'

export default function ProfilePicture(props) {
  return (
    <div id={"cover"}>
      <div>
        <img id={"cover-photo"} src={props.profile.pictureURL} alt={props.profile.name}/>
        <div id={"cover-tag"}>
          <div id={"tag-name"}>{props.profile.name}, {props.profile.age}</div>
          <div id={"tag-location"}>{props.profile.location}</div>
        </div>
      </div>
    </div>
  )
}

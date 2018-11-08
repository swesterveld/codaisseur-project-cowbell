// generic Profile class only meant to inherit from
class Profile {
  constructor(
    // vars for main generic info
    id,             // unique number
    type=null,      // either 'musician' or 'band'
    name='',
    contactInfo={},
    description='',
    // vars that might be interesting for filtering
    genres=[],
    location='',
    // links to external resources
    pictureURL='',
    recordingURLs=[],
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.contactInfo = {...contactInfo};
    this.description = description;
    this.genres = genres;
    this.location = location;
    this.pictureURL = pictureURL;
    this.recordingURLs = recordingURLs;

    this.candidates = [];  // id's of profiles that have been recommended by the system
    this.dislikes = [];    // id's of profiles that have been disliked by the current profile
    this.likes = [];       // id's of profiles that have been liked by the current profile
    this.matches = [];     // id's of profiles that have been liked from both sides
    this.filters = [];
  }

  static genres = () => {
    return [
      'Hip-hop',
      'Indie',
      'Jazz',
      'Pop',
      'Rock',
      'R&B',
      'Soul'
    ]
  }

  static locations = () => {
    return [
      'Amsterdam',
      'Brussels',
      'Hilversum',
      'Nieuwegein',
      'Rotterdam',
      'Utrecht',
      'Zaandam'
    ]
  }

  static roles = () => {
    return [
      'Bassist',
      'Guitar',
      'Singer',
    ]
  }

  addLike = (toId) => {
    this.likes.push(toId);
  }

  addDislike = (toId) => {
    this.dislikes.push(toId);
  }

  // Als we dit willen integreren in de settings enzo moet er een ADD_FILTER action komen en moet dat via de reducer gestufft kunnen worden
  addFilter = (filterName, filterFunction) => {
    // filterFunction should accept a certain property of a profile (e.g. `age` which the number 21 is assigned to) and 
    // return `true` if the object satisfies the criteria (and `false` otherwise)
    this.filters.push([filterName, filterFunction])
  }
}

class Musician extends Profile {
  constructor(
    // generic profile vars
    id,
    name,
    contactInfo,
    description,
    genres,
    location,
    pictureURL,
    recordingURLs,
    // vars specific for musicians
    age = 0,
    bandId = null,  // should be null when musician is looking for a band
    gender = 'm',
    roles = [],
  ) {
    super(
      id,
      'musician',
      name,
      contactInfo,
      description,
      genres,
      location,
      pictureURL,
      recordingURLs,
    );
    this.age = age;
    this.bandId = bandId;
    this.gender = gender;
    this.roles = roles;
  }
}

class Band extends Profile {
  constructor(
    // generic profile vars
    id,
    name,
    contactInfo,
    description,
    genres,
    location,
    pictureURL,
    recordingURLs,
    // vars specific for bands
    wantedRoles=[]
  ) {
    super(
      id,
      'band',
      name,
      contactInfo,
      description,
      genres,
      location,
      pictureURL,
      recordingURLs,
    );
    this.wantedRoles = wantedRoles;
  }
}

export {Musician, Band};
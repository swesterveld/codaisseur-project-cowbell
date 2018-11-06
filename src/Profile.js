// generic Profile class only meant to inherit from
class Profile {
  constructor(
    // vars for main generic info
    id,             // unique number
    type=null,      // either 'musician' or 'band'
    name='',
    contactInfo='',
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
    this.contactInfo = contactInfo;
    this.description = description;
    this.genres = genres;
    this.location = location;
    this.pictureURL = pictureURL;
    this.recordingURLs = recordingURLs;

    this.candidates = []  // id's of profiles that have been recommended by the system
    this.dislikes = []    // id's of profiles that have been disliked by the current profile
    this.likes = [];      // id's of profiles that have been liked by the current profile
    this.matches = []     // id's of profiles that have been liked from both sides
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
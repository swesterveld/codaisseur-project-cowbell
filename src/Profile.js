class Profile {
  constructor(
    id,
    type=null,
    name='',
    genres=[],
    description='',
    pictureURL='',
    location='',
    contactInfo='',
    recordingURLs=[],
  ) {
    this.id = id; // unique number
    this.type = type; // either 'musician' or 'band'
    this.name = name;
    this.contactInfo = contactInfo;
    this.description = description;
    this.genres = genres;
    this.location = location;
    this.pictureURL = pictureURL;
    this.recordingURLs = recordingURLs;

    this.likes = [];
    this.dislikes = [];
    this.candidates = [];
    this.matches = [];
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
    id,
    name,
    genres,
    description,
    pictureURL,
    location,
    contactInfo,
    recordingURLs,
    roles=[],
    age=0,
    gender='m',
    bandId=null
  ) {
    super(
      id,
      'musician',
      name,
      genres,
      description,
      pictureURL,
      location,
      contactInfo,
      recordingURLs,
    );
    this.roles = roles;
    this.age = age;
    this.gender = gender;
    this.bandId = bandId;
  }
}

class Band extends Profile {
  constructor(
    id,
    name,
    genres,
    description,
    pictureURL,
    location,
    contactInfo,
    recordingURLs,
    wantedRoles=[]
  ) {
    super(
      id,
      'band',
      name,
      genres,
      description,
      pictureURL,
      location,
      contactInfo,
      recordingURLs,
    );
    this.wantedRoles = wantedRoles;
  }
}

export {Musician, Band};
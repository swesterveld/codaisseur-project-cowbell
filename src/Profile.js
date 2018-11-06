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
    this.dislikes = []
    this.candidates = []
    this.matches = []
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
      contactInfo,
      description,
      genres,
      location,
      pictureURL,
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
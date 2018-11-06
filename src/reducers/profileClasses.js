class Profile {
  constructor(name='', genres=[], description='', pictureURL='', location='', contactInfo='', recordingURLs=[], id, type='') {
    this.name = name;
    this.genres = genres;
    this.description = description;
    this.pictureURL = pictureURL;
    this.location = location;
    this.contactInfo = contactInfo;
    this.recordingURLs = recordingURLs;

    this.id = id;
    this.type = type;
    this.likes = [];
  }

  static genres = () => {
    return [
      'rock',
      'pop',
    ]
  }

  static locations = () => {
    return [
      'Amsterdam',
      'Rotterdam',
    ]
  }

  static instruments = () => {
    return [
      'guitar',
      'piano',
    ]
  }

  addLike = (toId) => {
    this.likes.push(toId);
  }
}

class Musician extends Profile {
  constructor(name, genres, description, pictureURL, location, contactInfo, recordingURLs, id, instruments=[], age=0, gender='m', bandId=null) {
    super(name, genres, description, pictureURL, location, contactInfo, recordingURLs, id, 'musician');
    this.instruments = instruments;
    this.age = age;
    this.gender = gender;
    this.bandId = bandId;
  }
}

class Band extends Profile {
  constructor(name, genres, description, pictureURL, location, contactInfo, recordingURLs, id, wantedInstruments=[]) {
    super(name, genres, description, pictureURL, location, contactInfo, recordingURLs, id, 'band');
    this.wantedInstruments = wantedInstruments;
  }
}

export {Musician, Band};
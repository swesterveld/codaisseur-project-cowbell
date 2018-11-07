import {Musician, Band} from '../Profile';

function makeMusician(object={}) {
  return new Musician(object.id, object.name, object.genres, object.description, object.pictureURL, object.location, object.contactInfo, object.recordingURLs, object.roles, object.age, object.gender, object.bandId)
}

function makeBand(object={}) {
  return new Band(object.id, object.name, object.genres, object.description, object.pictureURL, object.location, object.contactInfo, object.recordingURLs, object.wantedRoles)
}

const profileFixtures = {
  1: makeMusician({
    name: 'Frank Sinatra',
    genres: ['Jazz', 'Pop'],
    description: 'Frank Sinatra\'s music is a blend of Jazz, traditional pop and swing music. He was easy listening, a little jazz, love songs and popular music. He will always be the Chairman of the Board and my very favorite singer.',
    pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Frank_Sinatra_%2757.jpg/220px-Frank_Sinatra_%2757.jpg',
    location: 'Zaandam',
    contactInfo: '',
    recordingURLs: [
      'https://www.youtube.com/watch?v=25HQlRAP_3w',
      'https://open.spotify.com/track/1PVTvvxpSkyJWemW1CwVVk?si=uKFMguXVSfqlAp1cidlcJA'
    ],
    id: 1,
    roles: ['Singer'],
    age: 55,
    gender: 'male',
    bandId: null,
  }),
  2: makeMusician({
    name: 'Lady Gaga',
    genres: ['Pop'],
    description: 'She is known for her unconventionality and provocative work, as well as visual experimentation. Gaga began performing as a teenager, singing at open mic nights and acting in school plays.',
    pictureURL: 'https://media.glamour.com/photos/59566919f4609a21dfa111fa/master/pass/lady-gaga-fashion-awards-getty-1.jpg',
    location: 'Hilversum',
    contactInfo: '',
    recordingURLs: [
      'https://open.spotify.com/track/7dZ1Odmx9jWIweQSatnRqo?si=HiNSRyqESAiu9jo8apafwQ',
      'https://www.youtube.com/watch?v=bo_efYhYU2A'
    ],
    id: 2,
    roles: ['Singer'],
    age: 32,
    gender: 'female',
    bandId: null
  }),
  3: makeMusician({
    name: 'Kanye West',
    genres: ['Pop', 'Hip-hop', 'Soul'],
    description: 'West\'s musical career has been marked by dramatic changes in styles, incorporating an eclectic range of influences from soul, baroque-pop, electro, indie rock, synth-pop, industrial and gospel. Over the course of his career, West has been responsible for cultural movements and progressions within mainstream hip-hop and popular music at large. ',
    pictureURL: 'https://www.billboard.com/files/styles/article_main_image/public/media/kanye-west-2015-a-billboard-1548.jpg',
    location: 'Nieuwegein',
    contactInfo: '',
    recordingURLs: [
      'https://www.youtube.com/watch?v=QpF_df5xpOI',
      'https://open.spotify.com/track/4S8d14HvHb70ImctNgVzQQ?si=tNFutkkoT9q4UWdPz4nSZw'
    ],
    id: 3,
    roles: ['Singer'],
    age: 41,
    gender: 'male',
    bandId: null
  }),
  4: makeMusician({
    name: 'Justin Bieber',
    genres: ['Pop'],
    description: 'The Son of God',
    pictureURL: 'https://www.biography.com/.image/t_share/MTM2OTI2NTkwNzE3MTQyNjIz/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241jpg.jpg',
    location: 'Amsterdam',
    contactInfo: '',
    recordingURLs: [
      'https://www.youtube.com/watch?v=DK_0jXPuIr0',
      'https://open.spotify.com/track/50kpGaPAhYJ3sGmk6vplg0?si=LqeP_CdLRr2IwvfH_4CSDA'
    ],
    id: 4,
    roles: ['Singer'],
    age: 14,
    gender: 'male',
    bandId: null
  }),
  5: makeMusician({
    name: 'Beyonce',
    genres: ['Pop', 'Soul', 'R&B'],
    description: 'Beyoncé Giselle Knowles-Carter is an American singer, songwriter, producer, and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as lead singer of the R&B girl-group Destiny\'s Child.',
    pictureURL: 'https://images-na.ssl-images-amazon.com/images/I/A15dQM39ELL._CR0,0,3840,2880_._SL1000_.jpg',
    location:' Utrecht',
    contactInfo: '',
    recordingURLs: [
      'https://www.youtube.com/watch?v=PeonBmeFR8o'
    ],
    id: 5,
    roles: ['Singer'],
    age: 37,
    gender: 'female',
    bandId: null
  }),
  6: makeMusician({
    name: 'Bono',
    genres: ['Pop', 'Rock'],
    description: 'Saving the world, one clap a time.',
    pictureURL: 'https://images-na.ssl-images-amazon.com/images/I/A15dQM39ELL._CR0,0,3840,2880_._SL1000_.jpg',
    location: 'Amsterdam',
    contactInfo: '',
    recordingURLs: [
      'https://www.youtube.com/watch?v=ftjEcrrf7r0',
      'https://open.spotify.com/track/6wpGqhRvJGNNXwWlPmkMyO?si=EezJwK33RneEphYL8faglg'
    ],
    id: 6,
    roles: ['Singer'],
    age: 49,
    gender: 'male',
    bandId: '8'
  }),
  7: makeBand({
    name: 'K3',
    genres: ['Pop'],
    description: 'K3 is a Belgian-Dutch girl group with a Dutch repertoire, whose current line-up is composed of Hanne Verbruggen, Marthe De Pillecyn and Klaasje Meijer, mainly aimed at pre-adolescent children.',
    pictureURL: 'https://images-1.schellywood.be/thumbnail/hero-slider-image/1680/char-hero-image.png',
    location: 'Brussels',
    contactInfo: '',
    recordingURLs: [
      'https://www.youtube.com/watch?v=zZ--w92ASdM',
      'https://www.youtube.com/watch?v=zo7ik2q8_4E'
    ],
    id: 7,
    wantedRoles: ['Singer'],
  }),
  8: makeBand({
    name: 'U2',
    genres: ['Pop', 'Rock'],
    description: 'U2 are an Irish rock band from Dublin formed in 1976. The group consists of Bono, the Edge, Adam Clayton, and Larry Mullen Jr.',
    pictureURL: 'https://www.u2.com/news/title/the-joshua-tree-tour-2017',
    location: 'Amsterdam',
    contactInfo: '',
    recordingURLs: [
      'https://www.youtube.com/watch?v=ftjEcrrf7r0',
      'https://open.spotify.com/track/6wpGqhRvJGNNXwWlPmkMyO?si=EezJwK33RneEphYL8faglg'
    ],
    id: 8,
    wantedRoles: ['Guitar'],
  }),
  9: makeBand({
    name: 'Tame Impala',
    genres: ['Rock', 'Indie'],
    description: 'Tame Impala is a psychedelic rock band conceived by Australian multi-instrumentalist Kevin Parker. The band began as a home-recording project for Parker, who writes, records, performs, and produces the music.',
    pictureURL: 'https://img.discogs.com/MzwXGgJ1_G5L9IoP-TUO7ZtEahQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-1245513-1466491938-8401.jpeg.jpg',
    location: 'Rotterdam',
    contactInfo: '',
    recordingURLs: [
      'https://www.youtube.com/watch?v=sBzrzS1Ag_g'
    ],
    id: 9,
    wantedRoles: ['Bassist'],
  })
}

// profileFixtures[7].addDislike(1);
// profileFixtures[1].addLike(8);

export default profileFixtures;
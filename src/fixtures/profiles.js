import {Musician, Band} from '../Profile';

function makeMusician(object={}) {
  return new Musician(
    object.id,
    object.name,
    object.contactInfo,
    object.description,
    object.genres,
    object.location,
    object.pictureURL,
    object.recordingURLs,
    object.age,
    object.bandId,
    object.gender,
    object.roles
  )
}

function makeBand(object={}) {
  return new Band(
    object.id,
    object.name,
    object.contactInfo,
    object.description,
    object.genres,
    object.location,
    object.pictureURL,
    object.recordingURLs,
    object.wantedRoles
  )
}

const profileFixtures = {
  1: makeMusician({
    name: 'Frank Sinatra',
    genres: ['Jazz', 'Pop'],
    description: 'Frank Sinatra\'s music is a blend of Jazz, traditional pop and swing music. He was easy listening, a little jazz, love songs and popular music. He will always be the Chairman of the Board and my very favorite singer.',
    pictureURL: 'https://d2npu017ljjude.cloudfront.net/images/regular-43/w735/96303-11.jpg',
    location: 'Zaandam',
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
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
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
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
    pictureURL: 'http://www.nova.fr/sites/default/files/styles/ratio_1_370/public/episode/2018-08/Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg?itok=oTCkUdl7',
    location: 'Nieuwegein',
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
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
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
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
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
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
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
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
    pictureURL: 'https://images-1.schellywood.be/thumbnail/book-image/17869/new-image.jpg',
    location: 'Brussels',
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
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
    pictureURL: 'https://cdn.ontourmedia.io/u2/non_secure/images/20170105/new_profile_crop1483638184/large.jpg',
    location: 'Amsterdam',
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
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
    pictureURL: 'https://e0af4153dabf8f9d6b2b-0afdb671d2fada65aba92528a1f1e10d.ssl.cf3.rackcdn.com/wp-content/uploads/2018/02/TameImpala-600x600.jpg?x61497',
    location: 'Rotterdam',
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
    recordingURLs: [
      'https://www.youtube.com/watch?v=sBzrzS1Ag_g'
    ],
    id: 9,
    wantedRoles: ['Bassist'],
  }),
    10: makeMusician({
    name: 'John Frusciante',
    genres: ['Rock'],
    description: 'John Anthony Frusciante is an American guitarist, singer, composer, and producer. He is best known as the former guitarist of the rock band Red Hot Chili Peppers, from 1988 until 1992 and from 1998 until 2009. He recorded five studio albums with them.',
    pictureURL: 'http://shop.borucki.com/wp-content/uploads/2013/03/BORUCKI_frusciante.jpg',
    location: 'Hilversum',
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
    recordingURLs: [
      'https://www.youtube.com/watch?v=m5RRDYPCuvA',
      'https://open.spotify.com/track/2Lt6XpDCo3xETDwWgvZJIY?si=337JzOG2Q16BEZgc1MOsyg'
    ],
    id: 10,
    roles: ['Guitarist'],
    age: 49,
    gender: 'male',
    bandId: 'null'
  }),
    11: makeMusician({
    name: 'Milan van Bovenkamp',
    genres: ['Disco', 'Jazz'],
    description: 'Disco Jesus - For all your parties and festivities.',
    pictureURL: 'https://yt3.ggpht.com/a-/ACSszfG2iQOPI3cYHXG5pIOl_2o0TDC2FyFx5UMfJg=s900-mo-c-c0xffffffff-rj-k-no',
    location: 'Amsterdam',
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
    recordingURLs: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://open.spotify.com/track/6ztstiyZL6FXzh4aG46ZPD?si=7t36jpQPS9m-jiTOj8bXGg'
    ],
    id: 11,
    roles: ['Cowbell'],
    age: 36,
    gender: 'male',
    bandId: 'null'
  }),
    12: makeBand({
    name: 'Atomic Kitten',
    genres: ['Pop'],
    description: 'Atomic Kitten are a British pop girl group formed in Liverpool in 1998 whose current members are Natasha Hamilton and Liz McClarnon. The group was founded by Orchestral Manoeuvres in the Dark members Andy McCluskey and Stuart Kershaw, who served as principal songwriters during Atomic Kitten\'s early years.',
    pictureURL: 'https://image.shutterstock.com/image-photo/small-brown-kitten-isolated-on-260nw-701715115.jpg',
    location: 'Rotterdam',
    contactInfo: {whatsapp: '31634629805', messenger: 'paul.middelkoop', email: 'paul.middelkoop@gmail.com'},
    recordingURLs: [
      'https://www.youtube.com/watch?v=EErY75MXYXI'
    ],
    id: 12,
    wantedRoles: ['Singer'],
  })
}

// profileFixtures[7].addDislike(1);
// profileFixtures[1].addLike(8);
// profileFixtures[1].addFilter('genres', genres => genres.includes('Rock'))

//// For testing matches list: you can (un)comment whichever you like to experiment
// profileFixtures[1].addLike(7);
// profileFixtures[1].addLike(8);
// profileFixtures[1].addLike(9);
profileFixtures[7].addLike(1);
// profileFixtures[8].addLike(1);

export default profileFixtures;

// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections and is always willing to help people out -- for a price.",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Biologist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Video Game Designer",
    age: 22,
    description: "Billionaire video game designer who is embracing his new popularity",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "purple"
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actress",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialite",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "blue"
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football Player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "yellow"
  }
];

// Rooms Array

const roomsArray = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" }
];
// Weapons Array

const weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 }
];
// ITERATION 2

function selectRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickMystery() {
  const suspect = selectRandom(suspectsArray);
  const weapon = selectRandom(weaponsArray);
  const room = selectRandom(roomsArray);

  return {
    suspect: suspect,
    weapon: weapon,
    room: room
  };
}
// ITERATION 3

function revealMystery(envelope) {
  const { suspect, weapon, room } = envelope;
  return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;  
}
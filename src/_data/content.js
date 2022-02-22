const header = 'All the games (and now consoles) that Jonathan has quit.';
const footer = 'For The Gamers';
const entries = [
  {
    id: 'ps5',
    title: 'Playstation 5',
    categories: ['console'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2022-02-19',
    image: {
      src: 'https://i.redd.it/3slun89vjc451.png',
    },
    body: "Yup, an entire console.",
  },
  {
    id: 'destiny 2',
    title: 'Destiny 2',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-12-01',
    image: {
      src: 'https://www.mobygames.com/images/covers/l/433360-destiny-2-playstation-4-front-cover.jpg',
    },
    body: "Space AND Magic! This will be the MMO for him!",
  },
  {
    id: 'eve online',
    title: 'EVE Online',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-12-01',
    image: {
      src: 'https://www.mobygames.com/images/covers/l/171388-eve-online-special-edition-macintosh-front-cover.jpg',
    },
    body: "Space, the thing that will definitely get him into MMO's!",
  },
  {
    id: 'Custom Built PC',
    title: 'Custom Built PC',
    categories: ['console'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-10-21',
    image: {
      src: 'https://tecsuggest.com/wp-content/uploads/2020/06/Best-Budget-Compact-Gaming-PC-Under-1000.jpg',
    },
    body: "Made with his friends, with love, and abandoned 😭 (downgraded to a gaming laptop)",
  },
  {
    id: 'Witcher 3',
    title: 'Witcher 3',
    categories: ['single-player'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-09-01',
    image: {
      src: 'https://www.mobygames.com/images/covers/l/392214-the-witcher-3-wild-hunt-xbox-one-front-cover.png',
    },
    body: "Had a long run but I'm marking the grave here",
  },
  {
    id: 'persona 5',
    title: 'Persona 5',
    categories: ['single-player'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-09-01',
    image: {
      src: 'https://i.imgur.com/uMvN6W3.jpg',
    },
    body: "A story-driven anime based game, full of anime tropes? No way he'd quit this one! /s",
  },
  {
    id: 'battlefield five',
    title: 'Battlefield 5',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-09-01',
    image: {
      src: 'https://www.mobygames.com/images/covers/l/523296-battlefield-v-deluxe-edition-xbox-one-front-cover.jpg',
    },
    body: "The end of Best Squad",
  },
  {
    id: 'battlefield one',
    title: 'Battlefield 1',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-09-01',
    image: {
      src: 'https://media.moddb.com/images/games/1/53/52060/Battlefield_1_Cover_Art.jpg',
    },
    body: "Because we wanted to play on more BF maps...",
  },
  {
    id: 'knock out city',
    title: 'Knockout City',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-06-01',
    image: {
      src: 'https://cdn2.unrealengine.com/egs-knockoutcity-velanstudios-s2-1200x1600-9f7f360701a8.jpg',
    },
    body: "It was so much fun that he just had to stop playing it.",
  },
  {
    id: 'Elder Scrolls Online',
    title: 'Elder Scrolls Online',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2020-12-01',
    image: {
      src: 'https://gamingtrend.com/wp-content/uploads/2014/05/ElderScrolls_hires9.jpg',
      alt: 'Elder scrolls online cover art',
    },
    body: "Another death in the endless saga of Jonathan trying to find an MMO he likes.",
  },
  {
    id: 'Assassins Creed Valhalla',
    title: 'Assassins Creed Valhalla',
    categories: ['single-player'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2021-12-01',
    image: {
      src: 'https://www.mobygames.com/images/covers/l/695955-assassin-s-creed-valhalla-xbox-one-front-cover.jpg',
      alt: 'Assassins Creed cover art',
    },
    body: "To be fair, everyone is tired of this game's formula",
  },
  {
    id: 'Monster Hunter',
    title: 'Monster Hunter World',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2020-09-01',
    image: {
      src: 'https://www.mobygames.com/images/covers/l/452384-monster-hunter-world-digital-deluxe-edition-xbox-one-front-cover.jpg',
      alt: 'Monster Hunter World cover art',
    },
    body: "You hunted monsters. What was there to dislike about this game?!?",
  },
  {
    id: 'Maple Story',
    title: 'Maple Story',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2020-01-01',
    image: {
      src: 'http://www.capsulecomputers.com.au/wp-content/uploads/2012/03/maplestory-logo.png',
      alt: 'Maple story logo',
      caption: '',
    },
    body: "He got tired of hunting down mushrooms.",
  },
  {
    id: 'wow',
    title: 'World of Warcraft',
    categories: ['multiplayer'],
    color: 'red',
    faicon: 'gamepad',
    datetime: '2019-10-01',
    image: {
      src: 'https://www.mobygames.com/images/covers/l/216725-world-of-warcraft-macintosh-front-cover.jpg',
      alt: 'WOW Cover art',
    },
    body: "Even one of the greatest MMO's ever could not satisfy Jonathan!",
  },
];

// Page details
const pageTitle = 'How Long Since Jonathan Last Quit A Video Game (or console now)'; // The title of the page that shows in the browser tab
const pageDescription = "Timeline of Jonathan's Video Game History"; // The description of the page for search engines
const pageAuthor = 'TaySix'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};

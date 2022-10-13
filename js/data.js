// генерация временных данных для разработки
import {getRandomIntInclusive} from './util.js';
import {getRandomFloat} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getRandomElements} from './util.js';

const ACCOMODATION_TYPES = [
  'palace', 'flat', 'house', 'bungalow', 'hotel',
];

const CHECKIN_CHECKOUT_TIMES = [
  '12:00', '13:00', '14:00',
];

const FEATURES = [
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const DESCRIPTIONS = [
  'Stay home if you don\'t like it', 'Best accomodation you\'ve ever had', 'We even have cookies', 'PLEASE COME WE NEED MONEY', 'Not great not terrible'
];

const TITLES = [
  'Amazing place in Tokyo', 'Home of the Samurai', 'KONNICHIWA!', 'Japanese legend',
];

const createAuthor = () => {
  const randomUserNumber = getRandomIntInclusive(1, 10);
  if (randomUserNumber < 10) {
    return {
      avatar: `img/avatars/user0${randomUserNumber}.png`
    };
  } else {
    return {
      avatar: `img/avatars/user${randomUserNumber}.png`,
    };
  }
};

const createLocation = () => ({
  lat: getRandomFloat(35.65000, 35.70000, 5),
  lng: getRandomFloat(139.70000, 139.80000, 5),
});

const createOffer = () => {

  const location = createLocation();

  return {
    title: getRandomArrayElement(TITLES),
    address: `${location.lat}, ${location.lng}`,
    price: Math.ceil(Math.random() * 1000),
    type: getRandomArrayElement(ACCOMODATION_TYPES),
    rooms: Math.ceil(Math.random() * 10),
    guests: Math.ceil(Math.random() * 10),
    checkin: getRandomArrayElement(CHECKIN_CHECKOUT_TIMES),
    checkout: getRandomArrayElement(CHECKIN_CHECKOUT_TIMES),
    features: getRandomElements(FEATURES),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomElements(PHOTOS),
  };
};

const SIMILAR_ADS_COUNT = 10;

const createAd = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createLocation(),
});

const createSimilarAds = () => Array.from({length: SIMILAR_ADS_COUNT}, createAd);

export {createSimilarAds};

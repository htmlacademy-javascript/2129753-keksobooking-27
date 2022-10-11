const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && max >= 0) {
    if (min <= max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (min > max) { // если "от" больше "до", меняем местами
      max = Math.ceil(max);
      min = Math.floor(min);
      return Math.floor(Math.random() * (min - max + 1)) + max;
    }
  } return NaN;
};
// за основу взят пример из раздела MDN web docs про Math.random()
// функция несовершенна: если передать ей два числа с плавающей точкой, всё равно вернёт целое число

const getRandomFloat = (min, max, decimalPlaces) => {
  if (min >= 0 && max >= 0 && min <= max) { // здесь не буду менять числа местами, пусть юзер сразу вводит как надо
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces); // метод toFixed() тоже нашла на MDN
  } return NaN;
};

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

const createLocation = () => ({
  lat: getRandomFloat(35.65000, 35.70000, 5),
  lng: getRandomFloat(139.70000, 139.80000, 5),
});

const createOffer = () => {

  const getRandomArrayElement = (array) => array[getRandomIntInclusive(0, array.length - 1)];

  const getRandomElements = (array) => {
    const elementCount = getRandomIntInclusive(1, array.length - 1);
    const randomArray = [];
    for(let i = 0; i < elementCount; i++) {
      randomArray.push(array[i]);
    }
    return randomArray;
  };

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

const createAd = () => ({
  author: createAuthor(),
  offer: createOffer(),
  location: createLocation(),
});

const similarAds = Array.from({length: 10}, createAd);
console.log(JSON.stringify(similarAds));



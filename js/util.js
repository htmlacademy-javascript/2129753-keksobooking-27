// вспомогательные функции

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

const getRandomFloat = (min, max, decimalPlaces) => {
  if (min >= 0 && max >= 0 && min <= max) {
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
  } return NaN;
};

const getRandomArrayElement = (array) => array[getRandomIntInclusive(0, array.length - 1)];

const getRandomElements = (array) => {
  const elementCount = getRandomIntInclusive(1, array.length - 1);
  const randomArray = [];
  for(let i = 0; i < elementCount; i++) {
    randomArray.push(array[i]);
  }
  return randomArray;
};

export {getRandomArrayElement};
export {getRandomElements};
export {getRandomIntInclusive};
export {getRandomFloat};

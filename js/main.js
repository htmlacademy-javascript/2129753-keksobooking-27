function getRandomIntInclusive(min, max) {
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
} // за основу взят пример из раздела MDN web docs про Math.random()
// функция несовершенна: если передать ей два числа с плавающей точкой, всё равно вернёт целое число

getRandomIntInclusive(5, 42)

function getRandom(min, max, decimalPlaces) {
  if (min >= 0 && max >= 0 && min <= max) { // здесь не буду менять числа местами, пусть юзер сразу вводит как надо
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces); // метод toFixed() тоже нашла на MDN
  } return NaN;
}

getRandom(26, 113, 3)

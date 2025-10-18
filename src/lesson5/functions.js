function sumArray(array) {
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

const stringArray = ["a", "b", "c", "10"];
const numberArray = [5, 10, 15, 20];

const resultStrings = sumArray(stringArray);
const resultNumbers = sumArray(numberArray);

// Виводимо результати
console.log("Результат для масиву рядків:", resultStrings);
console.log("Результат для масиву чисел:", resultNumbers);

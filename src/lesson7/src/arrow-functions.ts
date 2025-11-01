const sumArrow = (numbers: number[]): number =>
  numbers.reduce((acc, num) => acc + num, 0);

// Приклад використання:
const numArray: number[] = [1, 2, 3, 4, 5];
console.log(sumArrow(numArray)); // Виведе: 15

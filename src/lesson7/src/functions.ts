function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Приклад використання:
const numArray2: number[] = [1, 2, 3, 4, 5];
console.log(sum(numArray2)); // Виведе: 15

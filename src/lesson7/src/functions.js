function sum(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
// Приклад використання:
var numArray2 = [1, 2, 3, 4, 5];
console.log(sum(numArray2)); // Виведе: 15

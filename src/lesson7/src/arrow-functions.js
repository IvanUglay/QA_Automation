var sumArrow = function (numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
};
// Приклад використання:
var numArray = [1, 2, 3, 4, 5];
console.log(sumArrow(numArray)); // Виведе: 15

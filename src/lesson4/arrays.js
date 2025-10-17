const stringArray = ["b", "a", "c"];
const numberArray = [9, 2, 5, 1, 7];
const booleanArray = [true, false, true];
const mixedArray = ["text", 123, false, null];

mixedArray[0] = "Z";
console.log(mixedArray);
numberArray.push(60);
numberArray.unshift(0);
console.log(numberArray);
booleanArray.pop();
booleanArray.shift();
console.log(booleanArray);

const idx = stringArray.indexOf("b");
console.log(idx);
const includesTrue = stringArray.includes(true);
console.log(includesTrue);
const found = mixedArray.find(item => typeof item === "number");
console.log(found);
const foundIndex = mixedArray.findIndex(item => item === null);
console.log(foundIndex);

//Перебір масивів
console.log("\nПеребір forEach:");
stringArray.forEach((item, i) => console.log(`strings[${i}] = ${item}`));

console.log("\nПеребір map:");
numberArray.map((num, i) => console.log(`numbers[${i}] * 2 = ${num * 2}`));

//Інші популярні методи
const filtered = numberArray.filter(num => num > 20);
console.log("\nЧисла > 20:", filtered);

const sum = numberArray.reduce((acc, n) => acc + n, 0);
console.log("Сума чисел:", sum);

const hasEven = numberArray.some(n => n % 2 === 0);
console.log("Є парні числа:", hasEven);

const allPositive = numberArray.every(n => n >= 0);
console.log("Всі додатні:", allPositive);

//Сортування
stringArray.sort();
numberArray.sort((a, b) => a - b);
console.log("\nСортування:");
console.log(stringArray);
console.log(numberArray);

//Копії та об’єднання
const copy1 = [...mixedArray];
const copy2 = numberArray.slice();
const combined = mixedArray.concat(numberArray);
console.log("\nКомбінований масив:", combined);

//Багатовимірний масив
const matrix = [stringArray, numberArray, mixedArray];
console.log("\n", matrix)
console.log("\n", matrix[0])
console.log("matrix[0][0]:", matrix[0][0]);
console.log("\n", matrix[1])
console.log("matrix[1][2]:", matrix[1][2]);
console.log("\n", matrix[2])
console.log("matrix[2][3]:", matrix[2][3]);

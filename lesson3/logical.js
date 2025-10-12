let num1 = 10;
let num2 = 5;
let str = "10";
let bool = true;

console.log("Операції порівняння:");
console.log(num1 == str);
console.log(num1 === str);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);

console.log("\nЛогічні операції:");
console.log(bool && (num1 > num2));
console.log(bool || (num1 < num2));
console.log(!bool);
console.log((num1 > num2) && (num1 < 20));
console.log((num1 < num2) || (str === "10"));

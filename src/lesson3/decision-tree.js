let x = 7;
let y = 12;

if (x === y) {
    console.log("x рівне y");
} else if (x < y) {
    console.log("x менше за y");
} else {
    console.log("x більше за y");
}

if (x > 0 && y > 0) {
    console.log("Обидва числа додатні");
} else if (x > 0 || y > 0) {
    console.log("Хоча б одне число додатнє");
} else {
    console.log("Обидва числа не додатні");
}
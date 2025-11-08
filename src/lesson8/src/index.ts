abstract class Operation {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract execute(a: number, b: number): number;

  describe(): void {
    console.log(`Виконується операція: ${this.name}`);
  }
}

class ResultPrinter {
  print(result: number): void {
    console.log(`Результат: ${result}`);
  }
}

class AddOperation extends Operation {
  private printer: ResultPrinter;

  constructor() {
    super("Додавання");
    this.printer = new ResultPrinter();
  }

  execute(a: number, b: number): number {
    const result = a + b;
    this.printer.print(result);
    return result;
  }
}

class MultiplyOperation extends Operation {
  private printer: ResultPrinter;

  constructor() {
    super("Множення");
    this.printer = new ResultPrinter();
  }

  execute(a: number, b: number): number {
    const result = a * b;
    this.printer.print(result);
    return result;
  }
}

const add = new AddOperation();
const multiply = new MultiplyOperation();

add.describe();
const sum = add.execute(10, 5);

console.log("-----");

multiply.describe();
const product = multiply.execute(3, 7);

console.log("-----");

console.log("Комбінування результатів:");
const combined = add.execute(sum, product);
console.log(`Загальний результат: ${combined}`);

console.log("-----");

const operations = [add, multiply];

console.log("Послідовне виконання всіх операцій з одним набором даних:");
for (const op of operations) {
  op.describe();
  op.execute(2, 8);
}

console.log("-----");

function runOperation(op: Operation, a: number, b: number): number {
  op.describe();
  return op.execute(a, b);
}

console.log("Використання поліморфізму:");
const res1 = runOperation(add, 4, 6);
const res2 = runOperation(multiply, 4, 6);
console.log(`Результати: ${res1}, ${res2}`);
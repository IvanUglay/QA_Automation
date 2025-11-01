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
  private printer: ResultPrinter; // композиція

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

// Приклад використання

function main(): void {
  const add = new AddOperation();
  const multiply = new MultiplyOperation();

  add.describe();
  add.execute(5, 7);

  console.log("-----");

  multiply.describe();
  multiply.execute(3, 4);
}

main();
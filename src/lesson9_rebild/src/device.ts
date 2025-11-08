import { IControllable } from "./interfaces";

/**
 * Абстрактний Device реалізує мінімальний інтерфейс IControllable.
 * Ми не дублюємо інтерфейси: інтерфейс описує контракт, а Device — базову реалізацію.
 */
export abstract class Device implements IControllable {
  protected name: string;
  protected isOn: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  turnOn(): void {
    this.isOn = true;
    console.log(`${this.name} увімкнено.`);
  }

  turnOff(): void {
    this.isOn = false;
    console.log(`${this.name} вимкнено.`);
  }

  abstract getStatus(): string;
}

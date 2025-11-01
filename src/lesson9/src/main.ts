interface SmartControllable {
  turnOn(): void;
  turnOff(): void;
  getStatus(): string;
}

abstract class Device implements SmartControllable {
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

abstract class SmartDevice extends Device {
  protected powerUsage: number; // у ватах

  constructor(name: string, powerUsage: number) {
    super(name);
    this.powerUsage = powerUsage;
  }

  getPowerUsage(): number {
    return this.isOn ? this.powerUsage : 0;
  }
}

class SmartLamp extends SmartDevice {
  private brightness: number = 0;

  constructor() {
    super("Розумна лампа", 10);
  }

  setBrightness(level: number): void {
    this.brightness = Math.min(Math.max(level, 0), 100);
    console.log(`${this.name}: яскравість = ${this.brightness}%`);
  }

  getStatus(): string {
    return this.isOn
      ? `${this.name} світить з яскравістю ${this.brightness}%`
      : `${this.name} вимкнена.`;
  }
}

class SmartCamera extends SmartDevice {
  private recording: boolean = false;

  constructor() {
    super("Розумна камера", 5);
  }

  startRecording(): void {
    if (this.isOn) {
      this.recording = true;
      console.log(`${this.name} почала запис.`);
    } else {
      console.log(`Неможливо записувати — ${this.name} вимкнена.`);
    }
  }

  stopRecording(): void {
    this.recording = false;
    console.log(`${this.name} зупинила запис.`);
  }

  getStatus(): string {
    return this.isOn
      ? `${this.name} ${this.recording ? "записує" : "увімкнена"}`
      : `${this.name} вимкнена.`;
  }
}

class SmartThermostat extends SmartDevice {
  private temperature: number = 20;

  constructor() {
    super("Розумний термостат", 3);
  }

  setTemperature(temp: number): void {
    this.temperature = temp;
    console.log(`${this.name} встановлено на ${this.temperature}°C`);
  }

  getStatus(): string {
    return this.isOn
      ? `${this.name} підтримує ${this.temperature}°C`
      : `${this.name} вимкнений.`;
  }
}

function smartHomeControl(device: SmartControllable): void {
  device.turnOn();
  console.log(device.getStatus());
  device.turnOff();
  console.log(device.getStatus());
  console.log("------------");
}

const lamp = new SmartLamp();
const camera = new SmartCamera();
const thermostat = new SmartThermostat();

lamp.setBrightness(80);
smartHomeControl(lamp);

camera.turnOn();
camera.startRecording();
console.log(camera.getStatus());
camera.stopRecording();
smartHomeControl(camera);

thermostat.turnOn();
thermostat.setTemperature(23);
console.log(thermostat.getStatus());
smartHomeControl(thermostat);

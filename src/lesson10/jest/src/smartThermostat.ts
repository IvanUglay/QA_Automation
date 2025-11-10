import { SmartDevice } from './smartDevice';
import { ITemperatureControl } from './interfaces';

/**
 * SmartThermostat — реалізує ITemperatureControl (ISP).
 */
export class SmartThermostat extends SmartDevice implements ITemperatureControl {
    private temperature = 20;

    constructor(name = 'Розумний термостат') {
        super(name, 3);
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

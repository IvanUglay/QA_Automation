import { SmartDevice } from './smartDevice';
import { ILightable } from './interfaces';

/**
 * SmartLamp — наслідує SmartDevice та реалізує ILightable.
 * Таким чином ISP дотримано: тільки ті пристрої, які можуть регулювати світло, мають setBrightness.
 */
export class SmartLamp extends SmartDevice implements ILightable {
    private brightness = 0;

    constructor(name = 'Розумна лампа') {
        super(name, 10);
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

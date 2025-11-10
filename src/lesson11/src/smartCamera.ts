import { SmartDevice } from './smartDevice';
import { IRecordable } from './interfaces';

/**
 * SmartCamera — реалізує IRecordable (ISP).
 */
export class SmartCamera extends SmartDevice implements IRecordable {
    private recording = false;

    constructor(name = 'Розумна камера') {
        super(name, 5);
    }

    startRecording(): void {
        if (!this.isOn) {
            console.log(`Неможливо записувати — ${this.name} вимкнена.`);
            return;
        }
        this.recording = true;
        console.log(`${this.name} почала запис.`);
    }

    stopRecording(): void {
        this.recording = false;
        console.log(`${this.name} зупинила запис.`);
    }

    getStatus(): string {
        return this.isOn
            ? `${this.name} ${this.recording ? 'записує' : 'увімкнена'}`
            : `${this.name} вимкнена.`;
    }
}

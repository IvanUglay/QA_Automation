import { IControllable, ILightable, IRecordable, ITemperatureControl } from './interfaces.js';

/**
 * Функція, що приймає мінімальний інтерфейс — працює з будь-яким контролемним пристроєм.
 */
export function smartHomeControl(device: IControllable): void {
    device.turnOn();
    console.log(device.getStatus());
    device.turnOff();
    console.log(device.getStatus());
    console.log('------------');
}

/**
 * Приклади функцій, що використовують конкретні ISP-інтерфейси:
 * - adjustBrightness приймає ILightable (тобто будь-що, що має setBrightness)
 * - startDeviceRecording приймає IRecordable
 * - changeTemperature приймає ITemperatureControl
 *
 * Це демонструє силу Interface Segregation: ми не змушуємо всі пристрої реалізовувати всі методи.
 */
export function adjustBrightness(device: ILightable, level: number): void {
    device.setBrightness(level);
}

export function startDeviceRecording(device: IRecordable): void {
    device.startRecording();
}

export function stopDeviceRecording(device: IRecordable): void {
    device.stopRecording();
}

export function changeTemperature(device: ITemperatureControl, temp: number): void {
    device.setTemperature(temp);
}

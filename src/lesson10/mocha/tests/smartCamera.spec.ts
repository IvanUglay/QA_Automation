import { expect } from 'chai';
import { SmartCamera } from '../src/smartCamera.js';

describe('SmartCamera', () => {
    let camera: SmartCamera;

    beforeEach(() => {
        camera = new SmartCamera('Камера тест');
    });

    it('повинна вимикатися та вмикатися', () => {
        camera.turnOn();
        expect(camera.getStatus()).to.include('увімкнена');
        camera.turnOff();
        expect(camera.getStatus()).to.include('вимкнена');
    });

    it('не може записувати, коли вимкнена', () => {
        camera.startRecording();
        expect(camera.getStatus()).to.include('вимкнена');
    });

    it('може почати і зупинити запис', () => {
        camera.turnOn();
        camera.startRecording();
        expect(camera.getStatus()).to.include('записує');
        camera.stopRecording();
        expect(camera.getStatus()).to.include('увімкнена');
    });

    it('повертає правильне енергоспоживання', () => {
        camera.turnOff();
        expect(camera.getPowerUsage()).to.equal(0);
        camera.turnOn();
        expect(camera.getPowerUsage()).to.equal(5);
    });
});

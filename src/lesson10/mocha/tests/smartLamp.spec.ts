import { expect } from 'chai';
import { SmartLamp } from '../src/smartLamp.js';

describe('SmartLamp', () => {
    let lamp: SmartLamp;

    beforeEach(() => {
        lamp = new SmartLamp('Лампа тест');
    });

    it('повинна вимикатися та вмикатися', () => {
        lamp.turnOn();
        expect(lamp.getStatus()).to.include('світить');
        lamp.turnOff();
        expect(lamp.getStatus()).to.include('вимкнена');
    });

    it('повинна змінювати яскравість', () => {
        lamp.turnOn();
        lamp.setBrightness(80);
        expect(lamp.getStatus()).to.include('80%');

        lamp.setBrightness(150); // перевірка обмеження
        expect(lamp.getStatus()).to.include('100%');

        lamp.setBrightness(-50); // перевірка мінімуму
        expect(lamp.getStatus()).to.include('0%');
    });

    it('повертає 0 енергоспоживання, коли вимкнена', () => {
        lamp.turnOff();
        expect(lamp.getPowerUsage()).to.equal(0);
    });

    it('повертає реальне енергоспоживання, коли увімкнена', () => {
        lamp.turnOn();
        expect(lamp.getPowerUsage()).to.equal(10);
    });
});

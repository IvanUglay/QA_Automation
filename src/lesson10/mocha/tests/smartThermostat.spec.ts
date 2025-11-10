import { expect } from 'chai';
import { SmartThermostat } from '../src/smartThermostat';

describe('SmartThermostat', () => {
    let thermostat: SmartThermostat;

    beforeEach(() => {
        thermostat = new SmartThermostat('Термостат тест');
    });

    it('повинен вимикатися та вмикатися', () => {
        thermostat.turnOn();
        expect(thermostat.getStatus()).to.include('підтримує');
        thermostat.turnOff();
        expect(thermostat.getStatus()).to.include('вимкнений');
    });

    it('може змінювати температуру', () => {
        thermostat.turnOn();
        thermostat.setTemperature(25);
        expect(thermostat.getStatus()).to.include('25°C');
    });

    it('повертає правильне енергоспоживання', () => {
        thermostat.turnOff();
        expect(thermostat.getPowerUsage()).to.equal(0);
        thermostat.turnOn();
        expect(thermostat.getPowerUsage()).to.equal(3);
    });
});

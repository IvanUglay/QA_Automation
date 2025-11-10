import { expect } from 'chai';
import sinon from 'sinon';
import {
    smartHomeControl,
    adjustBrightness,
    startDeviceRecording,
    stopDeviceRecording,
    changeTemperature
} from '../src/utils';

describe('Utils functions with mocks (Mocha + Sinon)', () => {
    let consoleSpy: sinon.SinonSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
        sinon.restore();
    });

    // --- Моки для тестів ---
    const mockDevice = {
        name: 'MockDevice',
        isOn: false,
        turnOn: sinon.stub().callsFake(function() {
            this.isOn = true; return this.isOn;
        }),
        turnOff: sinon.stub().callsFake(function() {
            this.isOn = false; return this.isOn;
        }),
        getStatus: sinon.stub().callsFake(function() {
            return this.isOn ? 'ON' : 'OFF';
        })
    };

    const mockLamp = {
        setBrightness: sinon.stub().callsFake((level: number) => level),
        name: 'MockLamp'
    };

    const mockCamera = {
        startRecording: sinon.stub().returns('recording started'),
        stopRecording: sinon.stub().returns('recording stopped'),
        name: 'MockCamera'
    };

    const mockThermostat = {
        setTemperature: sinon.stub().callsFake((temp: number) => temp),
        name: 'MockThermostat'
    };

    // --- Тести ---
    it('smartHomeControl має увімкнути та вимкнути пристрій та викликати getStatus', () => {
        smartHomeControl(mockDevice as any);

        expect(mockDevice.turnOn.calledOnce).to.be.true;
        expect(mockDevice.turnOff.calledOnce).to.be.true;
        expect(mockDevice.getStatus.callCount).to.equal(2);
        expect(consoleSpy.calledWith('ON')).to.be.true;
        expect(consoleSpy.calledWith('OFF')).to.be.true;
    });

    it('adjustBrightness має викликати setBrightness з правильним рівнем', () => {
        const result = adjustBrightness(mockLamp as any, 80);
        expect(mockLamp.setBrightness.calledOnceWith(80)).to.be.true;
        expect(result).to.equal(80);
    });

    it('startDeviceRecording має повернути повідомлення про запис', () => {
        const result = startDeviceRecording(mockCamera as any);
        expect(mockCamera.startRecording.calledOnce).to.be.true;
        expect(result).to.equal('recording started');
    });

    it('stopDeviceRecording має повернути повідомлення про зупинку запису', () => {
        const result = stopDeviceRecording(mockCamera as any);
        expect(mockCamera.stopRecording.calledOnce).to.be.true;
        expect(result).to.equal('recording stopped');
    });

    it('changeTemperature має встановити температуру та повернути її', () => {
        const newTemp = 25;
        const result = changeTemperature(mockThermostat as any, newTemp);
        expect(mockThermostat.setTemperature.calledOnceWith(newTemp)).to.be.true;
        expect(result).to.equal(newTemp);
    });
});

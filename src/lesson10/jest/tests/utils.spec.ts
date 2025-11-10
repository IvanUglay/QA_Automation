import { 
  smartHomeControl,
  adjustBrightness,
  startDeviceRecording,
  stopDeviceRecording,
  changeTemperature
} from '../src/utils';

describe('Utils functions', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    // Підміняємо console.log для перевірки
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('smartHomeControl', () => {
    it('повинен увімкнути та вимкнути пристрій та викликати getStatus', () => {
      const mockDevice = {
        turnOn: jest.fn(),
        turnOff: jest.fn(),
        getStatus: jest.fn().mockReturnValue('ON')
      };

      smartHomeControl(mockDevice as any);

      expect(mockDevice.turnOn).toHaveBeenCalledTimes(1);
      expect(mockDevice.turnOff).toHaveBeenCalledTimes(1);
      expect(mockDevice.getStatus).toHaveBeenCalledTimes(2);
      expect(consoleSpy).toHaveBeenCalledWith('ON');
    });
  });

  describe('adjustBrightness', () => {
    it('повинен викликати setBrightness з правильним рівнем', () => {
      const mockLightable = { setBrightness: jest.fn() };
      adjustBrightness(mockLightable as any, 75);
      expect(mockLightable.setBrightness).toHaveBeenCalledWith(75);
    });
  });

  describe('startDeviceRecording / stopDeviceRecording', () => {
    it('startDeviceRecording викликає startRecording', () => {
      const mockCamera = { startRecording: jest.fn() };
      startDeviceRecording(mockCamera as any);
      expect(mockCamera.startRecording).toHaveBeenCalledTimes(1);
    });

    it('stopDeviceRecording викликає stopRecording', () => {
      const mockCamera = { stopRecording: jest.fn() };
      stopDeviceRecording(mockCamera as any);
      expect(mockCamera.stopRecording).toHaveBeenCalledTimes(1);
    });
  });

  describe('changeTemperature', () => {
    it('повинен викликати setTemperature з правильним значенням', () => {
      const mockThermostat = { setTemperature: jest.fn() };
      changeTemperature(mockThermostat as any, 23);
      expect(mockThermostat.setTemperature).toHaveBeenCalledWith(23);
    });
  });
});

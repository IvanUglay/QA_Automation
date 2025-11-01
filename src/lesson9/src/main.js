var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Device = /** @class */ (function () {
    function Device(name) {
        this.isOn = false;
        this.name = name;
    }
    Device.prototype.turnOn = function () {
        this.isOn = true;
        console.log("".concat(this.name, " \u0443\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E."));
    };
    Device.prototype.turnOff = function () {
        this.isOn = false;
        console.log("".concat(this.name, " \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E."));
    };
    return Device;
}());
var SmartDevice = /** @class */ (function (_super) {
    __extends(SmartDevice, _super);
    function SmartDevice(name, powerUsage) {
        var _this = _super.call(this, name) || this;
        _this.powerUsage = powerUsage;
        return _this;
    }
    SmartDevice.prototype.getPowerUsage = function () {
        return this.isOn ? this.powerUsage : 0;
    };
    return SmartDevice;
}(Device));
var SmartLamp = /** @class */ (function (_super) {
    __extends(SmartLamp, _super);
    function SmartLamp() {
        var _this = _super.call(this, "Розумна лампа", 10) || this;
        _this.brightness = 0;
        return _this;
    }
    SmartLamp.prototype.setBrightness = function (level) {
        this.brightness = Math.min(Math.max(level, 0), 100);
        console.log("".concat(this.name, ": \u044F\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044C = ").concat(this.brightness, "%"));
    };
    SmartLamp.prototype.getStatus = function () {
        return this.isOn
            ? "".concat(this.name, " \u0441\u0432\u0456\u0442\u0438\u0442\u044C \u0437 \u044F\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044E ").concat(this.brightness, "%")
            : "".concat(this.name, " \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u0430.");
    };
    return SmartLamp;
}(SmartDevice));
var SmartCamera = /** @class */ (function (_super) {
    __extends(SmartCamera, _super);
    function SmartCamera() {
        var _this = _super.call(this, "Розумна камера", 5) || this;
        _this.recording = false;
        return _this;
    }
    SmartCamera.prototype.startRecording = function () {
        if (this.isOn) {
            this.recording = true;
            console.log("".concat(this.name, " \u043F\u043E\u0447\u0430\u043B\u0430 \u0437\u0430\u043F\u0438\u0441."));
        }
        else {
            console.log("\u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0437\u0430\u043F\u0438\u0441\u0443\u0432\u0430\u0442\u0438 \u2014 ".concat(this.name, " \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u0430."));
        }
    };
    SmartCamera.prototype.stopRecording = function () {
        this.recording = false;
        console.log("".concat(this.name, " \u0437\u0443\u043F\u0438\u043D\u0438\u043B\u0430 \u0437\u0430\u043F\u0438\u0441."));
    };
    SmartCamera.prototype.getStatus = function () {
        return this.isOn
            ? "".concat(this.name, " ").concat(this.recording ? "записує" : "увімкнена")
            : "".concat(this.name, " \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u0430.");
    };
    return SmartCamera;
}(SmartDevice));
var SmartThermostat = /** @class */ (function (_super) {
    __extends(SmartThermostat, _super);
    function SmartThermostat() {
        var _this = _super.call(this, "Розумний термостат", 3) || this;
        _this.temperature = 20;
        return _this;
    }
    SmartThermostat.prototype.setTemperature = function (temp) {
        this.temperature = temp;
        console.log("".concat(this.name, " \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043D\u0430 ").concat(this.temperature, "\u00B0C"));
    };
    SmartThermostat.prototype.getStatus = function () {
        return this.isOn
            ? "".concat(this.name, " \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 ").concat(this.temperature, "\u00B0C")
            : "".concat(this.name, " \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u0438\u0439.");
    };
    return SmartThermostat;
}(SmartDevice));
function smartHomeControl(device) {
    device.turnOn();
    console.log(device.getStatus());
    device.turnOff();
    console.log(device.getStatus());
    console.log("------------");
}
var lamp = new SmartLamp();
var camera = new SmartCamera();
var thermostat = new SmartThermostat();
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

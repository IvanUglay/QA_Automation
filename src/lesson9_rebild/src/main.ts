import { SmartLamp } from "./smartLamp";
import { SmartCamera } from "./smartCamera";
import { SmartThermostat } from "./smartThermostat";
import { smartHomeControl, adjustBrightness, startDeviceRecording, stopDeviceRecording, changeTemperature } from "./utils";

/* Створюємо екземпляри */
const lamp = new SmartLamp();
const camera = new SmartCamera();
const thermostat = new SmartThermostat();

/* Виклики, що демонструють ISP та поліморфізм */
adjustBrightness(lamp, 75);        // працюємо через ILightable
smartHomeControl(lamp);            // працюємо через IControllable

camera.turnOn();
startDeviceRecording(camera);      // працюємо через IRecordable
console.log(camera.getStatus());
stopDeviceRecording(camera);
smartHomeControl(camera);

thermostat.turnOn();
changeTemperature(thermostat, 23); // працюємо через ITemperatureControl
console.log(thermostat.getStatus());
smartHomeControl(thermostat);

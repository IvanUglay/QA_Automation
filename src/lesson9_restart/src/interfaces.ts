// Мінімальні, окремі інтерфейси — ISP
export interface IControllable {
    turnOn(): void;
    turnOff(): void;
    getStatus(): string;
}

export interface IPowerAware {
    getPowerUsage(): number;
}

// Специфічні інтерфейси (ISP)
export interface ILightable {
    setBrightness(level: number): void;
}

export interface IRecordable {
    startRecording(): void;
    stopRecording(): void;
}

export interface ITemperatureControl {
    setTemperature(temp: number): void;
}

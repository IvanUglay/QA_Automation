import { Device } from './device';
import { IPowerAware } from './interfaces';

/**
 * SmartDevice розширює Device та додає властивість powerUsage.
 * Він реалізує IPowerAware (але не примушує кожен пристрій мати всі можливі методи).
 */
export abstract class SmartDevice extends Device implements IPowerAware {
    protected powerUsage: number;

    constructor(name: string, powerUsage: number) {
        super(name);
        this.powerUsage = powerUsage;
    }

    getPowerUsage(): number {
        return this.isOn ? this.powerUsage : 0;
    }
}

import { MotorMemory } from "./memory";
import { motorSingleton } from "./utils/singleton";

export abstract class MotorInstance<T> {
    protected abstract onGetJsVal(): T;
    protected abstract onSetJsVal(value?: T): void;
    protected abstract onGetSize(): number;

    protected _address: number;

    get address(): number {
        return this._address;
    }

    get jsVal(): T {
        return this.onGetJsVal();
    }

    set jsVal(value: T) {
        this.onSetJsVal(value);
    }

    get size(): number {
        return this.onGetSize();
    }

    constructor(
        defaultValue?: T,
        memory: MotorMemory = motorSingleton(MotorMemory),
        address: number = memory.allocate(this.size),
    ) {
        this._address = address;
        this.onSetJsVal(defaultValue);
    }
}
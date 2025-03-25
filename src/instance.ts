import { MotorMemory } from "./memory";
import { motorSingleton } from "./utils/singleton";

export abstract class MotorInstance<T> {
    protected abstract onGetJsVal(): T;
    protected abstract onSetJsVal(value?: T): void;
    protected abstract onGetSize(): number;

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
        readonly memory: MotorMemory = motorSingleton(MotorMemory),
        readonly address: number = memory.allocate(this.size),
    ) {
        if (defaultValue !== undefined)
            this.onSetJsVal(defaultValue);
    }

    free() {
        this.memory.free(this.address, this.size);
    }
}
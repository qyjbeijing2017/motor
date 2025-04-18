import { MotorMemory } from "./memory";
import { motorSingleton } from "./utils/singleton";

export abstract class MotorInstance<T> {
    protected abstract getSize(): number;
    abstract setJS(value: T): void;
    abstract getJS(): T;
    get js(): T {
        return this.getJS();
    }
    set js(value: T) {
        this.setJS(value);
    }
    get size(): number {
        return this.getSize();
    }
    constructor(
        def?: T,
        public readonly memory: MotorMemory = motorSingleton(MotorMemory),
        public readonly address: number = memory.allocate(this.size),
    ) {

    }
}
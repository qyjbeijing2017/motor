import { MotorMemory } from "./memory";
import { motorAssertType } from "./utils/assert-type";
import { motorSingleton } from "./utils/singleton";

export abstract class MotorInstance<T> {
    abstract write(value: T): void;
    abstract read(): T;
    set(value: T | MotorInstance<T>): void {
        if(value instanceof MotorInstance) {
            this.write(value.read());
        } else {
            this.write(value);
        }
    }
    free(): void {
        this.memory.free({
            start: this.address,
            length: motorAssertType(this.constructor).size
        });
    }
    toString(): string {
        return JSON.stringify(this.read(), null, 4);
    }
    constructor(
        defaultValue?: T | MotorInstance<T>, 
        readonly memory: MotorMemory = motorSingleton(MotorMemory), 
        readonly address: number = memory.allocate(motorAssertType(this.constructor).size)
    ) {
        memory.buffer.fill(0, address, address + motorAssertType(this.constructor).size);
        if(defaultValue !== undefined)
            this.set(defaultValue);  
    }
}
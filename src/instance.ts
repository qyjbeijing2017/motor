import { MotorMemory } from "./memory";
import { MotorJSType, MotorType } from "./type";
import { motorSingleton } from "./utils/singleton";

export class MotorInstance<T extends MotorType<any>> {
    get js(): MotorJSType<T> {
        return this.type.getJS(this.memory, this.address);
    }

    set js(value: MotorJSType<T>) {
        this.type.setJS(this.memory, this.address, value);
    }

    constructor(
        readonly type: T,
        def?: MotorJSType<T>,
        readonly memory: MotorMemory = motorSingleton(MotorMemory),
        readonly address: number = memory.allocate(type.size),
    ) {
        if (def !== undefined) {
            this.type.setJS(memory, address, def);
        }
    }

    member<K extends Parameters<T['getMemberType']>[2]>(key: K) {
        return new MotorInstance(
            this.type.getMemberType(this.memory, this.address, key), 
            undefined, 
            this.memory, 
            this.type.getMemberAddress(this.memory, this.address, key)
        );
    }

    index(index: number) {
        return new MotorInstance(
            this.type.getIndexType(this.memory, this.address, index),
            undefined,
            this.memory,
            this.type.getIndexAddress(this.memory, this.address, index)
        );
    }
}
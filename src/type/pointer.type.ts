import { MotorInstance } from "../instance.js";
import { MotorType } from "../type.js";
import { motorAssertType } from "../utils/assert-type.js";

export abstract class MotorPointer<T extends MotorInstance<any>> extends MotorInstance<number> {
    write(value: number): void {
        this.memory.dataView.setUint32(this.address, value, true);
    }
    read(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }

    abstract value: T;

    delete() {
        this.value.free();
    }
    
    static define<T extends MotorType<any>>(type: T) {
        return class extends MotorPointer<InstanceType<T>> {
            static readonly size = 4;
            get value() {
                return new type(undefined, this.memory, this.read()) as InstanceType<T>;
            }
        }
    }

    static pointer<T extends MotorInstance<any>>(instance: T) {
        const pointerType = MotorPointer.define(motorAssertType(instance.constructor));
        return new pointerType(instance.address, instance.memory);
    }
}
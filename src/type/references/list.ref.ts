import { MotorInstance } from "../../instance";
import { MotorType } from "../../type";
import { motorAssertType } from "../../utils/assert-type";

export abstract class MotorList<T extends MotorInstance<T>> extends MotorInstance<(T extends MotorInstance<infer U> ? U : never)[]> {
    get length() {
        return this.memory.dataView.getUint32(this.address + 4, true);
    }
    protected set length(value: number) {
        if(value < this.length) {
            this.memory.free({
                start: this.arrayAddress + value,
                length: (this.length - value) * motorAssertType(this.constructor).size
            });
        } else {
            const address = this.memory.allocate(value * motorAssertType(this.constructor).size);
            this.memory.copy(this.arrayAddress, address, this.length * motorAssertType(this.constructor).size);
            this.memory.buffer.fill(
                0,
                address + this.length * motorAssertType(this.constructor).size,
                address + value * motorAssertType(this.constructor).size
            );
            this.memory.free({
                start: this.arrayAddress,
                length: this.length * motorAssertType(this.constructor).size
            });

            this.arrayAddress = address;
        }
        this.memory.dataView.setUint32(this.address + 4, value, true);
    }
    protected get arrayAddress() {
        return this.memory.dataView.getUint32(this.address, true);
    }
    protected set arrayAddress(value: number) {
        this.memory.dataView.setUint32(this.address, value, true);
    }
    pushBack(value: T): void {
        this.length++;
        this.at(this.length - 1).set(value);
    }
    popBack(): void {
        this.length--;
    }
    removeAt(index: number): void {
        this.memory.copy(
            this.arrayAddress + (index + 1) * motorAssertType(this.constructor).size,
            this.arrayAddress + index * motorAssertType(this.constructor).size,
            (this.length - index - 1) * motorAssertType(this.constructor).size
        );
        this.length--;
    }
    insertAt(index: number, value: T): void {
        
    }
    abstract at(index: number): T;
    define<T extends MotorType<any>>(type: T) {
        return class extends MotorList<InstanceType<T>> {
            at(index: number): InstanceType<T> {
                return new type(undefined, this.memory, this.arrayAddress + index * type.size) as InstanceType<T>;
            }
            write(value: (InstanceType<T> extends MotorInstance<infer U> ? U : never)[]): void {
                if(value) {
                    for (let i = 0; i < value.length; i++) {
                        this.at(i).write(value[i]);
                    }
                }
            }
            read(): (InstanceType<T> extends MotorInstance<infer U> ? U : never)[] {
                let result: (InstanceType<T> extends MotorInstance<infer U> ? U : never)[] = [];
                for (let i = 0; i < this.length; i++) {
                    result.push(this.at(i).read());
                }
                return result;
            }


            static readonly size = 8;
        }
    }
}
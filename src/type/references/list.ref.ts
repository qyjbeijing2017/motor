import { MotorInstance } from "../../instance";
import { MotorMemory } from "../../memory";
import { MotorType } from "../../type";

export abstract class MotorList<T extends MotorInstance<T>> extends MotorInstance<(T extends MotorInstance<infer U> ? U : never)[]> {
    abstract get length(): number;
    protected abstract set length(value: number);

    abstract get arrayAddress(): number;
    protected abstract set arrayAddress(value: number);

    abstract removeAt(index: number): void;
    abstract insertAt(index: number, value: T): void;
    abstract at(index: number): T;
    protected abstract setLength(value: number): void;

    static define<T extends MotorType<any>>(type: T) {
        return class extends MotorList<InstanceType<T>> {
            get length() {
                return this.memory.dataView.getUint32(this.address + 4, true);
            }
            protected set length(value: number) {
                this.setLength(value);
            }
            get arrayAddress() {
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

            setLength(value: number): void {
                if (value < this.length) {
                    this.memory.free({
                        start: this.arrayAddress + value,
                        length: (this.length - value) * type.size
                    });
                } else {
                    const address = this.memory.allocate(value * type.size);
                    this.memory.copy(this.arrayAddress, address, this.length * type.size);
                    this.memory.buffer.fill(
                        0,
                        address + this.length * type.size,
                        address + value * type.size
                    );
                    this.memory.free({
                        start: this.arrayAddress,
                        length: this.length * type.size
                    });

                    this.arrayAddress = address;
                }
                this.memory.dataView.setUint32(this.address + 4, value, true);
            }
            at(index: number): InstanceType<T> {
                return new type(undefined, this.memory, this.arrayAddress + index * type.size) as InstanceType<T>;
            }
            write(value: (InstanceType<T> extends MotorInstance<infer U> ? U : never)[]): void {
                this.length = value.length;
                if (value) {
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
            removeAt(index: number): void {
                this.memory.copy(
                    this.arrayAddress + (index + 1) * type.size,
                    this.arrayAddress + index * type.size,
                    (this.length - index - 1) * type.size
                );
                this.length--;
            }
            insertAt(index: number, value: InstanceType<T>): void {
                this.length++;
                this.memory.copy(
                    this.arrayAddress + index * type.size,
                    this.arrayAddress + (index + 1) * type.size,
                    (this.length - index - 1) * type.size
                );
                this.at(index).set(value);
            }
            static readonly size = 8;
        }
    }
    static newList<T extends MotorType<any>>(
        type: T,
        defaultValue?: (InstanceType<T> extends MotorInstance<infer U> ? U : never)[],
        memory?: MotorMemory,
        address?: number
    ) {
        const List = MotorList.define(type);
        const list = new List(
            defaultValue,
            memory,
            address
        );
        return list;
    }
}
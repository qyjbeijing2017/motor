import { MotorInstance } from "../../instance";
import { MotorMemory } from "../../memory";
import { MotorType } from "../../type";
import { MotorRawOf } from "../../utils/raw-of";


export abstract class MotorList<T extends MotorInstance<any>> extends MotorInstance<number> {
    protected read(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }
    protected write(value: number): void {
        this.memory.dataView.setUint32(this.address, value, true);
    }

    get length(): number {
        return this.memory.dataView.getUint32(this.address + 4, true);
    }

    abstract at(index: number): T;

    abstract setLength(value: number): void;

    abstract removeAt(index: number): void;

    abstract insertAt(index: number, value: T | MotorRawOf<T>): void;

    abstract pushBack(value: T | MotorRawOf<T>): void;

    abstract full(value: T | MotorRawOf<T>): void;

    clear(): void {
        this.setLength(0);
    }

    static define<T extends MotorType<any>>(type: T) {
        return class extends MotorList<InstanceType<T>> {
            static readonly size = 8;
            at(index: number): InstanceType<T> {
                if (index < 0 || index >= this.length) {
                    throw new Error("Index out of range");
                }
                return new type(undefined, this.memory, this.rawValue + index * type.size) as InstanceType<T>;
            }

            setLength(value: number): void {
                if (value === 0) {
                    this.memory.free({
                        start: this.rawValue,
                        length: this.length * type.size
                    });
                    this.memory.dataView.setUint32(this.address, 0, true);
                    this.memory.dataView.setUint32(this.address + 4, 0, true);
                    return;
                }
                const oldLength = this.length;
                if (oldLength < value) {
                    const oldAddress = this.rawValue;
                    const newAddress = this.memory.allocate(value * type.size);
                    this.rawValue = newAddress;
                    this.memory.copy(oldAddress, newAddress, oldLength * type.size);
                } else if (oldLength > value) {
                    this.memory.free({
                        start: this.rawValue + value * type.size,
                        length: oldLength - value
                    });
                }
                this.memory.dataView.setUint32(this.address + 4, value, true);
            }

            removeAt(index: number): void {
                if (index < 0 || index >= this.length) {
                    throw new Error("Index out of range");
                }
                const address = this.rawValue;
                this.memory.copy(address + (index + 1) * type.size, address + index * type.size, (this.length - index - 1) * type.size);
                this.setLength(this.length - 1);
            }

            insertAt(index: number, value: InstanceType<T> | MotorRawOf<InstanceType<T>>): void {
                if (index < 0 || index > this.length) {
                    throw new Error("Index out of range");
                }
                const length = this.length;
                const oldAddress = this.rawValue;
                this.setLength(length + 1);
                const newAddress = this.rawValue;
                this.memory.copy(oldAddress, newAddress, index * type.size);
                this.at(index).rawValue = value instanceof MotorInstance ? value.rawValue : value;
                this.memory.copy(oldAddress + index * type.size, newAddress + (index + 1) * type.size, (length - index) * type.size);
            }

            pushBack(value: InstanceType<T> | MotorRawOf<InstanceType<T>>): void {
                const length = this.length;
                this.setLength(length + 1);
                this.at(length).rawValue = value instanceof MotorInstance ? value.rawValue : value;
            }

            full(value: InstanceType<T> | MotorRawOf<InstanceType<T>>): void {
                for (let i = 0; i < this.length; i++) {
                    this.at(i).rawValue = value instanceof MotorInstance ? value.rawValue : value;
                }
            }

            toString(): string {
                let str = "[" + this.at(0).toString();
                for (let i = 1; i < this.length; i++) {
                    str += ", " + this.at(i).toString();
                }
                return str + "]";
            }

            constructor(defaultValue?: {
                address?: number,
                length?: number,
                defaultValue?: (InstanceType<T> | MotorRawOf<InstanceType<T>>)[]
            } | MotorList<InstanceType<T>>, memory?: MotorMemory, address?: number) {
                super(undefined, memory, address);
                let length = defaultValue instanceof MotorList ? defaultValue.length : (defaultValue?.length ?? defaultValue?.defaultValue?.length ?? 0);
                this.write(defaultValue instanceof MotorList ? defaultValue.rawValue : this.memory.allocate(length * type.size));
                this.memory.dataView.setUint32(this.address + 4, length, true);
                if (!(defaultValue instanceof MotorList) && defaultValue?.defaultValue) {
                    if(defaultValue.defaultValue.length) {
                        for (let i = 0; i < defaultValue.defaultValue.length; i++) {
                            new type(defaultValue.defaultValue[i], this.memory, this.rawValue + i * type.size);
                        }
                    }
                }
            }
        }
    }

    static newList<T extends MotorType<any>>(
        type: T,
        defaultValue?: {
            address?: number,
            length?: number,
            defaultValue?: (InstanceType<T> | MotorRawOf<InstanceType<T>>)[]
        } | MotorList<InstanceType<T>>,
        memory?: MotorMemory,
        address?: number
    ): MotorList<InstanceType<T>> {
        const listType = MotorList.define(type);
        const list = new listType(defaultValue, memory, address);
        return list;
    }
}
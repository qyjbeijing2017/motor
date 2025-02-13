import { MotorInstance } from "../../instance";
import { MotorMemory } from "../../memory";
import { MotorType } from "../../type";
import { MotorRawOf } from "../../utils/raw-of";
import { MotorNull } from "../null.type";
import { MotorPointer } from "../pointer.type";
import { MotorStruct } from "../struct.type";
import { MotorUnsignedInteger } from "../unsigned-integer.type";

export class MotorList<T extends MotorType<any>> extends MotorStruct.define({
    length: MotorUnsignedInteger,
    data: MotorPointer.define(MotorNull)
}) {
    static readonly size = 8;
    private _type: T;

    at(index: number): InstanceType<T> {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of range");
        }
        return new this._type(undefined, this.memory, this.get("data").rawValue + index * this._type.size) as InstanceType<T>;
    }

    full(value: InstanceType<T> | MotorRawOf<InstanceType<T>>): void {
        for (let i = 0; i < this.length; i++) {
            this.at(i).rawValue = value instanceof MotorInstance ? value.rawValue : value;
        }
    }

    clear(): void {
        this.length = 0;
    }

    get length(): number {
        return this.get("length").rawValue;
    }

    set length(value: number) {
        const oldLength = this.get("length").rawValue;
        if (oldLength < value) {
            const oldAddress = this.get("data").rawValue;
            const newAddress = this.memory.allocate(value * this._type.size);
            this.get("data").rawValue = newAddress;
            for (let i = 0; i < oldLength; i++) {
                this.memory.copy(oldAddress + i * this._type.size, newAddress + i * this._type.size, this._type.size);
            }
            for (let i = oldLength; i < value; i++) {
                new this._type(undefined, this.memory, newAddress + i * this._type.size);
            }
        } else if (oldLength > value) {
            this.memory.free({
                start: this.get("data").rawValue + value * this._type.size,
                length: oldLength - value
            });
        }
        this.get("length").rawValue = value
    }

    pushBack(value: InstanceType<T> | MotorRawOf<InstanceType<T>>): void {
        const length = this.length;
        this.length = length + 1;
        this.at(length).rawValue = value instanceof MotorInstance ? value.rawValue : value;
    }
    
    constructor(defaultVal: {
        type: T,
        length?: number,
        defaultValue?: (InstanceType<T> | MotorRawOf<InstanceType<T>>)[]
    }, memory?: MotorMemory, address?: number) {
        super(undefined, memory, address);
        this._type = defaultVal.type
        const length = defaultVal.length ?? defaultVal.defaultValue?.length ?? 0;
        this.get("length").rawValue = length;
        if (length > 0) {
            const address = this.memory.allocate(length * defaultVal.type.size);
            this.get("data").rawValue = address;
            if (defaultVal.defaultValue) {
                for (let i = 0; i < length; i++) {
                    new defaultVal.type(defaultVal.defaultValue[i], this.memory, address + i * defaultVal.type.size);
                }
            }
        } else {
            this.get("data").rawValue = 0;
        }
    }
}
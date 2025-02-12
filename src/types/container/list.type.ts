import { MotorInstance } from "../../instance";
import { MotorMemory } from "../../memory";
import { MotorType } from "../../type";
import { MotorRawOf } from "../../utils/raw-of";

export abstract class MotorList<T extends MotorType<any>> extends MotorInstance<MotorRawOf<InstanceType<T>>[]> {
    abstract get type(): T;
    protected read(): MotorRawOf<InstanceType<T>>[] {
        return (new Array(this.length)).map((_, i) => {
            return new this.type(undefined, this.memory, this.address + i * this.type.size).rawValue;
        });
    }
    protected write(value: MotorRawOf<InstanceType<T>>[]): void {
        throw new Error("Method not implemented.");
    }
    static readonly size = 4;
    private _length: number = 0;
    get length(): number {
        return this._length;
    }
    constructor(defaultValue: MotorRawOf<InstanceType<T>>[] = [], memory?: MotorMemory, address?: number) {
        super(undefined, memory, address);
    }
}

export function motorDefineList<T extends MotorType<any>>(
    type: T, 
    defaultValue: MotorRawOf<InstanceType<T>>[] = [], 
    length: number = Math.max(defaultValue.length, 4), 
    memory?: MotorMemory, 
    address?: number
): typeof MotorList<T> {
    return class extends MotorList<T> {
        get type(): T {
            return type;
        }
    }
}
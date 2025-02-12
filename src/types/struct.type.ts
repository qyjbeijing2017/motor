import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorType } from "../type";
import { MotorRawOf } from "../utils/raw-of";

export abstract class MotorStruct<T extends {[key: string]: MotorType<any>} > extends MotorInstance<{ [K in keyof T]: MotorRawOf<InstanceType<T[K]>> }>{
    abstract definition: T;

    constructor(defaultVal?: { [K in keyof T]: MotorRawOf<InstanceType<T[K]>>; }, memory?: MotorMemory, address?: number) {
        super(defaultVal, memory, address);
    }

    get<K extends keyof T>(key: K): InstanceType<T[K]> {
        let offset = 0;
        for (const k in this.definition) {
            if (k === key as any) {
                return new this.definition[k](undefined, this.memory, this.address + offset) as any;
            }
            offset += this.definition[k].size;
        }
        throw new Error("Invalid key");
    }

    protected read(): { [K in keyof T]: MotorRawOf<InstanceType<T[K]>>; } {
        let offset = 0;
        let result = {} as any;
        for (const key in this.definition) {
            result[key] = new this.definition[key](undefined, this.memory, this.address + offset).rawValue;
            offset += this.definition[key].size;
        }
        return result;
    }

    protected write(value: { [K in keyof T]: MotorRawOf<InstanceType<T[K]>>; }): void {
        let offset = 0;
        for (const key in this.definition) {
            new this.definition[key](value[key], this.memory, this.address + offset);
            offset += this.definition[key].size;
        }
    }

    static define<T extends {[key: string]: MotorType<any>}>( definition: T){
        let size = 0;
        for (const key in definition) {
            size += definition[key].size;
        }
        return class extends MotorStruct<T> {
            definition: T = definition;
            static readonly size = size;
        }
    }
}

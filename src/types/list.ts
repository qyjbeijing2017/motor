import { MotorJSType, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { MotorReference } from "./reference";

export abstract class MotorList<T extends MotorType<any>> extends MotorReference<MotorJSType<T>[]> {
    abstract get type(): T;

    get length(): number {
        if(this.size === 0) {
            return 0;
        }
        return this.size / this.type.size;
    }

    get js(): MotorJSType<T>[] {
        const result: MotorJSType<T>[] = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.at(i).js);
        }
        return result;
    }

    set js(value: MotorJSType<T>[]) {
        this.size = value.length * this.type.size;
        for (let i = 0; i < value.length; i++) {
            this.at(i).js = value[i];
        }
    }

    at(index: number): InstanceType<T> {
        return new this.type(undefined, this.memory, this.refAddress + index * this.type.size) as InstanceType<T>;
    }
}

export type MotorListType<T extends MotorType<any>> = {
    readonly size: 8;
    new (value?: MotorJSType<T>[], memory?: MotorMemory, refAddress?: number): MotorList<T>;
}

export function motorCreateList<T extends MotorType<any>>(type: T): MotorListType<T> {
    return class extends MotorList<T> {
        static readonly size = 8;
        get type(): T {
            return type;
        }
    };
}

import { QzaInstance, QzaJSType, QzaType } from "../instance";
import { QzaMemory } from "../memory";
import { qzaPackageEnvironments } from "../package-environment";

export abstract class QzaStruct<T extends { [key: string]: QzaType<any> }> extends QzaInstance<{ [K in keyof T]: QzaJSType<T[K]> }> {
    abstract get type(): T;

    get js(): { [K in keyof T]: QzaJSType<T[K]> } {
        const result: { [K in keyof T]: QzaJSType<T[K]> } = {} as any;
        let offset = 0;
        for (const key in this.type) {
            result[key] = new this.type[key](undefined, this.memory, this.address + offset).js;
            offset += this.type[key].size;
        }
        return result;
    }

    set js(value: { [K in keyof T]: QzaJSType<T[K]> }) {
        let offset = 0;
        for (const key in this.type) {
            const instance = new this.type[key](value[key], this.memory, this.address + offset);
            instance.js = value[key];
            offset += this.type[key].size;
        }
    }

    get<K extends keyof T>(key: K): InstanceType<T[K]> {
        let offset = 0
        for (const k in this.type) {
            if (k === key as string) {
                return new this.type[k](undefined, this.memory, this.address + offset) as InstanceType<T[K]>;
            }
            offset += this.type[k].size;
        }
        throw new Error(`Key ${key as string} not found in struct`);
    }
}

export type QzaStructType<T extends { [key: string]: QzaType<any> }> = {
    readonly size: number;
    new(def?: { [K in keyof T]: QzaJSType<T[K]> }, memory?: QzaMemory, address?: number): QzaStruct<T>;
}

export function qzaCreateStruct<T extends { [key: string]: QzaType<any> }>(type: T): QzaStructType<T> {
    return class extends QzaStruct<T> {
        static readonly size = Object.values(type).reduce((acc, curr) => acc + curr.size, 0);
        get type(): T {
            return type;
        }
    };
}
qzaPackageEnvironments['qzaCreateStruct'] = qzaCreateStruct;

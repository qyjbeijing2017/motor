import { QzaInstance, QzaJSType, QzaType } from "../instance";
import { QzaMemory } from "../memory";
import { qzaPackageEnvironments } from "../package-environment";

export abstract class QzaArray<T extends QzaType<any>> extends QzaInstance<QzaJSType<T>[]> {
    abstract get type(): T;
    abstract get length(): number;
    get js(): QzaJSType<T>[] {
        const result: QzaJSType<T>[] = new Array(this.length);
        for (let i = 0; i < this.length; i++) {
            result[i] = this.at(i).js;
        }
        return result;
    }
    set js(value: QzaJSType<T>[]) {
        for (let i = 0; i < Math.min(value.length, this.length); i++) {
            const instance = this.at(i);
            instance.js = value[i];
        }
    }

    at(index: number): InstanceType<T> {
        const address = this.address + index * this.type.size;
        return new this.type(undefined, this.memory, address) as InstanceType<T>;
    }
}

export type QzaArrayType<T extends QzaType<any>> = {
    readonly size: number;
    new(def?: QzaJSType<T>[], memory?: QzaMemory, address?: number): QzaArray<T>;
}

export function qzaCreateArray<T extends QzaType<any>>(type: T, length: number): QzaArrayType<T> {
    return class extends QzaArray<T> {
        static readonly size = type.size * length;
        get type(): T {
            return type;
        }
        get length(): number {
            return length;
        }
    };
}
qzaPackageEnvironments['qzaCreateArray'] = qzaCreateArray;

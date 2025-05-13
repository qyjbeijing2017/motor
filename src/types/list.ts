import { QzaJSType, QzaType } from "../instance";
import { QzaMemory } from "../memory";
import { QzaReference } from "./reference";

export abstract class QzaList<T extends QzaType<any>> extends QzaReference<QzaJSType<T>[]> {
    abstract get type(): T;

    get length(): number {
        if(this.size === 0) {
            return 0;
        }
        return this.size / this.type.size;
    }

    get js(): QzaJSType<T>[] {
        const result: QzaJSType<T>[] = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.at(i).js);
        }
        return result;
    }

    set js(value: QzaJSType<T>[]) {
        this.size = value.length * this.type.size;
        for (let i = 0; i < value.length; i++) {
            this.at(i).js = value[i];
        }
    }

    add(value: QzaJSType<T>) {
        this.js = [...this.js, value];
    }

    at(index: number): InstanceType<T> {
        return new this.type(undefined, this.memory, this.refAddress + index * this.type.size) as InstanceType<T>;
    }

    clear() {
        this.size = 0;
    }
}

export type QzaListType<T extends QzaType<any>> = {
    readonly size: 8;
    new (value?: QzaJSType<T>[], memory?: QzaMemory, refAddress?: number): QzaList<T>;
}

export function qzaCreateList<T extends QzaType<any>>(type: T): QzaListType<T> {
    return class extends QzaList<T> {
        static readonly size = 8;
        get type(): T {
            return type;
        }
    };
}

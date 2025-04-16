import { Memory } from "./memory";
import { singleton } from "./utils/singleton";

export abstract class Instance<T> {
    abstract onGetSize(): number;
    abstract onGetJs(): T;
    abstract onSetJs(value: T): void;
    constructor(
        def?: T,
        readonly memory: Memory = singleton(Memory),
        readonly address: number = memory.allocate(this.onGetSize()),
    ) {
        if (def) {
            this.onSetJs(def);
        }
    }

    at(index: number): Instance<any> {
        throw new Error(`At ${index} not implemented for ${this.constructor.name}`);
    }

    member(key: string): Instance<any> {
        throw new Error(`Member ${key} not implemented for ${this.constructor.name}`);
    }
}
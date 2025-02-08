import { Action } from "./action";
import { ELBlock, ELMemory } from "./memory";

export abstract class ELType<T> {
    readonly onChange = new Action<T>();
    get value(): T {
        return this.onGet();
    }
    set value(value: T) {
        this.onSet(value);
        this.onChange.emit(value);
    }
    get size(): number {
        return this.block.length;
    }
    protected abstract onSet(value: T): void;
    protected abstract onGet(): T;
    abstract equals(value: T | ELType<T>): boolean;
    same(value: ELType<T>): boolean {
        return this.memory === value.memory && this.block.start === value.block.start && this.block.length === value.block.length;
    }
    constructor(readonly block: ELBlock, readonly memory: ELMemory) {}   
}
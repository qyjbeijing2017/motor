import { Memory } from "./memory";
import { Pointer } from "./types/pointer";
import { Type } from "./types/type";
import { singleton } from "./utils/singleton";

export class Instance<T extends Type<any>> {
    get value(): T extends Type<infer U> ? U : never {
        return this.type.read(this.memory, this.address) as T extends Type<infer U> ? U : never;
    }
    set value(value: T extends Type<infer U> ? U : never) {
        this.type.write(this.memory, this.address, value as T extends Type<infer U> ? U : never);
    }

    get(...key: Parameters<T['getType']>): Instance<ReturnType<T['getType']>> {
        const T = this.type.getType(key[0]) as ReturnType<T['getType']>;
        const offset = this.type.getOffset(key[0]);
        const address = this.address + offset;
        return new Instance(T, undefined, this.memory, address);
    }

    at(index: number): Instance<ReturnType<T['getIndexType']>> {
        const T = this.type.getIndexType(index) as ReturnType<T['getIndexType']>;
        const address = this.address + index * T.size;
        return new Instance(T, undefined, this.memory, address);
    }

    free() {
        this.type.free(this.memory, this.address);
    }

    createPointer(): Instance<Pointer<T>> {
        return new Instance(new Pointer(this.type), this.address as any, this.memory);
    }

    get pointerValue(): Instance<T extends Pointer<infer U> ? U : never> {
        const T = this.type.getPointerType() as Type<any>;
        return new Instance(T, undefined, this.memory, this.value) as any;
    }

    constructor(
        readonly type: T,
        defaultValue?: T extends Type<infer U> ? U : never,
        readonly memory: Memory = singleton(Memory),
        readonly address: number = memory.allocate(type.size),
    ) { 
        if(defaultValue !== undefined) {
            this.value = defaultValue;
        }
    }
}

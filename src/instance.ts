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
    free() {
        this.type.free(this.memory, this.address);
    }
    createPointer(): Instance<Pointer<T>> {
        return new Instance(new Pointer(this.type), this.address as any, this.memory);
    }
    get<Key extends Parameters<T['getMemberType']>[2]>(key: Key): Instance<ReturnType<T['getMemberType']>> {
        const address = this.type.getMemberAddress(this.memory, this.address, key);
        const memberType = this.type.getMemberType(this.memory, this.address, key);
        return new Instance(memberType, undefined, this.memory, address) as Instance<ReturnType<T['getMemberType']>>;
    }
    at(index: number): Instance<ReturnType<T['getIndexType']>> {
        const address = this.type.getIndexAddress(this.memory, this.address, index);
        const indexType = this.type.getIndexType(this.memory, this.address, index);
        return new Instance(indexType, undefined, this.memory, address) as Instance<ReturnType<T['getIndexType']>>;
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

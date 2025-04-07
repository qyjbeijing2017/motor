import { Memory } from "./memory";
import { Type } from "./types/type";
import { singleton } from "./utils/singleton";

export class Instance<T extends Type<any>> {
    get value(): T extends Type<infer U> ? U : never {
        return this.type.read(this.memory, this.address) as T extends Type<infer U> ? U : never;
    }
    set value(value: T extends Type<infer U> ? U : never) {
        this.type.write(this.memory, this.address, value as T extends Type<infer U> ? U : never);
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

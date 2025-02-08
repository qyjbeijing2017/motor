import { MotorBlock, MotorMemory } from "./memory";
import { motorSingleton } from "./singleton";
import { MotorType } from "./type";
import { MotorPointer } from "./types/pointer";

export class MotorInstance<RawType> {
    get value(): RawType {
        return this.type.read(this.memory, this.block);
    }
    set value(value: RawType) {
        this.type.write(this.memory, this.block, value);
    }
    get address() {
        return this.block.start;
    }
    get raw() {
        if(this.type instanceof MotorPointer) {
            const rawType = this.type.type;
            return new MotorInstance(rawType, undefined, this.memory, {
                start: this.value as number,
                length: rawType.size
            });
        } else {
            throw new Error("Not a pointer");
        }
    }
    constructor(
        readonly type: MotorType<RawType>, 
        defaultValue?: RawType, 
        readonly memory: MotorMemory = motorSingleton(MotorMemory),
        readonly block: MotorBlock= memory.allocate(type.size)
    ) {
        if (defaultValue !== undefined) {
            this.value = defaultValue;
        }
    }
    free() {
        this.memory.free(this.block);
    }
}
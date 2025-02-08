import { MotorInstance } from "../instance";
import { MotorBlock, MotorMemory } from "../memory";
import { MotorType } from "../type";

export class MotorPointer<T extends MotorType<any>> implements MotorType<number> {
    readonly size = 4;
    read(memory: MotorMemory, block: MotorBlock) {
        return memory.dataView.getUint32(block.start, true);
    }
    write(memory: MotorMemory, block: MotorBlock, value: number) {
        memory.dataView.setUint32(block.start, value, true);
    }
    new(defaultValue: number | MotorInstance<number>, memory?: MotorMemory, block?: MotorBlock): MotorInstance<number> {
        defaultValue = typeof defaultValue === "number" ? defaultValue : defaultValue.value;
        return new MotorInstance(this, defaultValue, memory, block);
    }
    static pointerTypes = new Map<MotorType<any>, MotorPointer<any>>();
    constructor(readonly type: T) {
        if (MotorPointer.pointerTypes.has(type)) {
            return MotorPointer.pointerTypes.get(type) as MotorPointer<T>;
        }
        MotorPointer.pointerTypes.set(type, this);
    }
}
import { MotorInstance } from "../instance";
import { MotorType } from "../type";

export const MotorFloat: MotorType<number> = {
    size: 4,
    read: (memory, block) => memory.dataView.getFloat32(block.start, true),
    write: (memory, block, value) => memory.dataView.setFloat32(block.start, value, true),
    new: (defaultValue: number | MotorInstance<number>, memory, block) => {
        defaultValue = defaultValue instanceof MotorInstance ? defaultValue.value : defaultValue;
        return new MotorInstance(MotorFloat, defaultValue, memory, block);
    }
}
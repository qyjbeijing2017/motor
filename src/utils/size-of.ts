import { MotorType } from "../type";

export function motorSizeOf<RawValue>(type: MotorType<RawValue>): number {
    return type.size;
}

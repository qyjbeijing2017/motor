import { MotorType } from "../type";

export function motorAssertType<RawType>(value: Function): MotorType<RawType> {
    const keys = Object.keys(value);
    const size = keys.find(key => key === 'size');
    if(size === undefined) {
        throw new Error('Type must have a size property');
    }
    return value as MotorType<RawType>;
}
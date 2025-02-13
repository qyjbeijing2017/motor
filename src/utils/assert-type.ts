import { MotorType } from "../type";

export function motorAssertType(value: Function): MotorType {
    const keys = Object.keys(value);
    const size = keys.find(key => key === 'size');
    if(size === undefined) {
        throw new Error('Type must have a size property');
    }
    return value as MotorType;
}
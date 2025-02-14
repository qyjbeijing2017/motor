import { MotorType } from "../type.js";

export function motorAssertType<T>(value: Function): MotorType<T> {
    const keys = Object.keys(value);
    const size = keys.find(key => key === 'size');
    if(size === undefined) {
        throw new Error('Type must have a size property');
    }
    return value as MotorType<T>
}
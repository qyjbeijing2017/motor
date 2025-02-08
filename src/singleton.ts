import { ClassConstructor } from "./class-constructor";

const singletonMap = new Map<ClassConstructor<any>, any>();

export function singleton<T>(constructor: ClassConstructor<T>, ...args: any[]): T {
    if (!singletonMap.has(constructor)) {
        singletonMap.set(constructor, new constructor(...args));
    }
    return singletonMap.get(constructor);
}
export type ClassConstructor<T> = new (...args: any[]) => T;

const singletonMap = new Map<ClassConstructor<any>, any>();

export function motorSingleton<T>(constructor: ClassConstructor<T>, ...args: any[]): T {
    if (!singletonMap.has(constructor)) {
        singletonMap.set(constructor, new constructor(...args));
    }
    return singletonMap.get(constructor);
}
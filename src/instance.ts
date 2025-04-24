import { MotorMemory } from "./memory";
import { motorSingleton } from "./utils/singleton";

export interface MotorType<T> {
    readonly size: number;
    new(def?: T, memory?: MotorMemory, address?: number): MotorInstance<T>;
}

export function motorTypeOf<T>(type: MotorInstance<T>): MotorType<T> {
    if ((type.constructor as any).size === undefined) {
        throw new Error("Type is not a MotorType");
    }
    return type.constructor as MotorType<T>;
}

export abstract class MotorInstance<T> {
    abstract get js(): T;
    abstract set js(value: T);

    protected onInstanceCreated(): void {
    }

    constructor(
        def?: T,
        public readonly memory: MotorMemory = motorSingleton(MotorMemory),
        public readonly address: number = memory.allocate(motorTypeOf(this).size),
    ) {
        this.onInstanceCreated();
        if (def !== undefined) {
            (this as MotorInstance<T>).js = def;
        }
    }

    free(): void {
        this.memory.free(this.address, motorTypeOf(this).size);
    }

}

export type MotorJsType<T extends MotorInstance<any>> = T extends MotorInstance<infer U> ? U : never;


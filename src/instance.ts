import { MotorMemory } from "./memory";
import { motorSingleton } from "./utils/singleton";

export abstract class MotorInstance<JSType> {
    abstract get js(): JSType;
    abstract set js(value: JSType);

    protected onInstanceCreated(): void {
    }

    constructor(
        def?: JSType,
        readonly memory = motorSingleton(MotorMemory),
        readonly address = memory.allocate(motorTypeof(this).size),
    ) {
        this.onInstanceCreated();
        if (def !== undefined) {
            (this as MotorInstance<JSType>).js = def;
        }
    }

    free() {
        this.memory.free(this.address, motorTypeof(this).size);
    }
}

export type MotorType<JSType> = {
    readonly size: number;
    new(def?: JSType, memory?: MotorMemory, address?: number): MotorInstance<JSType>;
}

export type MotorJSType<T extends MotorInstance<any> | MotorType<any>> = T extends MotorInstance<infer U> ? U : T extends MotorType<infer U> ? U : never;

export function motorTypeof<JSType>(type: MotorInstance<JSType>): MotorType<JSType> {
    if ('size' in type.constructor) {
        return type.constructor as MotorType<JSType>;
    }
    throw new Error('Invalid type: ' + type.constructor.name);
}

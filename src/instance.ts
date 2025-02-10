import { MotorMemory } from "./memory";
import { motorAssertType } from "./utils/is-type";
import { motorSingleton } from "./utils/singleton";
import { motorSizeOf } from "./utils/size-of";

export abstract class MotorInstance<RawValue> {
    constructor(
        defaultVal?: RawValue | MotorInstance<RawValue>,
        readonly memory: MotorMemory = motorSingleton(MotorMemory),
        readonly address: number = memory.allocate(motorSizeOf(motorAssertType(this.constructor)))
    ) {
        if(defaultVal !== undefined)
            this.write(defaultVal instanceof MotorInstance ? defaultVal.rawValue : defaultVal);
    }
    get rawValue(): RawValue {
        return this.read();
    }
    set rawValue(value: RawValue) {
        this.write(value);
    }
    protected abstract read(): RawValue;
    protected abstract write(value: RawValue): void;
}

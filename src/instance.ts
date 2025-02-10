import { MotorMemory } from "./memory";
import { motorAssertType } from "./utils/assert-type";
import { motorSingleton } from "./utils/singleton";

export abstract class MotorInstance<RawValue> {
    private _address: number;
    get address(): number {
        return this._address;
    }
    protected set address(value: number) {
        this._address = value;
    }
    constructor(
        defaultVal?: RawValue | MotorInstance<RawValue>,
        readonly memory: MotorMemory = motorSingleton(MotorMemory),
        address: number = motorAssertType(this.constructor).size
    ) {
        this._address = address;
        if(defaultVal !== undefined) {
            this.write(defaultVal instanceof MotorInstance ? defaultVal.rawValue : defaultVal);
        }

    }
    get rawValue(): RawValue {
        return this.read();
    }
    set rawValue(value: RawValue) {
        this.write(value);
    }
    protected abstract read(): RawValue;
    protected abstract write(value: RawValue): void;

    free(): void {
        this.memory.free({
            start: this.address,
            length: motorAssertType(this.constructor).size,
        });
    }
}

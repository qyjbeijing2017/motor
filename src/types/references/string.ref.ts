import { MotorMemory } from "../../memory";
import { MotorNull } from "../null.type";
import { MotorPointer } from "../pointer.type";
import { MotorStruct } from "../struct.type";
import { MotorUnsignedInteger } from "../unsigned-integer.type";

export class MotorString extends MotorStruct.define({
    length: MotorUnsignedInteger,
    data: MotorPointer.define(MotorNull)
}) {
    static readonly size = 8;
    static readonly decoder = new TextDecoder();
    static readonly encoder = new TextEncoder();

    get length(): number {
        return this.get('length').rawValue;
    }

    toString(): string {
        const start = this.get('data').rawValue;
        return MotorString.decoder.decode(
            this.memory.buffer.slice(start, start + this.length)
        );
    }

    constructor(defaultVal?: string | MotorString, memory?: MotorMemory, address?: number) {
        super(undefined, memory, address);
        if (defaultVal instanceof MotorString) {
            this.get('length').rawValue = defaultVal.length;
            this.get('data').rawValue = defaultVal.get('data').rawValue;
        } else if (typeof defaultVal === 'string') {
            this.get('length').rawValue = defaultVal.length;
            const address = this.memory.allocate(defaultVal.length);
            this.get('data').rawValue = address;
            this.memory.buffer.set(MotorString.encoder.encode(defaultVal), this.get('data').rawValue);
        }
    }

}

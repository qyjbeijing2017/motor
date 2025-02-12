import { MotorMemory } from "../../memory";
import { MotorArray, motorNewArray } from "../array.type";
import { MotorChar } from "../char.type";
import { MotorReference } from "../reference.type";

export class MotorString extends MotorReference<string, MotorArray<MotorChar>> {
    static readonly size = 4;
    static readonly decoder = new TextDecoder();
    static readonly encoder = new TextEncoder();
    private _length: number = 0;
    get length(): number {
        return this._length;
    }
    get raw(): MotorArray<MotorChar> {
        return motorNewArray(MotorChar, this._length, undefined, this.memory, this.rawValue);
    }
    get rawRef(): string {
        const bytes = this.memory.buffer.slice(this.rawValue, this.rawValue + this._length);
        return MotorString.decoder.decode(bytes);
    }
    set rawRef(value: string) {
        this.delete();
        this._length = value.length;
        const encoded = MotorString.encoder.encode(value);
        this.rawValue = this.memory.allocate(encoded.length);
        this.memory.buffer.set(encoded, this.rawValue);
    }
    delete(): void {
        this.memory.free({
            start: this.rawValue,
            length: this._length
        });
        this.rawValue = 0;
        this._length = 0;
    }
    constructor(defaultValue?: string | MotorString, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
        if(typeof defaultValue === "string") {
            this.rawRef = defaultValue;
        }
    }
}
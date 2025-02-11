import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorArray, motorNewArray } from "./array.type";
import { MotorChar } from "./char.type";
import { motorGetPointer, MotorPointer } from "./pointer.type";

export class MotorString extends MotorInstance<string> {
    static readonly size = 4;
    static readonly decoder = new TextDecoder();
    static readonly encoder = new TextEncoder();
    private _length: number = 0;
    get length(): number {
        return this._length;
    }

    protected read(): string {
        const bytes = this.memory.buffer.slice(this.charAddress, this.charAddress + this._length);
        return MotorString.decoder.decode(bytes);
    }

    protected write(value: string): void {
        this.freeCharArray();
        this._length = value.length;
        const encoded = MotorString.encoder.encode(value);
        const address = this.memory.allocate(encoded.length);
        this.charAddress = address;
        const bytes = MotorString.encoder.encode(value)
        this.memory.buffer.set(bytes, address);
    }

    protected get charAddress(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }

    protected set charAddress(value: number) {
        this.memory.dataView.setUint32(this.address, value, true);
    }

    protected freeCharArray(){
        if(this.charAddress === 0) return;
        this.memory.free({
            start: this.charAddress,
            length: this._length
        });
    }

    toCharArray(): MotorArray<MotorChar> {
        return motorNewArray(MotorChar, this._length, undefined, this.memory, this.charAddress);
    }

    free(): void {
        this.freeCharArray();
        super.free();
    }

    constructor(defaultValue?: string | MotorInstance<string>, memory?: MotorMemory, address?: number) {
        super(defaultValue, memory, address);
        if(defaultValue) {
            this._length = defaultValue instanceof MotorInstance ? defaultValue.rawValue.length : defaultValue.length;
        }
    }
}
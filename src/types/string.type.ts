import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";

export class MotorString extends MotorInstance<string> {
    static size: number = 1;
    static decoder = new TextDecoder();
    static encoder = new TextEncoder();
    private _length: number = 1;
    get length(): number {
        return this._length;
    }
    protected read(): string {
        const stringBuffer = this.memory.buffer.subarray(this.address, this.address + this.length)
        return MotorString.decoder.decode(stringBuffer);
    }
    protected write(value: string): void {
        const stringBuffer = MotorString.encoder.encode(value);
        const blockFree = {
            start: this.address,
            length: this.length
        }
        this._length = stringBuffer.length;
        this.memory.free(blockFree);
        this.address = this.memory.allocate(this.length);
        this.memory.buffer.set(stringBuffer, this.address);
    }
    free(): void {
        this.memory.free({ start: this.address, length: this.length });
    }

    constructor(defaultValue?: string, memory?: MotorMemory, address?: number) {
        super(undefined, memory, address);
        if (defaultValue) {
            this.rawValue = defaultValue;
        }
    }
}
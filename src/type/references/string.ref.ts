import { MotorInstance } from "../../instance.js";

export class MotorString extends MotorInstance<string> {
    static readonly decoder = new TextDecoder();
    static readonly encoder = new TextEncoder();
    write(value: string): void {
        const newAddress = this.memory.allocate(value.length);

        this.memory.buffer.set(MotorString.encoder.encode(value), newAddress);
        this.memory.free({
            start: this.charAddress,
            length: this.length
        });
        this.charAddress = newAddress;
        this.length = value.length;
    }
    read(): string {
        return MotorString.decoder.decode(this.memory.buffer.slice(this.charAddress, this.charAddress + this.length));
    }

    static readonly size = 8;

    protected get charAddress() {
        return this.memory.dataView.getUint32(this.address, true);
    }

    protected set charAddress(value: number) {
        this.memory.dataView.setUint32(this.address, value, true);
    }

    get length() {
        return this.memory.dataView.getUint32(this.address + 4, true);
    }

    protected set length(value: number) {
        this.memory.dataView.setUint32(this.address + 4, value, true);
    }

    free(): void {
        this.memory.free({
            start: this.charAddress,
            length: this.length
        });
        super.free();
    }
}
import { MotorInstance } from "./instance";

export class MotorString extends MotorInstance<string> {
    static readonly size = 4;

    get length(): number {
        return this.memory.dataView.getUint32(this._address, true);
    }

    protected onSetData(val: string): void {
        this.free();
        this._address = this.memory.allocate(val.length + 4);
        this.memory.dataView.setUint32(this._address, val.length, true);
        for (let i = 0; i < val.length; i++) {
            this.memory.dataView.setUint8(this._address + 4 + i, val.charCodeAt(i));
        }
    }

    protected onGetData(): string {
        return String.fromCharCode(...this.memory.memory.subarray(this._address + 4, this._address + 4 + this.length));
    }

    free(): void {
        this.memory.free(this._address, this.length + 4);
    }
}
import { MotorInstance } from "./instance";

export class MotorPointer extends MotorInstance<number> {
    protected onGetJsVal(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }

    protected onSetJsVal(value?: number): void {
        this.memory.dataView.setUint32(this.address, value ?? 0, true);
    }

    protected onGetSize(): number {
        return 4;
    }

    
}
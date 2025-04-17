import { MotorJSType, MotorType } from "../type";
import { MotorMemory } from "../memory";

export class MotorArray<T extends MotorType<any>> extends MotorType<MotorJSType<T>[]> {
    readonly size: number;
    constructor(readonly type: T, readonly length: number) {
        super();
        this.size = type.size * length;
    }
    setJS(memory: MotorMemory, address: number, value: MotorJSType<T>[]): void {
        for (let i = 0; i < this.length; i++) {
            const v = value[i];
            if (v === undefined) {
                throw new Error(`Array index out of bounds: ${i}`);
            }
            this.type.setJS(memory, address + i * this.type.size, v);
        }
    }
    getJS(memory: MotorMemory, address: number): MotorJSType<T>[] {
        const values: MotorJSType<T>[] = [];
        for (let i = 0; i < this.length; i++) {
            values.push(this.type.getJS(memory, address + i * this.type.size));
        }
        return values;
    }
}
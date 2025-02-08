import { ELMemory } from "../memory";
import { singleton } from "../singleton";
import { ELType } from "../type";

export class ELFloat extends ELType<number> {
    protected onSet(value: number): void {
        this.memory.dataView.setFloat32(this.block.start, value, true);
    }
    protected onGet(): number {
        return this.memory.dataView.getFloat32(this.block.start, true);
    }
    equals(value: number | ELFloat): boolean {
        return this.value === (value instanceof ELFloat ? value.value : value);
    }
    constructor(defaultVal: number, memory: ELMemory = singleton(ELMemory)) {
        super(memory.allocate(4), memory);
        this.value = defaultVal;
    }
}
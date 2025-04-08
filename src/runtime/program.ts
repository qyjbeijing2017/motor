import { Instruction } from "../il/instruction"
import { Memory } from "../memory"
import { Type } from "../types/type"

export class Program extends Type<Instruction[]> {
    get size(): number {
        return 12
    }
    read(memory: Memory, address: number): Instruction[] {
        throw new Error("Method not implemented.")
    }
    write(memory: Memory, address: number, value: Instruction[]): void {
        throw new Error("Method not implemented.")
    }
}
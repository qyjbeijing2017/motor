import { Operation } from "../il/operation"
import { Push } from "../il/operations/push"
import { OperatorCode } from "../il/operator-code"
import { TypeTag } from "../il/type-tag"
import { Memory } from "../memory"
import { Type } from "../types/type"
import { ClassConstructor } from "../utils/singleton"

const operationsMap: {
    [key: number]: ClassConstructor<Operation>
} = {
    [OperatorCode.PUSH | TypeTag.F8]: Push,
    [OperatorCode.PUSH | TypeTag.F16]: Push,
    [OperatorCode.PUSH | TypeTag.F32]: Push,
    [OperatorCode.PUSH | TypeTag.F64]: Push,
    [OperatorCode.PUSH | TypeTag.I8]: Push,
    [OperatorCode.PUSH | TypeTag.I16]: Push,
    [OperatorCode.PUSH | TypeTag.I32]: Push,
    [OperatorCode.PUSH | TypeTag.I64]: Push,
    [OperatorCode.PUSH | TypeTag.U8]: Push,
    [OperatorCode.PUSH | TypeTag.U16]: Push,
    [OperatorCode.PUSH | TypeTag.U32]: Push,
    [OperatorCode.PUSH | TypeTag.U64]: Push,
}

export class Program extends Type<Operation[]> {
    constructor(
    ) {
        super()
    }
    get size(): number {
        return 8
    }
    read(memory: Memory, address: number): Operation[] {
        const length = memory.viewer.getUint32(address, true)
        let pointer = memory.viewer.getUint32(address + 4, true)
        const end = pointer + length
        const result: Operation[] = []
        while (pointer < end) {
            
        }
        return result
    }
    write(memory: Memory, address: number, value: Operation[]): void {
        const length = memory.viewer.getUint32(address, true)
        let pointer = memory.viewer.getUint32(address + 4, true)
        const size = value.reduce((acc, op) => acc + op.size, 0)
        if (size != length) {
            if (length > 0) {
                memory.free(pointer, length)
            }
            pointer = memory.allocate(size)
            memory.viewer.setUint32(address + 4, pointer, true)
            memory.viewer.setUint32(address, size, true)
        }
        for (const op of value) {
            pointer = op.write(memory, pointer)
        }
    }
}
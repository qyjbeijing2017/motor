import { QzaRuntime } from "../../runtime";
import { QzaF16 } from "../../types/number/f16";
import { QzaF32 } from "../../types/number/f32";
import { QzaF64 } from "../../types/number/f64";
import { QzaF8 } from "../../types/number/f8";
import { QzaI16 } from "../../types/number/i16";
import { QzaI32 } from "../../types/number/i32";
import { QzaI64 } from "../../types/number/i64";
import { QzaI8 } from "../../types/number/i8";
import { QzaU16 } from "../../types/number/u16";
import { QzaU32 } from "../../types/number/u32";
import { QzaU64 } from "../../types/number/u64";
import { QzaU8 } from "../../types/number/u8";
import { QzaInstruction } from "../instruction";
import { QzaOperator } from "../operator";
import { QzaILType } from "../type";
import { QzaFunctionFrame } from "../function-frame";

export class QzaLocalU8 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.U8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaU8(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaU8, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.U8] = QzaLocalU8;

export class QzaLocalU16 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.U16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaU16(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaU16, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.U16] = QzaLocalU16;

export class QzaLocalU32 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.U32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaU32(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaU32, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.U32] = QzaLocalU32;

export class QzaLocalU64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.U64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaU64(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaU64, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.U64] = QzaLocalU64;

export class QzaLocalI8 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.I8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaI8(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaI8, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.I8] = QzaLocalI8;

export class QzaLocalI16 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.I16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaI16(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaI16, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.I16] = QzaLocalI16;

export class QzaLocalI32 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.I32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaI32(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaI32, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.I32] = QzaLocalI32;

export class QzaLocalI64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.I64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaI64(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaI64, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.I64] = QzaLocalI64;

export class QzaLocalF8 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.F8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaF8(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaF8, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.F8] = QzaLocalF8;

export class QzaLocalF16 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.F16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaF16(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaF16, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.F16] = QzaLocalF16;

export class QzaLocalF32 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.F32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaF32(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaF32, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.F32] = QzaLocalF32;

export class QzaLocalF64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.local | QzaILType.F64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const framePointer = runtime.get('framePointer');
        const stack = runtime.get('stack');
        const value = new QzaF64(undefined, stack.memory, stack.address + framePointer.js + (this.js >= 0 ? this.js + QzaFunctionFrame.size : this.js));
        runtime.pushStack(QzaF64, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.local | QzaILType.F64] = QzaLocalF64;

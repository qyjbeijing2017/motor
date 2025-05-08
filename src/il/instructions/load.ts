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

export class QzaLoadU8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaU8(undefined, runtime.memory, from);
        runtime.pushStack(QzaU8, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.U8] = QzaLoadU8;

export class QzaLoadU16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaU16(undefined, runtime.memory, from);
        runtime.pushStack(QzaU16, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.U16] = QzaLoadU16;

export class QzaLoadU32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaU32(undefined, runtime.memory, from);
        runtime.pushStack(QzaU32, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.U32] = QzaLoadU32;

export class QzaLoadU64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaU64(undefined, runtime.memory, from);
        runtime.pushStack(QzaU64, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.U64] = QzaLoadU64;

export class QzaLoadI8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaI8(undefined, runtime.memory, from);
        runtime.pushStack(QzaI8, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.I8] = QzaLoadI8;

export class QzaLoadI16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaI16(undefined, runtime.memory, from);
        runtime.pushStack(QzaI16, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.I16] = QzaLoadI16;

export class QzaLoadI32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaI32(undefined, runtime.memory, from);
        runtime.pushStack(QzaI32, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.I32] = QzaLoadI32;

export class QzaLoadI64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaI64(undefined, runtime.memory, from);
        runtime.pushStack(QzaI64, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.I64] = QzaLoadI64;

export class QzaLoadF8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaF8(undefined, runtime.memory, from);
        runtime.pushStack(QzaF8, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.F8] = QzaLoadF8;

export class QzaLoadF16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaF16(undefined, runtime.memory, from);
        runtime.pushStack(QzaF16, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.F16] = QzaLoadF16;

export class QzaLoadF32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaF32(undefined, runtime.memory, from);
        runtime.pushStack(QzaF32, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.F32] = QzaLoadF32;

export class QzaLoadF64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.load | QzaILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        const value = new QzaF64(undefined, runtime.memory, from);
        runtime.pushStack(QzaF64, value.js);
    }
}
QzaInstruction.instructions[QzaOperator.load | QzaILType.F64] = QzaLoadF64;

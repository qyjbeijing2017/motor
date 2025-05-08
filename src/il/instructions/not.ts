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

export class QzaNotU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU8);
        runtime.pushStack(QzaU8, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.U8] = QzaNotU8;

export class QzaNotU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU16);
        runtime.pushStack(QzaU16, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.U16] = QzaNotU16;

export class QzaNotU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU32);
        runtime.pushStack(QzaU32, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.U32] = QzaNotU32;

export class QzaNotU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU64);
        runtime.pushStack(QzaU64, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.U64] = QzaNotU64;

export class QzaNotI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI8);
        runtime.pushStack(QzaI8, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.I8] = QzaNotI8;

export class QzaNotI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI16);
        runtime.pushStack(QzaI16, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.I16] = QzaNotI16;

export class QzaNotI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI32);
        runtime.pushStack(QzaI32, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.I32] = QzaNotI32;

export class QzaNotI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI64);
        runtime.pushStack(QzaI64, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.I64] = QzaNotI64;

export class QzaNotF8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaF8);
        runtime.pushStack(QzaF8, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.F8] = QzaNotF8;

export class QzaNotF16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaF16);
        runtime.pushStack(QzaF16, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.F16] = QzaNotF16;

export class QzaNotF32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaF32);
        runtime.pushStack(QzaF32, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.F32] = QzaNotF32;

export class QzaNotF64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.not | QzaILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaF64);
        runtime.pushStack(QzaF64, a > 0 ? 0 : 1);
    }
}
QzaInstruction.instructions[QzaOperator.not | QzaILType.F64] = QzaNotF64;

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

export class QzaNotEqualU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaU8);
        const a = runtime.popStack(QzaU8);
        runtime.pushStack(QzaU8, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.U8] = QzaNotEqualU8;

export class QzaNotEqualU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaU16);
        const a = runtime.popStack(QzaU16);
        runtime.pushStack(QzaU16, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.U16] = QzaNotEqualU16;

export class QzaNotEqualU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaU32);
        const a = runtime.popStack(QzaU32);
        runtime.pushStack(QzaU32, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.U32] = QzaNotEqualU32;

export class QzaNotEqualU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaU64);
        const a = runtime.popStack(QzaU64);
        runtime.pushStack(QzaU64, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.U64] = QzaNotEqualU64;

export class QzaNotEqualI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaI8);
        const a = runtime.popStack(QzaI8);
        runtime.pushStack(QzaI8, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.I8] = QzaNotEqualI8;

export class QzaNotEqualI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaI16);
        const a = runtime.popStack(QzaI16);
        runtime.pushStack(QzaI16, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.I16] = QzaNotEqualI16;

export class QzaNotEqualI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaI32);
        const a = runtime.popStack(QzaI32);
        runtime.pushStack(QzaI32, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.I32] = QzaNotEqualI32;

export class QzaNotEqualI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaI64);
        const a = runtime.popStack(QzaI64);
        runtime.pushStack(QzaI64, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.I64] = QzaNotEqualI64;

export class QzaNotEqualF8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaF8);
        const a = runtime.popStack(QzaF8);
        runtime.pushStack(QzaU8, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.F8] = QzaNotEqualF8;

export class QzaNotEqualF16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaF16);
        const a = runtime.popStack(QzaF16);
        runtime.pushStack(QzaU8, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.F16] = QzaNotEqualF16;

export class QzaNotEqualF32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaF32);
        const a = runtime.popStack(QzaF32);
        runtime.pushStack(QzaU8, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.F32] = QzaNotEqualF32;

export class QzaNotEqualF64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.equal | QzaILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaF64);
        const a = runtime.popStack(QzaF64);
        runtime.pushStack(QzaU8, b !== a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.not_equal | QzaILType.F64] = QzaNotEqualF64;

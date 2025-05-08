import { QzaRuntime } from "../../runtime";
import { QzaU8 } from "../../types/number/u8";
import { QzaU16 } from "../../types/number/u16";
import { QzaU32 } from "../../types/number/u32";
import { QzaU64 } from "../../types/number/u64";
import { QzaI8 } from "../../types/number/i8";
import { QzaI16 } from "../../types/number/i16";
import { QzaI32 } from "../../types/number/i32";
import { QzaI64 } from "../../types/number/i64";
import { QzaInstruction } from "../instruction";
import { QzaOperator } from "../operator";
import { QzaILType } from "../type";

export class QzaBitNotU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_not | QzaILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU8);
        runtime.pushStack(QzaU8, ~a);
    }
}
QzaInstruction.instructions[QzaOperator.bit_not | QzaILType.U8] = QzaBitNotU8;

export class QzaBitNotU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_not | QzaILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU16);
        runtime.pushStack(QzaU16, ~a);
    }
}
QzaInstruction.instructions[QzaOperator.bit_not | QzaILType.U16] = QzaBitNotU16;

export class QzaBitNotU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_not | QzaILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU32);
        runtime.pushStack(QzaU32, ~a);
    }
}
QzaInstruction.instructions[QzaOperator.bit_not | QzaILType.U32] = QzaBitNotU32;

export class QzaBitNotU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_not | QzaILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU64);
        runtime.pushStack(QzaU64, ~a);
    }
}
QzaInstruction.instructions[QzaOperator.bit_not | QzaILType.U64] = QzaBitNotU64;

export class QzaBitNotI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_not | QzaILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI8);
        runtime.pushStack(QzaI8, ~a);
    }
}
QzaInstruction.instructions[QzaOperator.bit_not | QzaILType.I8] = QzaBitNotI8;

export class QzaBitNotI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_not | QzaILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI16);
        runtime.pushStack(QzaI16, ~a);
    }
}
QzaInstruction.instructions[QzaOperator.bit_not | QzaILType.I16] = QzaBitNotI16;

export class QzaBitNotI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_not | QzaILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI32);
        runtime.pushStack(QzaI32, ~a);
    }
}
QzaInstruction.instructions[QzaOperator.bit_not | QzaILType.I32] = QzaBitNotI32;

export class QzaBitNotI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_not | QzaILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI64);
        runtime.pushStack(QzaI64, ~a);
    }
}
QzaInstruction.instructions[QzaOperator.bit_not | QzaILType.I64] = QzaBitNotI64;

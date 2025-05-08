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

export class QzaBitOrU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_or | QzaILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU8);
        const b = runtime.popStack(QzaU8);
        runtime.pushStack(QzaU8, a | b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_or | QzaILType.U8] = QzaBitOrU8;

export class QzaBitOrU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_or | QzaILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU16);
        const b = runtime.popStack(QzaU16);
        runtime.pushStack(QzaU16, a | b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_or | QzaILType.U16] = QzaBitOrU16;

export class QzaBitOrU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_or | QzaILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU32);
        const b = runtime.popStack(QzaU32);
        runtime.pushStack(QzaU32, a | b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_or | QzaILType.U32] = QzaBitOrU32;

export class QzaBitOrU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_or | QzaILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaU64);
        const b = runtime.popStack(QzaU64);
        runtime.pushStack(QzaU64, a | b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_or | QzaILType.U64] = QzaBitOrU64;

export class QzaBitOrI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_or | QzaILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI8);
        const b = runtime.popStack(QzaI8);
        runtime.pushStack(QzaI8, a | b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_or | QzaILType.I8] = QzaBitOrI8;

export class QzaBitOrI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_or | QzaILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI16);
        const b = runtime.popStack(QzaI16);
        runtime.pushStack(QzaI16, a | b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_or | QzaILType.I16] = QzaBitOrI16;

export class QzaBitOrI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_or | QzaILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI32);
        const b = runtime.popStack(QzaI32);
        runtime.pushStack(QzaI32, a | b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_or | QzaILType.I32] = QzaBitOrI32;

export class QzaBitOrI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_or | QzaILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaI64);
        const b = runtime.popStack(QzaI64);
        runtime.pushStack(QzaI64, a | b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_or | QzaILType.I64] = QzaBitOrI64;

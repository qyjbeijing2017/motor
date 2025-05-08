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

export class QzaBitXorU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_xor | QzaILType.U8;
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
        runtime.pushStack(QzaU8, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_xor | QzaILType.U8] = QzaBitXorU8;

export class QzaBitXorU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_xor | QzaILType.U16;
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
        runtime.pushStack(QzaU16, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_xor | QzaILType.U16] = QzaBitXorU16;

export class QzaBitXorU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_xor | QzaILType.U32;
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
        runtime.pushStack(QzaU32, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_xor | QzaILType.U32] = QzaBitXorU32;

export class QzaBitXorU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_xor | QzaILType.U64;
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
        runtime.pushStack(QzaU64, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_xor | QzaILType.U64] = QzaBitXorU64;

export class QzaBitXorI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_xor | QzaILType.I8;
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
        runtime.pushStack(QzaI8, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_xor | QzaILType.I8] = QzaBitXorI8;

export class QzaBitXorI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_xor | QzaILType.I16;
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
        runtime.pushStack(QzaI16, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_xor | QzaILType.I16] = QzaBitXorI16;

export class QzaBitXorI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_xor | QzaILType.I32;
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
        runtime.pushStack(QzaI32, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_xor | QzaILType.I32] = QzaBitXorI32;

export class QzaBitXorI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.bit_xor | QzaILType.I64;
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
        runtime.pushStack(QzaI64, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.bit_xor | QzaILType.I64] = QzaBitXorI64;

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

export class QzaPopU8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaU8);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.U8] = QzaPopU8;

export class QzaPopU16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaU16);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.U16] = QzaPopU16;

export class QzaPopU32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaU32);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.U32] = QzaPopU32;

export class QzaPopU64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaU64);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.U64] = QzaPopU64;

export class QzaPopI8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaI8);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.I8] = QzaPopI8;

export class QzaPopI16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaI16);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.I16] = QzaPopI16;

export class QzaPopI32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaI32);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.I32] = QzaPopI32;

export class QzaPopI64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaI64);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.I64] = QzaPopI64;

export class QzaPopF8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaF8);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.F8] = QzaPopF8;

export class QzaPopF16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaF16);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.F16] = QzaPopF16;

export class QzaPopF32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaF32);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.F32] = QzaPopF32;

export class QzaPopF64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.pop | QzaILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.popStack(QzaF64);
    }
}
QzaInstruction.instructions[QzaOperator.pop | QzaILType.F64] = QzaPopF64;

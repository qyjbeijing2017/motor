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

export class QzaEqualU8 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.U8] = QzaEqualU8;

export class QzaEqualU16 extends QzaInstruction {
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
        runtime.pushStack(QzaU16, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.U16] = QzaEqualU16;

export class QzaEqualU32 extends QzaInstruction {
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
        runtime.pushStack(QzaU32, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.U32] = QzaEqualU32;

export class QzaEqualU64 extends QzaInstruction {
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
        runtime.pushStack(QzaU64, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.U64] = QzaEqualU64;

export class QzaEqualI8 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.I8] = QzaEqualI8;

export class QzaEqualI16 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.I16] = QzaEqualI16;

export class QzaEqualI32 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.I32] = QzaEqualI32;

export class QzaEqualI64 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.I64] = QzaEqualI64;

export class QzaEqualF8 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.F8] = QzaEqualF8;

export class QzaEqualF16 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.F16] = QzaEqualF16;

export class QzaEqualF32 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.F32] = QzaEqualF32;

export class QzaEqualF64 extends QzaInstruction {
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
        runtime.pushStack(QzaU8, b === a ? 1 : 0);
    }
}
QzaInstruction.instructions[QzaOperator.equal | QzaILType.F64] = QzaEqualF64;

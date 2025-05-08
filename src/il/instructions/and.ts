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

export class QzaAndU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.U8;
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
        runtime.pushStack(QzaU8, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.U8] = QzaAndU8;

export class QzaAndU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.U16;
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
        runtime.pushStack(QzaU16, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.U16] = QzaAndU16;

export class QzaAndU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.U32;
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
        runtime.pushStack(QzaU32, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.U32] = QzaAndU32;

export class QzaAndU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.U64;
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
        runtime.pushStack(QzaU64, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.U64] = QzaAndU64;

export class QzaAndI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.I8;
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
        runtime.pushStack(QzaI8, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.I8] = QzaAndI8;

export class QzaAndI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.I16;
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
        runtime.pushStack(QzaI16, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.I16] = QzaAndI16;

export class QzaAndI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.I32;
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
        runtime.pushStack(QzaI32, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.I32] = QzaAndI32;

export class QzaAndI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.I64;
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
        runtime.pushStack(QzaI64, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.I64] = QzaAndI64;

export class QzaAndF8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaF8);
        const b = runtime.popStack(QzaF8);
        runtime.pushStack(QzaF8, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.F8] = QzaAndF8;

export class QzaAndF16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaF16);
        const b = runtime.popStack(QzaF16);
        runtime.pushStack(QzaF16, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.F16] = QzaAndF16;

export class QzaAndF32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaF32);
        const b = runtime.popStack(QzaF32);
        runtime.pushStack(QzaF32, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.F32] = QzaAndF32;

export class QzaAndF64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.and | QzaILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const a = runtime.popStack(QzaF64);
        const b = runtime.popStack(QzaF64);
        runtime.pushStack(QzaF64, a && b);
    }
}
QzaInstruction.instructions[QzaOperator.and | QzaILType.F64] = QzaAndF64;

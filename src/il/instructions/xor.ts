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

export class QzaXorU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.U8;
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
QzaInstruction.instructions[QzaOperator.xor | QzaILType.U8] = QzaXorU8;

export class QzaXorU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.U16;
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
QzaInstruction.instructions[QzaOperator.xor | QzaILType.U16] = QzaXorU16;

export class QzaXorU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.U32;
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
QzaInstruction.instructions[QzaOperator.xor | QzaILType.U32] = QzaXorU32;

export class QzaXorU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.U64;
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
QzaInstruction.instructions[QzaOperator.xor | QzaILType.U64] = QzaXorU64;

export class QzaXorI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.I8;
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
QzaInstruction.instructions[QzaOperator.xor | QzaILType.I8] = QzaXorI8;

export class QzaXorI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.I16;
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
QzaInstruction.instructions[QzaOperator.xor | QzaILType.I16] = QzaXorI16;

export class QzaXorI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.I32;
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
QzaInstruction.instructions[QzaOperator.xor | QzaILType.I32] = QzaXorI32;

export class QzaXorI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.I64;
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
QzaInstruction.instructions[QzaOperator.xor | QzaILType.I64] = QzaXorI64;

export class QzaXorF8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.F8;
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
        runtime.pushStack(QzaF8, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.xor | QzaILType.F8] = QzaXorF8;

export class QzaXorF16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.F16;
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
        runtime.pushStack(QzaF16, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.xor | QzaILType.F16] = QzaXorF16;

export class QzaXorF32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.F32;
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
        runtime.pushStack(QzaF32, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.xor | QzaILType.F32] = QzaXorF32;

export class QzaXorF64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.xor | QzaILType.F64;
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
        runtime.pushStack(QzaF64, a ^ b);
    }
}
QzaInstruction.instructions[QzaOperator.xor | QzaILType.F64] = QzaXorF64;

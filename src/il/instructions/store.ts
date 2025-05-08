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

export class QzaStoreU8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaU8);
        new QzaU8(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.U8] = QzaStoreU8;

export class QzaStoreU16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaU16);
        new QzaU16(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.U16] = QzaStoreU16;

export class QzaStoreU32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaU32);
        new QzaU32(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.U32] = QzaStoreU32;

export class QzaStoreU64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaU64);
        new QzaU64(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.U64] = QzaStoreU64;

export class QzaStoreI8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaI8);
        new QzaI8(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.I8] = QzaStoreI8;

export class QzaStoreI16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaI16);
        new QzaI16(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.I16] = QzaStoreI16;

export class QzaStoreI32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaI32);
        new QzaI32(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.I32] = QzaStoreI32;

export class QzaStoreI64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaI64);
        new QzaI64(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.I64] = QzaStoreI64;

export class QzaStoreF8 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaF8);
        new QzaF8(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.F8] = QzaStoreF8;

export class QzaStoreF16 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaF16);
        new QzaF16(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.F16] = QzaStoreF16;

export class QzaStoreF32 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaF32);
        new QzaF32(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.F32] = QzaStoreF32;

export class QzaStoreF64 extends QzaInstruction {
    static readonly size = 2;
    get code(): number {
        return QzaOperator.store | QzaILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const target = runtime.popStack(QzaU64);
        const value = runtime.popStack(QzaF64);
        new QzaF64(value, runtime.memory, target)
    }
}
QzaInstruction.instructions[QzaOperator.store | QzaILType.F64] = QzaStoreF64;

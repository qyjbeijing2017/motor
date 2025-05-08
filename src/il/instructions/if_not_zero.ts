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

export class QzaIfNotZeroU8 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.U8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaU8);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.U8] = QzaIfNotZeroU8;

export class QzaIfNotZeroU16 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.U16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaU16);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.U16] = QzaIfNotZeroU16;

export class QzaIfNotZeroU32 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.U32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaU32);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.U32] = QzaIfNotZeroU32;

export class QzaIfNotZeroU64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.U64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaU64);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.U64] = QzaIfNotZeroU64;

export class QzaIfNotZeroI8 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.I8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaI8);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.I8] = QzaIfNotZeroI8;

export class QzaIfNotZeroI16 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.I16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaI16);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.I16] = QzaIfNotZeroI16;

export class QzaIfNotZeroI32 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.I32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaI32);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.I32] = QzaIfNotZeroI32;

export class QzaIfNotZeroI64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.I64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaI64);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.I64] = QzaIfNotZeroI64;

export class QzaIfNotZeroF8 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.F8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaF8);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.F8] = QzaIfNotZeroF8;

export class QzaIfNotZeroF16 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.F16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaF16);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.F16] = QzaIfNotZeroF16;

export class QzaIfNotZeroF32 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.F32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaF32);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.F32] = QzaIfNotZeroF32;

export class QzaIfNotZeroF64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.if_not_zero | QzaILType.F64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        const value = runtime.popStack(QzaF64);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
QzaInstruction.instructions[QzaOperator.if_not_zero | QzaILType.F64] = QzaIfNotZeroF64;

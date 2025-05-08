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

function transformTo(runtime: QzaRuntime, from: number, to: QzaILType) {
    switch (to) {
        case QzaILType.U8:
            runtime.pushStack(QzaU8, from);
            break;
        case QzaILType.U16:
            runtime.pushStack(QzaU16, from);
            break;
        case QzaILType.U32:
            runtime.pushStack(QzaU32, from);
            break;
        case QzaILType.U64:
            runtime.pushStack(QzaU64, from);
            break;
        case QzaILType.I8:
            runtime.pushStack(QzaI8, from);
            break;
        case QzaILType.I16:
            runtime.pushStack(QzaI16, from);
            break;
        case QzaILType.I32:
            runtime.pushStack(QzaI32, from);
            break;
        case QzaILType.I64:
            runtime.pushStack(QzaI64, from);
            break;
        case QzaILType.F8:
            runtime.pushStack(QzaF8, from);
            break;
        case QzaILType.F16:
            runtime.pushStack(QzaF16, from);
            break;
        case QzaILType.F32:
            runtime.pushStack(QzaF32, from);
            break;
        case QzaILType.F64:
            runtime.pushStack(QzaF64, from);
            break;
        default:
            throw new Error(`Invalid transform type: ${to}`);
    }
}

export class QzaTransformU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.U8;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU8);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.U8] = QzaTransformU8;

export class QzaTransformU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.U16;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU16);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.U16] = QzaTransformU16;

export class QzaTransformU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.U32;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU32);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.U32] = QzaTransformU32;

export class QzaTransformU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.U64;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaU64);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.U64] = QzaTransformU64;

export class QzaTransformI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.I8;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaI8);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.I8] = QzaTransformI8;

export class QzaTransformI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.I16;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaI16);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.I16] = QzaTransformI16;

export class QzaTransformI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.I32;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaI32);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.I32] = QzaTransformI32;

export class QzaTransformI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.I64;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaI64);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.I64] = QzaTransformI64;

export class QzaTransformF8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.F8;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaF8);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.F8] = QzaTransformF8;

export class QzaTransformF16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.F16;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaF16);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.F16] = QzaTransformF16;

export class QzaTransformF32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.F32;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaF32);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.F32] = QzaTransformF32;

export class QzaTransformF64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.transform | QzaILType.F64;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2) << 8
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value >> 8);
    }
    static readonly size = 3;
    async exec(runtime: QzaRuntime): Promise<void> {
        const from = runtime.popStack(QzaF64);
        transformTo(runtime, from, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.transform | QzaILType.F64] = QzaTransformF64;

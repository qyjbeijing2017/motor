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

export class QzaDivU8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaU8);
        const a = runtime.popStack(QzaU8);
        runtime.pushStack(QzaU8, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.U8] = QzaDivU8;

export class QzaDivU16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaU16);
        const a = runtime.popStack(QzaU16);
        runtime.pushStack(QzaU16, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.U16] = QzaDivU16;

export class QzaDivU32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaU32);
        const a = runtime.popStack(QzaU32);
        runtime.pushStack(QzaU32, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.U32] = QzaDivU32;

export class QzaDivU64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaU64);
        const a = runtime.popStack(QzaU64);
        runtime.pushStack(QzaU64, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.U64] = QzaDivU64;

export class QzaDivI8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaI8);
        const a = runtime.popStack(QzaI8);
        runtime.pushStack(QzaI8, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.I8] = QzaDivI8;

export class QzaDivI16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaI16);
        const a = runtime.popStack(QzaI16);
        runtime.pushStack(QzaI16, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.I16] = QzaDivI16;

export class QzaDivI32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaI32);
        const a = runtime.popStack(QzaI32);
        runtime.pushStack(QzaI32, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.I32] = QzaDivI32;

export class QzaDivI64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaI64);
        const a = runtime.popStack(QzaI64);
        runtime.pushStack(QzaI64, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.I64] = QzaDivI64;

export class QzaDivF8 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaF8);
        const a = runtime.popStack(QzaF8);
        runtime.pushStack(QzaF8, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.F8] = QzaDivF8;

export class QzaDivF16 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaF16);
        const a = runtime.popStack(QzaF16);
        runtime.pushStack(QzaF16, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.F16] = QzaDivF16;

export class QzaDivF32 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaF32);
        const a = runtime.popStack(QzaF32);
        runtime.pushStack(QzaF32, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.F32] = QzaDivF32;

export class QzaDivF64 extends QzaInstruction {
    get code(): number {
        return QzaOperator.div | QzaILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: QzaRuntime): Promise<void> {
        const b = runtime.popStack(QzaF64);
        const a = runtime.popStack(QzaF64);
        runtime.pushStack(QzaF64, a / b);
    }
}
QzaInstruction.instructions[QzaOperator.div | QzaILType.F64] = QzaDivF64;

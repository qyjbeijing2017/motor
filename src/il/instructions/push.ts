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
import { getFloat16, setFloat16 } from "@petamoriken/float16";
import { qzaGetFloat8, qzaSetFloat8 } from "../../utils/float8";
import { QzaInstruction } from "../instruction";
import { QzaOperator } from "../operator";
import { QzaILType } from "../type";

export class QzaPushU8 extends QzaInstruction {
    static readonly size = 3;
    get code(): number {
        return QzaOperator.push | QzaILType.U8;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaU8, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.U8] = QzaPushU8;

export class QzaPushU16 extends QzaInstruction {
    static readonly size = 4;
    get code(): number {
        return QzaOperator.push | QzaILType.U16;
    }
    get js(): number {
        return this.memory.viewer.getUint16(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setUint16(this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaU16, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.U16] = QzaPushU16;

export class QzaPushU32 extends QzaInstruction {
    static readonly size = 6;
    get code(): number {
        return QzaOperator.push | QzaILType.U32;
    }
    get js(): number {
        return this.memory.viewer.getUint32(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setUint32(this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaU32, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.U32] = QzaPushU32;

export class QzaPushU64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.push | QzaILType.U64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaU64, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.U64] = QzaPushU64;

export class QzaPushI8 extends QzaInstruction {
    static readonly size = 3;
    get code(): number {
        return QzaOperator.push | QzaILType.I8;
    }
    get js(): number {
        return this.memory.viewer.getInt8(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setInt8(this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaI8, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.I8] = QzaPushI8;

export class QzaPushI16 extends QzaInstruction {
    static readonly size = 4;
    get code(): number {
        return QzaOperator.push | QzaILType.I16;
    }
    get js(): number {
        return this.memory.viewer.getInt16(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setInt16(this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaI16, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.I16] = QzaPushI16;

export class QzaPushI32 extends QzaInstruction {
    static readonly size = 6;
    get code(): number {
        return QzaOperator.push | QzaILType.I32;
    }
    get js(): number {
        return this.memory.viewer.getInt32(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setInt32(this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaI32, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.I32] = QzaPushI32;

export class QzaPushI64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.push | QzaILType.I64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaI64, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.I64] = QzaPushI64;

export class QzaPushF8 extends QzaInstruction {
    static readonly size = 3;
    get code(): number {
        return QzaOperator.push | QzaILType.F8;
    }
    get js(): number {
        return qzaGetFloat8(this.memory.viewer, this.address + 2);
    }
    set js(value: number) {
        qzaSetFloat8(this.memory.viewer, this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaF8, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.F8] = QzaPushF8;

export class QzaPushF16 extends QzaInstruction {
    static readonly size = 4;
    get code(): number {
        return QzaOperator.push | QzaILType.F16;
    }
    get js(): number {
        return getFloat16(this.memory.viewer, this.address + 2);
    }
    set js(value: number) {
        setFloat16(this.memory.viewer, this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaF16, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.F16] = QzaPushF16;

export class QzaPushF32 extends QzaInstruction {
    static readonly size = 6;
    get code(): number {
        return QzaOperator.push | QzaILType.F32;
    }
    get js(): number {
        return this.memory.viewer.getFloat32(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setFloat32(this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaF32, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.F32] = QzaPushF32;

export class QzaPushF64 extends QzaInstruction {
    static readonly size = 10;
    get code(): number {
        return QzaOperator.push | QzaILType.F64;
    }
    get js(): number {
        return this.memory.viewer.getFloat64(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setFloat64(this.address + 2, value);
    }
    async exec(runtime: QzaRuntime): Promise<void> {
        runtime.pushStack(QzaF64, this.js);
    }
}
QzaInstruction.instructions[QzaOperator.push | QzaILType.F64] = QzaPushF64;

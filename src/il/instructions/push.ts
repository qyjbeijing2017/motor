import { MotorRuntime } from "../../runtime";
import { MotorF16 } from "../../types/number/f16";
import { MotorF32 } from "../../types/number/f32";
import { MotorF64 } from "../../types/number/f64";
import { MotorF8 } from "../../types/number/f8";
import { MotorI16 } from "../../types/number/i16";
import { MotorI32 } from "../../types/number/i32";
import { MotorI64 } from "../../types/number/i64";
import { MotorI8 } from "../../types/number/i8";
import { MotorU16 } from "../../types/number/u16";
import { MotorU32 } from "../../types/number/u32";
import { MotorU64 } from "../../types/number/u64";
import { MotorU8 } from "../../types/number/u8";
import { getFloat16, setFloat16 } from "@petamoriken/float16";
import { motorGetFloat8, motorSetFloat8 } from "../../utils/float8";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorPushU8 extends MotorInstruction {
    static readonly size = 3;
    get code(): number {
        return MotorOperator.push | MotorILType.U8;
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setUint8(this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorU8, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.U8] = MotorPushU8;

export class MotorPushU16 extends MotorInstruction {
    static readonly size = 4;
    get code(): number {
        return MotorOperator.push | MotorILType.U16;
    }
    get js(): number {
        return this.memory.viewer.getUint16(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setUint16(this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorU16, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.U16] = MotorPushU16;

export class MotorPushU32 extends MotorInstruction {
    static readonly size = 6;
    get code(): number {
        return MotorOperator.push | MotorILType.U32;
    }
    get js(): number {
        return this.memory.viewer.getUint32(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setUint32(this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorU32, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.U32] = MotorPushU32;

export class MotorPushU64 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.push | MotorILType.U64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigUint64(this.address + 2, BigInt(value));
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorU64, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.U64] = MotorPushU64;

export class MotorPushI8 extends MotorInstruction {
    static readonly size = 3;
    get code(): number {
        return MotorOperator.push | MotorILType.I8;
    }
    get js(): number {
        return this.memory.viewer.getInt8(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setInt8(this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorI8, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.I8] = MotorPushI8;

export class MotorPushI16 extends MotorInstruction {
    static readonly size = 4;
    get code(): number {
        return MotorOperator.push | MotorILType.I16;
    }
    get js(): number {
        return this.memory.viewer.getInt16(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setInt16(this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorI16, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.I16] = MotorPushI16;

export class MotorPushI32 extends MotorInstruction {
    static readonly size = 6;
    get code(): number {
        return MotorOperator.push | MotorILType.I32;
    }
    get js(): number {
        return this.memory.viewer.getInt32(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setInt32(this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorI32, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.I32] = MotorPushI32;

export class MotorPushI64 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.push | MotorILType.I64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorI64, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.I64] = MotorPushI64;

export class MotorPushF8 extends MotorInstruction {
    static readonly size = 3;
    get code(): number {
        return MotorOperator.push | MotorILType.F8;
    }
    get js(): number {
        return motorGetFloat8(this.memory.viewer, this.address + 2);
    }
    set js(value: number) {
        motorSetFloat8(this.memory.viewer, this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorF8, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.F8] = MotorPushF8;

export class MotorPushF16 extends MotorInstruction {
    static readonly size = 4;
    get code(): number {
        return MotorOperator.push | MotorILType.F16;
    }
    get js(): number {
        return getFloat16(this.memory.viewer, this.address + 2);
    }
    set js(value: number) {
        setFloat16(this.memory.viewer, this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorF16, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.F16] = MotorPushF16;

export class MotorPushF32 extends MotorInstruction {
    static readonly size = 6;
    get code(): number {
        return MotorOperator.push | MotorILType.F32;
    }
    get js(): number {
        return this.memory.viewer.getFloat32(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setFloat32(this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorF32, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.F32] = MotorPushF32;

export class MotorPushF64 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.push | MotorILType.F64;
    }
    get js(): number {
        return this.memory.viewer.getFloat64(this.address + 2);
    }
    set js(value: number) {
        this.memory.viewer.setFloat64(this.address + 2, value);
    }
    async exec(runtime: MotorRuntime): Promise<void> {
        runtime.pushStack(MotorF64, this.js);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.F64] = MotorPushF64;

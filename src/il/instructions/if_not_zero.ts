import { MotorRuntime } from "../../runtime";
import { MotorU8, MotorU16, MotorU32, MotorU64 } from "../../types/unsigned";
import { MotorI8, MotorI16, MotorI32, MotorI64 } from "../../types/int";
import { MotorF8, MotorF16, MotorF32, MotorF64 } from "../../types/float";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorIfNotZeroU8 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.U8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorU8);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.U8] = MotorIfNotZeroU8;

export class MotorIfNotZeroU16 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.U16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorU16);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.U16] = MotorIfNotZeroU16;

export class MotorIfNotZeroU32 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.U32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorU32);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.U32] = MotorIfNotZeroU32;

export class MotorIfNotZeroU64 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.U64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorU64);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.U64] = MotorIfNotZeroU64;

export class MotorIfNotZeroI8 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.I8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorI8);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.I8] = MotorIfNotZeroI8;

export class MotorIfNotZeroI16 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.I16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorI16);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.I16] = MotorIfNotZeroI16;

export class MotorIfNotZeroI32 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.I32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorI32);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.I32] = MotorIfNotZeroI32;

export class MotorIfNotZeroI64 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.I64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorI64);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.I64] = MotorIfNotZeroI64;

export class MotorIfNotZeroF8 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.F8;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorF8);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.F8] = MotorIfNotZeroF8;

export class MotorIfNotZeroF16 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.F16;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorF16);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.F16] = MotorIfNotZeroF16;

export class MotorIfNotZeroF32 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.F32;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorF32);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.F32] = MotorIfNotZeroF32;

export class MotorIfNotZeroF64 extends MotorInstruction {
    static readonly size = 10;
    get code(): number {
        return MotorOperator.if_not_zero | MotorILType.F64;
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
    set js(value: number) {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    exec(runtime: MotorRuntime): void {
        const value = runtime.popStack(MotorF64);
        if (value !== 0) {
            runtime.get('programCounter').js += this.js;
        }
    }
}
MotorInstruction.instructions[MotorOperator.if_not_zero | MotorILType.F64] = MotorIfNotZeroF64;

import { MotorRuntime } from "../../runtime";
import { MotorU8 } from "../../types/number/u8";
import { MotorU16 } from "../../types/number/u16";
import { MotorU32 } from "../../types/number/u32";
import { MotorU64 } from "../../types/number/u64";
import { MotorI8 } from "../../types/number/i8";
import { MotorI16 } from "../../types/number/i16";
import { MotorI32 } from "../../types/number/i32";
import { MotorI64 } from "../../types/number/i64";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorBitNotU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_not | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, ~a);
    }
}
MotorInstruction.instructions[MotorOperator.bit_not | MotorILType.U8] = MotorBitNotU8;

export class MotorBitNotU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_not | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, ~a);
    }
}
MotorInstruction.instructions[MotorOperator.bit_not | MotorILType.U16] = MotorBitNotU16;

export class MotorBitNotU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_not | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, ~a);
    }
}
MotorInstruction.instructions[MotorOperator.bit_not | MotorILType.U32] = MotorBitNotU32;

export class MotorBitNotU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_not | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, ~a);
    }
}
MotorInstruction.instructions[MotorOperator.bit_not | MotorILType.U64] = MotorBitNotU64;

export class MotorBitNotI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_not | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, ~a);
    }
}
MotorInstruction.instructions[MotorOperator.bit_not | MotorILType.I8] = MotorBitNotI8;

export class MotorBitNotI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_not | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, ~a);
    }
}
MotorInstruction.instructions[MotorOperator.bit_not | MotorILType.I16] = MotorBitNotI16;

export class MotorBitNotI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_not | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, ~a);
    }
}
MotorInstruction.instructions[MotorOperator.bit_not | MotorILType.I32] = MotorBitNotI32;

export class MotorBitNotI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_not | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, ~a);
    }
}
MotorInstruction.instructions[MotorOperator.bit_not | MotorILType.I64] = MotorBitNotI64;

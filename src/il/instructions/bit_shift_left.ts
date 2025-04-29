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

export class MotorBitShiftLeftU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_left | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU8);
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a << b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_left | MotorILType.U8] = MotorBitShiftLeftU8;

export class MotorBitShiftLeftU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_left | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU16);
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a << b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_left | MotorILType.U16] = MotorBitShiftLeftU16;

export class MotorBitShiftLeftU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_left | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU32);
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a << b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_left | MotorILType.U32] = MotorBitShiftLeftU32;

export class MotorBitShiftLeftU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_left | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU64);
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a << b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_left | MotorILType.U64] = MotorBitShiftLeftU64;

export class MotorBitShiftLeftI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_left | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI8);
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a << b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_left | MotorILType.I8] = MotorBitShiftLeftI8;

export class MotorBitShiftLeftI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_left | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI16);
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a << b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_left | MotorILType.I16] = MotorBitShiftLeftI16;

export class MotorBitShiftLeftI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_left | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI32);
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a << b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_left | MotorILType.I32] = MotorBitShiftLeftI32;

export class MotorBitShiftLeftI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_left | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI64);
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a << b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_left | MotorILType.I64] = MotorBitShiftLeftI64;

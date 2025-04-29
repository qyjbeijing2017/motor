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

export class MotorBitShiftRightU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_right | MotorILType.U8;
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
        runtime.pushStack(MotorU8, a >> b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_right | MotorILType.U8] = MotorBitShiftRightU8;

export class MotorBitShiftRightU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_right | MotorILType.U16;
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
        runtime.pushStack(MotorU16, a >> b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_right | MotorILType.U16] = MotorBitShiftRightU16;

export class MotorBitShiftRightU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_right | MotorILType.U32;
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
        runtime.pushStack(MotorU32, a >> b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_right | MotorILType.U32] = MotorBitShiftRightU32;

export class MotorBitShiftRightU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_right | MotorILType.U64;
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
        runtime.pushStack(MotorU64, a >> b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_right | MotorILType.U64] = MotorBitShiftRightU64;

export class MotorBitShiftRightI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_right | MotorILType.I8;
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
        runtime.pushStack(MotorI8, a >> b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_right | MotorILType.I8] = MotorBitShiftRightI8;

export class MotorBitShiftRightI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_right | MotorILType.I16;
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
        runtime.pushStack(MotorI16, a >> b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_right | MotorILType.I16] = MotorBitShiftRightI16;

export class MotorBitShiftRightI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_right | MotorILType.I32;
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
        runtime.pushStack(MotorI32, a >> b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_right | MotorILType.I32] = MotorBitShiftRightI32;

export class MotorBitShiftRightI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_shift_right | MotorILType.I64;
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
        runtime.pushStack(MotorI64, a >> b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_shift_right | MotorILType.I64] = MotorBitShiftRightI64;

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

export class MotorBitXorU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_xor | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU8);
        const b = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_xor | MotorILType.U8] = MotorBitXorU8;

export class MotorBitXorU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_xor | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU16);
        const b = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_xor | MotorILType.U16] = MotorBitXorU16;

export class MotorBitXorU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_xor | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU32);
        const b = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_xor | MotorILType.U32] = MotorBitXorU32;

export class MotorBitXorU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_xor | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU64);
        const b = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_xor | MotorILType.U64] = MotorBitXorU64;

export class MotorBitXorI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_xor | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI8);
        const b = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_xor | MotorILType.I8] = MotorBitXorI8;

export class MotorBitXorI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_xor | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI16);
        const b = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_xor | MotorILType.I16] = MotorBitXorI16;

export class MotorBitXorI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_xor | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI32);
        const b = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_xor | MotorILType.I32] = MotorBitXorI32;

export class MotorBitXorI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_xor | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI64);
        const b = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a ^ b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_xor | MotorILType.I64] = MotorBitXorI64;

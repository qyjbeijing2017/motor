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

export class MotorBitOrU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_or | MotorILType.U8;
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
        runtime.pushStack(MotorU8, a | b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_or | MotorILType.U8] = MotorBitOrU8;

export class MotorBitOrU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_or | MotorILType.U16;
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
        runtime.pushStack(MotorU16, a | b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_or | MotorILType.U16] = MotorBitOrU16;

export class MotorBitOrU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_or | MotorILType.U32;
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
        runtime.pushStack(MotorU32, a | b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_or | MotorILType.U32] = MotorBitOrU32;

export class MotorBitOrU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_or | MotorILType.U64;
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
        runtime.pushStack(MotorU64, a | b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_or | MotorILType.U64] = MotorBitOrU64;

export class MotorBitOrI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_or | MotorILType.I8;
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
        runtime.pushStack(MotorI8, a | b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_or | MotorILType.I8] = MotorBitOrI8;

export class MotorBitOrI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_or | MotorILType.I16;
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
        runtime.pushStack(MotorI16, a | b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_or | MotorILType.I16] = MotorBitOrI16;

export class MotorBitOrI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_or | MotorILType.I32;
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
        runtime.pushStack(MotorI32, a | b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_or | MotorILType.I32] = MotorBitOrI32;

export class MotorBitOrI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.bit_or | MotorILType.I64;
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
        runtime.pushStack(MotorI64, a | b);
    }
}
MotorInstruction.instructions[MotorOperator.bit_or | MotorILType.I64] = MotorBitOrI64;

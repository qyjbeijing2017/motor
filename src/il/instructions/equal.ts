import { MotorRuntime } from "../../runtime";
import { MotorU8, MotorU16, MotorU32, MotorU64 } from "../../types/unsigned";
import { MotorI8, MotorI16, MotorI32, MotorI64 } from "../../types/int";
import { MotorF8, MotorF16, MotorF32, MotorF64 } from "../../types/float";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorEqualU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU8);
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.U8] = MotorEqualU8;

export class MotorEqualU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU16);
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.U16] = MotorEqualU16;

export class MotorEqualU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU32);
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.U32] = MotorEqualU32;

export class MotorEqualU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU64);
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.U64] = MotorEqualU64;

export class MotorEqualI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI8);
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.I8] = MotorEqualI8;

export class MotorEqualI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI16);
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.I16] = MotorEqualI16;

export class MotorEqualI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI32);
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.I32] = MotorEqualI32;

export class MotorEqualI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI64);
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.I64] = MotorEqualI64;

export class MotorEqualF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF8);
        const a = runtime.popStack(MotorF8);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.F8] = MotorEqualF8;

export class MotorEqualF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF16);
        const a = runtime.popStack(MotorF16);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.F16] = MotorEqualF16;

export class MotorEqualF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF32);
        const a = runtime.popStack(MotorF32);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.F32] = MotorEqualF32;

export class MotorEqualF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.equal | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF64);
        const a = runtime.popStack(MotorF64);
        runtime.pushStack(MotorU8, b === a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.equal | MotorILType.F64] = MotorEqualF64;

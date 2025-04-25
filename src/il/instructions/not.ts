import { MotorRuntime } from "../../runtime";
import { MotorU16, MotorU32, MotorU8, MotorU64 } from "../../types/unsigned";
import { MotorI16, MotorI32, MotorI8, MotorI64 } from "../../types/int";
import { MotorF16, MotorF32, MotorF8, MotorF64 } from "../../types/float";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorNotU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.U8] = MotorNotU8;

export class MotorNotU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.U16] = MotorNotU16;

export class MotorNotU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.U32] = MotorNotU32;

export class MotorNotU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.U64] = MotorNotU64;

export class MotorNotI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.I8] = MotorNotI8;

export class MotorNotI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.I16] = MotorNotI16;

export class MotorNotI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.I32] = MotorNotI32;

export class MotorNotI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.I64] = MotorNotI64;

export class MotorNotF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.F8] = MotorNotF8;

export class MotorNotF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.F16] = MotorNotF16;

export class MotorNotF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.F32] = MotorNotF32;

export class MotorNotF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.not | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a > 0 ? 0 : 1);
    }
}
MotorInstruction.instructions[MotorOperator.not | MotorILType.F64] = MotorNotF64;

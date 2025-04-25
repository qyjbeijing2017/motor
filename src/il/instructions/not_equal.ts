import { MotorRuntime } from "../../runtime";
import { MotorU8, MotorU16, MotorU32, MotorU64 } from "../../types/unsigned";
import { MotorI8, MotorI16, MotorI32, MotorI64 } from "../../types/int";
import { MotorF8, MotorF16, MotorF32, MotorF64 } from "../../types/float";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorNotEqualU8 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.U8] = MotorNotEqualU8;

export class MotorNotEqualU16 extends MotorInstruction {
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
        runtime.pushStack(MotorU16, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.U16] = MotorNotEqualU16;

export class MotorNotEqualU32 extends MotorInstruction {
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
        runtime.pushStack(MotorU32, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.U32] = MotorNotEqualU32;

export class MotorNotEqualU64 extends MotorInstruction {
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
        runtime.pushStack(MotorU64, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.U64] = MotorNotEqualU64;

export class MotorNotEqualI8 extends MotorInstruction {
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
        runtime.pushStack(MotorI8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.I8] = MotorNotEqualI8;

export class MotorNotEqualI16 extends MotorInstruction {
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
        runtime.pushStack(MotorI16, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.I16] = MotorNotEqualI16;

export class MotorNotEqualI32 extends MotorInstruction {
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
        runtime.pushStack(MotorI32, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.I32] = MotorNotEqualI32;

export class MotorNotEqualI64 extends MotorInstruction {
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
        runtime.pushStack(MotorI64, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.I64] = MotorNotEqualI64;

export class MotorNotEqualF8 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.F8] = MotorNotEqualF8;

export class MotorNotEqualF16 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.F16] = MotorNotEqualF16;

export class MotorNotEqualF32 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.F32] = MotorNotEqualF32;

export class MotorNotEqualF64 extends MotorInstruction {
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
        runtime.pushStack(MotorU8, b !== a ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.not_equal | MotorILType.F64] = MotorNotEqualF64;

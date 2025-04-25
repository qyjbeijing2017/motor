import { MotorRuntime } from "../../runtime";
import { MotorU16, MotorU32, MotorU8, MotorU64 } from "../../types/unsigned";
import { MotorI16, MotorI32, MotorI8, MotorI64 } from "../../types/int";
import { MotorF16, MotorF32, MotorF8, MotorF64 } from "../../types/float";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorAndU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU8);
        const b = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.U8] = MotorAndU8;

export class MotorAndU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU16);
        const b = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.U16] = MotorAndU16;

export class MotorAndU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU32);
        const b = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.U32] = MotorAndU32;

export class MotorAndU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU64);
        const b = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.U64] = MotorAndU64;

export class MotorAndI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI8);
        const b = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.I8] = MotorAndI8;

export class MotorAndI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI16);
        const b = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.I16] = MotorAndI16;

export class MotorAndI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI32);
        const b = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.I32] = MotorAndI32;

export class MotorAndI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI64);
        const b = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.I64] = MotorAndI64;

export class MotorAndF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF8);
        const b = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.F8] = MotorAndF8;

export class MotorAndF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF16);
        const b = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.F16] = MotorAndF16;

export class MotorAndF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF32);
        const b = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.F32] = MotorAndF32;

export class MotorAndF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.or | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_: undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF64);
        const b = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a || b);
    }
}
MotorInstruction.instructions[MotorOperator.or | MotorILType.F64] = MotorAndF64;

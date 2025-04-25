import { MotorRuntime } from "../../runtime";
import { MotorU8, MotorU16, MotorU32, MotorU64 } from "../../types/unsigned";
import { MotorI8, MotorI16, MotorI32, MotorI64 } from "../../types/int";
import { MotorF8, MotorF16, MotorF32, MotorF64 } from "../../types/float";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";


export class MotorLessU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.U8;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.U8] = MotorLessU8;

export class MotorLessU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.U16;
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
        runtime.pushStack(MotorU16, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.U16] = MotorLessU16;

export class MotorLessU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.U32;
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
        runtime.pushStack(MotorU32, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.U32] = MotorLessU32;

export class MotorLessU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.U64;
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
        runtime.pushStack(MotorU64, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.U64] = MotorLessU64;

export class MotorLessI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.I8;
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
        runtime.pushStack(MotorI8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.I8] = MotorLessI8;

export class MotorLessI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.I16;
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
        runtime.pushStack(MotorI16, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.I16] = MotorLessI16;

export class MotorLessI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.I32;
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
        runtime.pushStack(MotorI32, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.I32] = MotorLessI32;

export class MotorLessI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.I64;
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
        runtime.pushStack(MotorI64, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.I64] = MotorLessI64;

export class MotorLessF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.F8;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.F8] = MotorLessF8;

export class MotorLessF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.F16;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.F16] = MotorLessF16;

export class MotorLessF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.F32;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.F32] = MotorLessF32;

export class MotorLessF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.less | MotorILType.F64;
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
        runtime.pushStack(MotorU8, a < b ? 1 : 0);
    }
}
MotorInstruction.instructions[MotorOperator.less | MotorILType.F64] = MotorLessF64;

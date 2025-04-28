import { MotorRuntime } from "../../runtime";
import { MotorF16 } from "../../types/number/f16";
import { MotorF32 } from "../../types/number/f32";
import { MotorF64 } from "../../types/number/f64";
import { MotorF8 } from "../../types/number/f8";
import { MotorI16 } from "../../types/number/i16";
import { MotorI32 } from "../../types/number/i32";
import { MotorI64 } from "../../types/number/i64";
import { MotorI8 } from "../../types/number/i8";
import { MotorU16 } from "../../types/number/u16";
import { MotorU32 } from "../../types/number/u32";
import { MotorU64 } from "../../types/number/u64";
import { MotorU8 } from "../../types/number/u8";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorModU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU8);
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.U8] = MotorModU8;

export class MotorModU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU16);
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.U16] = MotorModU16;

export class MotorModU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU32);
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.U32] = MotorModU32;

export class MotorModU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorU64);
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.U64] = MotorModU64;

export class MotorModI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI8);
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.I8] = MotorModI8;

export class MotorModI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI16);
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.I16] = MotorModI16;

export class MotorModI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI32);
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.I32] = MotorModI32;

export class MotorModI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorI64);
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.I64] = MotorModI64;

export class MotorModF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF8);
        const a = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.F8] = MotorModF8;

export class MotorModF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF16);
        const a = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.F16] = MotorModF16;

export class MotorModF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF32);
        const a = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.F32] = MotorModF32;

export class MotorModF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.mod | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    exec(runtime: MotorRuntime): void {
        const b = runtime.popStack(MotorF64);
        const a = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a % b);
    }
}
MotorInstruction.instructions[MotorOperator.mod | MotorILType.F64] = MotorModF64;

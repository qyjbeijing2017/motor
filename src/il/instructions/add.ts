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

export class MotorAddU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU8);
        const b = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U8] = MotorAddU8;

export class MotorAddU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU16);
        const b = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U16] = MotorAddU16;

export class MotorAddU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU32);
        const b = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U32] = MotorAddU32;

export class MotorAddU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorU64);
        const b = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U64] = MotorAddU64;

export class MotorAddI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI8);
        const b = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I8] = MotorAddI8;

export class MotorAddI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI16);
        const b = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I16] = MotorAddI16;

export class MotorAddI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI32);
        const b = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I32] = MotorAddI32;

export class MotorAddI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorI64);
        const b = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I64] = MotorAddI64;

export class MotorAddF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorF8);
        const b = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F8] = MotorAddF8;

export class MotorAddF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorF16);
        const b = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F16] = MotorAddF16;

export class MotorAddF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorF32);
        const b = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F32] = MotorAddF32;

export class MotorAddF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.add | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const a = runtime.popStack(MotorF64);
        const b = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F64] = MotorAddF64;

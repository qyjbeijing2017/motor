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

export class MotorDivU8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.U8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU8);
        const a = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.U8] = MotorDivU8;

export class MotorDivU16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.U16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU16);
        const a = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.U16] = MotorDivU16;

export class MotorDivU32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.U32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU32);
        const a = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.U32] = MotorDivU32;

export class MotorDivU64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.U64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorU64);
        const a = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.U64] = MotorDivU64;

export class MotorDivI8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.I8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI8);
        const a = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.I8] = MotorDivI8;

export class MotorDivI16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.I16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI16);
        const a = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.I16] = MotorDivI16;

export class MotorDivI32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.I32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI32);
        const a = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.I32] = MotorDivI32;

export class MotorDivI64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.I64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorI64);
        const a = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.I64] = MotorDivI64;

export class MotorDivF8 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.F8;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorF8);
        const a = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.F8] = MotorDivF8;

export class MotorDivF16 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.F16;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorF16);
        const a = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.F16] = MotorDivF16;

export class MotorDivF32 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.F32;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorF32);
        const a = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.F32] = MotorDivF32;

export class MotorDivF64 extends MotorInstruction {
    get code(): number {
        return MotorOperator.div | MotorILType.F64;
    }
    get js(): undefined {
        return undefined;
    }
    set js(_:undefined) {
    }
    static readonly size = 2;
    async exec(runtime: MotorRuntime): Promise<void> {
        const b = runtime.popStack(MotorF64);
        const a = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a / b);
    }
}
MotorInstruction.instructions[MotorOperator.div | MotorILType.F64] = MotorDivF64;

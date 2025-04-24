import { MotorRuntime } from "../../runtime";
import { MotorU8, MotorU16, MotorU32, MotorU64 } from "../../types/unsigned";
import { MotorI8, MotorI16, MotorI32, MotorI64 } from "../../types/int";
import { MotorF8, MotorF16, MotorF32, MotorF64 } from "../../types/float";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorPopU8 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.U8;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorU8);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.U8] = MotorPopU8;

export class MotorPopU16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.U16;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorU16);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.U16] = MotorPopU16;

export class MotorPopU32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.U32;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorU32);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.U32] = MotorPopU32;

export class MotorPopU64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.U64;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorU64);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.U64] = MotorPopU64;

export class MotorPopI8 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.I8;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorI8);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.I8] = MotorPopI8;

export class MotorPopI16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.I16;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorI16);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.I16] = MotorPopI16;

export class MotorPopI32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.I32;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorI32);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.I32] = MotorPopI32;

export class MotorPopI64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.I64;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorI64);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.I64] = MotorPopI64;

export class MotorPopF8 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.F8;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorF8);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.F8] = MotorPopF8;

export class MotorPopF16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.F16;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorF16);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.F16] = MotorPopF16;

export class MotorPopF32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.F32;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorF32);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.F32] = MotorPopF32;

export class MotorPopF64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.pop | MotorILType.F64;
    exec(runtime: MotorRuntime): void {
        runtime.popStack(MotorF64);
    }
}
MotorInstruction.instructions[MotorOperator.pop | MotorILType.F64] = MotorPopF64;

import { MotorRuntime } from "../../runtime";
import { MotorU16, MotorU32, MotorU8, MotorU64 } from "../../types/unsigned";
import { MotorI16, MotorI32, MotorI8, MotorI64 } from "../../types/int";
import { MotorF16, MotorF32, MotorF8, MotorF64 } from "../../types/float";
import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorAddU8 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.U8;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU8);
        const b = runtime.popStack(MotorU8);
        runtime.pushStack(MotorU8, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U8] = MotorAddU8;

export class MotorAddU16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.U16;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU16);
        const b = runtime.popStack(MotorU16);
        runtime.pushStack(MotorU16, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U16] = MotorAddU16;

export class MotorAddU32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.U32;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU32);
        const b = runtime.popStack(MotorU32);
        runtime.pushStack(MotorU32, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U32] = MotorAddU32;

export class MotorAddU64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.U64;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorU64);
        const b = runtime.popStack(MotorU64);
        runtime.pushStack(MotorU64, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U64] = MotorAddU64;

export class MotorAddI8 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.I8;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI8);
        const b = runtime.popStack(MotorI8);
        runtime.pushStack(MotorI8, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I8] = MotorAddI8;

export class MotorAddI16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.I16;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI16);
        const b = runtime.popStack(MotorI16);
        runtime.pushStack(MotorI16, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I16] = MotorAddI16;

export class MotorAddI32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.I32;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI32);
        const b = runtime.popStack(MotorI32);
        runtime.pushStack(MotorI32, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I32] = MotorAddI32;

export class MotorAddI64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.I64;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorI64);
        const b = runtime.popStack(MotorI64);
        runtime.pushStack(MotorI64, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I64] = MotorAddI64;

export class MotorAddF8 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.F8;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF8);
        const b = runtime.popStack(MotorF8);
        runtime.pushStack(MotorF8, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F8] = MotorAddF8;

export class MotorAddF16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.F16;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF16);
        const b = runtime.popStack(MotorF16);
        runtime.pushStack(MotorF16, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F16] = MotorAddF16;

export class MotorAddF32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.F32;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF32);
        const b = runtime.popStack(MotorF32);
        runtime.pushStack(MotorF32, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F32] = MotorAddF32;

export class MotorAddF64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.F64;
    exec(runtime: MotorRuntime): void {
        const a = runtime.popStack(MotorF64);
        const b = runtime.popStack(MotorF64);
        runtime.pushStack(MotorF64, a + b);
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F64] = MotorAddF64;
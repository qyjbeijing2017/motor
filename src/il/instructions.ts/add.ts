import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorAddU8 extends MotorInstruction {
    static readonly size = 3;
    readonly code: number = MotorOperator.add | MotorILType.U8;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U8] = MotorAddU8;

export class MotorAddU16 extends MotorInstruction {
    static readonly size = 4;
    readonly code: number = MotorOperator.add | MotorILType.U16;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U16] = MotorAddU16;

export class MotorAddU32 extends MotorInstruction {
    static readonly size = 6;
    readonly code: number = MotorOperator.add | MotorILType.U32;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U32] = MotorAddU32;

export class MotorAddU64 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.add | MotorILType.U64;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U64] = MotorAddU64;

export class MotorAddI8 extends MotorInstruction {
    static readonly size = 3;
    readonly code: number = MotorOperator.add | MotorILType.I8;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I8] = MotorAddI8;

export class MotorAddI16 extends MotorInstruction {
    static readonly size = 4;
    readonly code: number = MotorOperator.add | MotorILType.I16;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I16] = MotorAddI16;

export class MotorAddI32 extends MotorInstruction {
    static readonly size = 6;
    readonly code: number = MotorOperator.add | MotorILType.I32;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I32] = MotorAddI32;

export class MotorAddI64 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.add | MotorILType.I64;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I64] = MotorAddI64;

export class MotorAddF8 extends MotorInstruction {
    static readonly size = 3;
    readonly code: number = MotorOperator.add | MotorILType.F8;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F8] = MotorAddF8;

export class MotorAddF16 extends MotorInstruction {
    static readonly size = 4;
    readonly code: number = MotorOperator.add | MotorILType.F16;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F16] = MotorAddF16;

export class MotorAddF32 extends MotorInstruction {
    static readonly size = 6;
    readonly code: number = MotorOperator.add | MotorILType.F32;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F32] = MotorAddF32;

export class MotorAddF64 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.add | MotorILType.F64;
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F64] = MotorAddF64;
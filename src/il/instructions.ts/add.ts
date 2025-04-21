import { MotorRuntime } from "../../runtime";
import { MotorStack } from "../../stack";
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
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 2 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorU8(undefined, stack.memory, stack.address + stackPointer.js + 1);
        const b = new MotorU8(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 1;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U8] = MotorAddU8;

export class MotorAddU16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.U16;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 4 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorU16(undefined, stack.memory, stack.address + stackPointer.js + 2);
        const b = new MotorU16(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 2;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U16] = MotorAddU16;

export class MotorAddU32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.U32;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 8 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorU32(undefined, stack.memory, stack.address + stackPointer.js + 4);
        const b = new MotorU32(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 4;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U32] = MotorAddU32;

export class MotorAddU64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.U64;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 16 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorU64(undefined, stack.memory, stack.address + stackPointer.js + 8);
        const b = new MotorU64(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 8;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.U64] = MotorAddU64;

export class MotorAddI8 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.I8;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 2 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorI8(undefined, stack.memory, stack.address + stackPointer.js + 1);
        const b = new MotorI8(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 1;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I8] = MotorAddI8;

export class MotorAddI16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.I16;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 4 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorI16(undefined, stack.memory, stack.address + stackPointer.js + 2);
        const b = new MotorI16(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 2;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I16] = MotorAddI16;

export class MotorAddI32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.I32;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 8 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorI32(undefined, stack.memory, stack.address + stackPointer.js + 4);
        const b = new MotorI32(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 4;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I32] = MotorAddI32;

export class MotorAddI64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.I64;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 16 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorI64(undefined, stack.memory, stack.address + stackPointer.js + 8);
        const b = new MotorI64(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 8;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.I64] = MotorAddI64;

export class MotorAddF8 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.F8;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 2 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorF8(undefined, stack.memory, stack.address + stackPointer.js + 1);
        const b = new MotorF8(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 1;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F8] = MotorAddF8;

export class MotorAddF16 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.F16;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 4 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorF16(undefined, stack.memory, stack.address + stackPointer.js + 2);
        const b = new MotorF16(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 2;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F16] = MotorAddF16;

export class MotorAddF32 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.F32;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 8 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorF32(undefined, stack.memory, stack.address + stackPointer.js + 4);
        const b = new MotorF32(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 4;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F32] = MotorAddF32;

export class MotorAddF64 extends MotorInstruction {
    static readonly size = 2;
    readonly code: number = MotorOperator.add | MotorILType.F64;
    exec(runtime: MotorRuntime): void {
        const stackPointer = runtime.get('stackPointer');
        const stack = runtime.get('stack');
        if(stackPointer.js + 16 > MotorStack.size) {
            throw new Error('Stack overflow');
        }
        const a = new MotorF64(undefined, stack.memory, stack.address + stackPointer.js + 8);
        const b = new MotorF64(undefined, stack.memory, stack.address + stackPointer.js);
        a.js = a.js + b.js;
        stackPointer.js += 8;
    }
}
MotorInstruction.instructions[MotorOperator.add | MotorILType.F64] = MotorAddF64;
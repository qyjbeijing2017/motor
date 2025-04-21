import { MotorInstruction } from "../instruction";
import { MotorOperator } from "../operator";
import { MotorILType } from "../type";

export class MotorPushU8 extends MotorInstruction {
    static readonly  size = 3;
    readonly code: number = MotorOperator.push | MotorILType.U8;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setUint8(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getUint8(this.address + 2);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.U8] = MotorPushU8;

export class MotorPushU16 extends MotorInstruction {
    static readonly size = 4;
    readonly code: number = MotorOperator.push | MotorILType.U16;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setUint16(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getUint16(this.address + 2);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.U16] = MotorPushU16;

export class MotorPushU32 extends MotorInstruction {
    static readonly size = 6;
    readonly code: number = MotorOperator.push | MotorILType.U32;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setUint32(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getUint32(this.address + 2);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.U32] = MotorPushU32;

export class MotorPushU64 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.push | MotorILType.U64;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setBigUint64(this.address + 2, BigInt(value));
    }
    get js(): number {
        return Number(this.memory.viewer.getBigUint64(this.address + 2));
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.U64] = MotorPushU64;

export class MotorPushI8 extends MotorInstruction {
    static readonly size = 3;
    readonly code: number = MotorOperator.push | MotorILType.I8;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setInt8(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getInt8(this.address + 2);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.I8] = MotorPushI8;

export class MotorPushI16 extends MotorInstruction {
    static readonly size = 4;
    readonly code: number = MotorOperator.push | MotorILType.I16;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setInt16(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getInt16(this.address + 2);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.I16] = MotorPushI16;

export class MotorPushI32 extends MotorInstruction {
    static readonly size = 6;
    readonly code: number = MotorOperator.push | MotorILType.I32;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setInt32(this.address + 2, value);
    }
    get js(): number {
        return this.memory.viewer.getInt32(this.address + 2);
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.I32] = MotorPushI32;

export class MotorPushI64 extends MotorInstruction {
    static readonly size = 10;
    readonly code: number = MotorOperator.push | MotorILType.I64;
    protected setImmediate(value: number = 0): void {
        this.memory.viewer.setBigInt64(this.address + 2, BigInt(value));
    }
    get js(): number {
        return Number(this.memory.viewer.getBigInt64(this.address + 2));
    }
}
MotorInstruction.instructions[MotorOperator.push | MotorILType.I64] = MotorPushI64;

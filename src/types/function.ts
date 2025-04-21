import { MotorType, MotorInstruction } from "../il/instruction";
import { MotorOperator } from "../il/operator";
import { MotorInstance } from "../instance";

export interface IMotorInstruction {
    code: number;
    immediate?: number;
}

export interface IMotorInstructionInfo {
    type: MotorType;
    immediate?: number;
}

export class MotorFunction<ReturnT extends MotorInstance<any>, Args extends MotorInstance<any>[]> extends MotorInstance<IMotorInstruction[]> {
    get programPointer(): number {
        return Number(this.memory.viewer.getBigUint64(this.address, true));
    }
    set programPointer(value: number) {
        this.memory.viewer.setBigUint64(this.address, BigInt(value), true);
    }

    get infos(): IMotorInstructionInfo[] {
        const result: IMotorInstructionInfo[] = [];
        while (true) {
            const instruction = MotorInstruction.readInstruction(this.memory, this.programPointer);
            const iInstruction: IMotorInstructionInfo = {
                immediate: instruction.js,
                type: instruction.constructor as MotorType,
            }
            result.push(iInstruction);
            if (instruction.operator === MotorOperator.return) {
                break;
            }
        }
        return result;
    }

    get count(): number {
        return this.infos.length;
    }

    get length(): number {
        return this.infos.reduce((acc, info) => acc + info.type.size, 0);
    }

    get js(): IMotorInstruction[] {
        let result: IMotorInstruction[] = [];
        while (true) {
            const instruction = MotorInstruction.readInstruction(this.memory, this.programPointer);
            const iInstruction: IMotorInstruction = {
                code: instruction.code,
                immediate: instruction.js,
            }
            result.push(iInstruction);
            if (instruction.operator === MotorOperator.return) {
                break;
            }
        }
        return result;
    }

    set js(value: IMotorInstruction[]) {
        this.memory.free(this.programPointer, this.length);
        const infos: {
            immediate?: number;
            type: MotorType;
        }[] = []
        for (const instruction of value) {
            const type = MotorInstruction.instructions[instruction.code];
            if (!type) {
                throw new Error(`Unknown instruction code: ${instruction.code}`);
            }
            infos.push({
                immediate: instruction.immediate,
                type: type,
            });
        }
        const length = infos.reduce((acc, info) => acc + info.type.size, 0);
        const address = this.memory.allocate(length);
        let offset = 0;
        for (const info of infos) {
            new info.type(info.immediate, this.memory, address + offset);
            offset += info.type.size;
        }
        this.programPointer = address;
    }

    // call(...args: Args): ReturnT {
    // }

    free(): void {
        this.memory.free(this.programPointer, this.length);
        super.free();
    }
}
import { MotorType, MotorInstruction } from "../il/instruction";
import { MotorOperator } from "../il/operator";
import { MotorInstance, MotorJsType } from "../instance";
import { MotorRuntime } from "../runtime";

export interface IMotorInstruction {
    code: number;
    immediate?: number;
}

export interface IMotorInstructionInfo {
    type: MotorType;
    immediate?: number;
}

type ElementType<T extends readonly unknown[]> = T[number];

export abstract class MotorFunction<ReturnT extends MotorType | void, Args extends MotorType[]> extends MotorInstance<IMotorInstruction[]> {
    abstract get returnType(): ReturnT;
    abstract get argsType(): Args;
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

    call(args: MotorJsType<InstanceType<ElementType<Args>>>[] = [], runtime: MotorRuntime = new MotorRuntime(undefined, this.memory)): InstanceType<ReturnT> {
        const size = this.argsType.reduce((acc, type) => acc + type.size, 0);
        const stack = runtime.get('stack');
        const stackPointer = runtime.get('stackPointer');
        if(stackPointer.js < size) {
            throw new Error("Stack overflow");
        }
        stackPointer.js -= size;
        let offset = size;
        for (let i = 0; i < args.length; i++) {
            let type = this.argsType[i];
            new type(args[i], runtime.memory, stack.address + stackPointer.js + offset);
            offset -= type.size;
        }
    }

    free(): void {
        this.memory.free(this.programPointer, this.length);
        super.free();
    }
}
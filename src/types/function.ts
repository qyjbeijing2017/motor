import { MotorInstruction, MotorInstructionType } from "../il/instruction";
import { MotorJSType, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { MotorRuntime } from "../runtime";
import { motorSingleton } from "../utils/singleton";
import { MotorReference } from "./reference";
import { MotorU64 } from "./number/u64";
import { MotorFunctionFrame } from "../il/function-frame";

export interface IMotorInstructionInfo {
    type: MotorInstructionType;
    immediate?: number;
}

export abstract class MotorFunction<ReturnType extends MotorType<any>, Args extends MotorType<any>[]> extends MotorReference<IMotorInstructionInfo[]> {
    get js(): IMotorInstructionInfo[] {
        const infos: IMotorInstructionInfo[] = [];
        let offset = 0;
        while (offset < this.size) {
            const info = MotorInstruction.readInstruction(this.refAddress + offset, this.memory);
            const type = info.constructor as MotorInstructionType;
            infos.push({
                type,
                immediate: info.js
            });
            offset += type.size;
        }
        return infos;
    }
    set js(value: IMotorInstructionInfo[]) {
        this.size = value.reduce((acc, info) => acc + info.type.size, 0);
        let offset = 0;
        for (const info of value) {
            new info.type(info.immediate, this.memory, this.refAddress + offset);
            offset += info.type.size;
        }
    }

    abstract get returnType(): ReturnType;
    abstract get argTypes(): Args;

    get argsLength(): number {
        return this.argTypes.reduce((acc, arg) => acc + arg.size, 0);
    }

    async call(args: MotorJSType<InstanceType<Args[number]>>[] = [], runtime: MotorRuntime = motorSingleton(MotorRuntime)): Promise<MotorJSType<InstanceType<ReturnType>>> {
        if(args.length  !== this.argTypes.length) {
            throw new Error(`Function ${this.refAddress} expects ${this.argTypes.length} arguments, but got ${args.length}`);
        }
        args.reverse();
        this.argTypes
            .concat()
            .reverse()
            .forEach((argType, i) => {
                runtime.pushStack(argType, args[i]);
            });
        const programCounter = runtime.get('programCounter');
        const framePointer = runtime.get('framePointer');
        runtime.pushStack(MotorFunctionFrame, {
            returnAddress: programCounter.js,
            framePointer: framePointer.js,
        })
        framePointer.js = runtime.get('stackPointer').js;
        programCounter.js = this.refAddress;
        await runtime.run();
        const retVal = runtime.popStack(this.returnType) as MotorJSType<InstanceType<ReturnType>>;

        this.argTypes
        .concat()
        .reverse()
        .forEach((argType, i) => {
            runtime.popStack(argType);
        });
        return retVal;
    }
}

export type MotorFunctionType<ReturnType extends MotorType<any>, Args extends MotorType<any>[]> = {
    readonly size: 8;
    new(def?: IMotorInstructionInfo[], memory?: MotorMemory, address?: number): MotorFunction<ReturnType, Args>;
}

export function motorCreateFunction<ReturnType extends MotorType<any>, Args extends MotorType<any>[]>(returnType: ReturnType, argTypes: Args): MotorFunctionType<ReturnType, Args> {
    return class extends MotorFunction<ReturnType, Args> {
        static readonly size = 8;
        get returnType(): ReturnType {
            return returnType;
        }
        get argTypes(): Args {
            return argTypes;
        }
    }
}
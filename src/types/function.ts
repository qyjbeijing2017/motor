import { MotorInstruction, MotorInstructionType } from "../il/instruction";
import { MotorJsType, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { MotorRuntime } from "../runtime";
import { motorSingleton } from "../utils/singleton";
import { MotorNull } from "./null";
import { MotorPointer } from "./pointer";
import { MotorReference } from "./reference";
import { MotorU64 } from "./unsigned";

export interface IMotorInstructionInfo {
    type: MotorInstructionType;
    immediate?: number;
}

// type ElementType<T extends readonly unknown[]> = T[number];

export abstract class MotorFunction<ReturnType extends MotorType<any>, Args extends MotorType<any>[]> extends MotorReference<IMotorInstructionInfo[]> {
    get js(): IMotorInstructionInfo[] {
        const infos: IMotorInstructionInfo[] = [];
        let offset = 0;
        while (offset < this.length) {
            const info = MotorInstruction.readInstruction(this.memory, this.refAddress + offset);
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
        this.length = value.reduce((acc, info) => acc + info.type.size, 0);
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
    
    call(args: MotorJsType<InstanceType<Args[number]>>[] = [], runtime: MotorRuntime = motorSingleton(MotorRuntime)): MotorJsType<InstanceType<ReturnType>> {
        runtime.clear();
        args.reverse();
        this.argTypes
            .concat()
            .reverse()
            .forEach((argType, i) => {
                runtime.pushStack(argType, args[i]);
            });
        runtime.pushStack(MotorU64, this.refAddress);
        runtime.call();
        return runtime.popStack(this.returnType) as MotorJsType<InstanceType<ReturnType>>;
    }
}

export type MotorFunctionType<ReturnType extends MotorType<any>, Args extends MotorType<any>[]> = {
    new (def?: IMotorInstructionInfo[], memory?: MotorMemory, address?: number): MotorFunction<ReturnType, Args>;
    readonly size: number;
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
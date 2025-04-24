import { MotorInstruction, MotorInstructionType } from "../il/instruction";
import { MotorJsType, MotorType } from "../instance";
import { MotorRuntime } from "../runtime";
import { motorSingleton } from "../utils/singleton";
import { MotorReference } from "./reference";

export interface IMotorInstructionInfo {
    type: MotorInstructionType;
    immediate?: number;
}

// type ElementType<T extends readonly unknown[]> = T[number];

export abstract class MotorFunction<ReturnType extends MotorType<any>, Args extends MotorType<any>[]> extends MotorReference<IMotorInstructionInfo[]> {
    static readonly size = 8;
    get js(): IMotorInstructionInfo[] {
        const infos: IMotorInstructionInfo[] = [];
        let offset = 0;
        while (offset < this.length) {
            const info = MotorInstruction.readInstruction(this.memory, this.refAddress + 8 + offset);
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
            new info.type(info.immediate, this.memory, this.refAddress + 8 + offset);
            offset += info.type.size;
        }
    }

    abstract get returnType(): ReturnType;
    abstract get argTypes(): Args;

    get argsLength(): number {
        return this.argTypes.reduce((acc, arg) => acc + arg.size, 0);
    }

    // call(args: MotorJsType<InstanceType<Args[number]>>[] = [], runtime: MotorRuntime = motorSingleton(MotorRuntime)): MotorJsType<InstanceType<ReturnType>> {
    //     runtime.clear();
    // }
}

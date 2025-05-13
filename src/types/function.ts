import { QzaInstruction, QzaInstructionType } from "../il/instruction";
import { QzaJSType, QzaType } from "../instance";
import { QzaMemory } from "../memory";
import { QzaRuntime } from "../runtime";
import { qzaSingleton } from "../utils/singleton";
import { QzaReference } from "./reference";
import { QzaU64 } from "./number/u64";
import { QzaFunctionFrame } from "../il/function-frame";
import { qzaPackageEnvironments } from "../package-environment";

export interface IQzaInstructionInfo {
    type: QzaInstructionType;
    immediate?: number;
}

export abstract class QzaFunction<ReturnType extends QzaType<any>, Args extends QzaType<any>[]> extends QzaReference<IQzaInstructionInfo[]> {
    get js(): IQzaInstructionInfo[] {
        const infos: IQzaInstructionInfo[] = [];
        let offset = 0;
        while (offset < this.size) {
            const info = QzaInstruction.readInstruction(this.refAddress + offset, this.memory);
            const type = info.constructor as QzaInstructionType;
            infos.push({
                type,
                immediate: info.js
            });
            offset += type.size;
        }
        return infos;
    }
    set js(value: IQzaInstructionInfo[]) {
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

    async call(args: QzaJSType<InstanceType<Args[number]>>[] = [], runtime: QzaRuntime = qzaSingleton(QzaRuntime)): Promise<QzaJSType<InstanceType<ReturnType>>> {
        if(runtime.memory !== this.memory) {
            throw new Error(`Function ${this.refAddress} is not in the same memory as the runtime`);
        }
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
        runtime.pushStack(QzaFunctionFrame, {
            returnAddress: programCounter.js,
            framePointer: framePointer.js,
        })
        framePointer.js = runtime.get('stackPointer').js;
        programCounter.js = this.refAddress;
        await runtime.run();
        const retVal = runtime.popStack(this.returnType) as QzaJSType<InstanceType<ReturnType>>;

        this.argTypes
        .concat()
        .reverse()
        .forEach((argType, i) => {
            runtime.popStack(argType);
        });
        return retVal;
    }

    callSet(args: QzaJSType<InstanceType<Args[number]>>[] = [], runtime: QzaRuntime = qzaSingleton(QzaRuntime)): void {
        if(runtime.memory !== this.memory) {
            throw new Error(`Function ${this.refAddress} is not in the same memory as the runtime`);
        }
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
        runtime.pushStack(QzaFunctionFrame, {
            returnAddress: programCounter.js,
            framePointer: framePointer.js,
        })
        framePointer.js = runtime.get('stackPointer').js;
        programCounter.js = this.refAddress;
    }

    returnResult(runtime: QzaRuntime = qzaSingleton(QzaRuntime)): QzaJSType<InstanceType<ReturnType>> {
        const retVal = runtime.popStack(this.returnType) as QzaJSType<InstanceType<ReturnType>>;
        this.argTypes
        .concat()
        .reverse()
        .forEach((argType, i) => {
            runtime.popStack(argType);
        });
        return retVal;
    }
}

export type QzaFunctionType<ReturnType extends QzaType<any>, Args extends QzaType<any>[]> = {
    readonly size: 8;
    new(def?: IQzaInstructionInfo[], memory?: QzaMemory, address?: number): QzaFunction<ReturnType, Args>;
}

export function qzaCreateFunction<ReturnType extends QzaType<any>, Args extends QzaType<any>[]>(returnType: ReturnType, argTypes: Args): QzaFunctionType<ReturnType, Args> {
    return class extends QzaFunction<ReturnType, Args> {
        static readonly size = 8;
        get returnType(): ReturnType {
            return returnType;
        }
        get argTypes(): Args {
            return argTypes;
        }
    }
}
qzaPackageEnvironments['qzaCreateFunction'] = qzaCreateFunction;
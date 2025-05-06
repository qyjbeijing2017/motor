import { MotorInstruction, MotorInstructionType } from "./il/instruction";
import { MotorType } from "./instance";
import { MotorStack } from "./stack";
import { MotorStruct } from "./types/struct";
import { MotorU64 } from "./types/number/u64";
import { motorCreateMap } from "./types/map";
import { MotorString } from "./types/string";

const PackageMap = motorCreateMap(
    MotorString,
    MotorU64,
)

export type PackageLoader = (name: string) => Promise<string | void> | string | void;

export class MotorRuntime extends MotorStruct<{
    programCounter: typeof MotorU64,
    stackPointer: typeof MotorU64,
    framePointer: typeof MotorU64,
    stack: typeof MotorStack,
    packageMap: typeof PackageMap,
}> {
    loaders: PackageLoader[] = [
        async (name: string) => {
            if(name.startsWith('http://') || name.startsWith('https://')) {
                try {
                    const response = await fetch(name);
                    if (response.ok) {
                        return await response.text();
                    }
                } catch (e) {
                    console.error(`Error loading package ${name}:`, e);
                }
            }
        },
    ];
    readonly invokeMap: Map<string, (runtime: MotorRuntime) => void | Promise<void>> = new Map([
        ['print', async (runtime) => {
            const logStr = runtime.popStack(MotorString);
            console.log(logStr);
        }],
        ['import', async (runtime) => {
            const key = runtime.popStack(MotorString);
            for (const loader of this.loaders) {
                const result = await loader(key);
                if (result) {
                    const initFunc = new Function('runtime', 'targetAddress', result);
                    const targetAddress = initFunc(this);
                    this.get('packageMap').set(key, targetAddress ?? 0);
                    return;
                }
            }
            throw new Error(`Package ${key} not found`);
        }]
    ]);
    static readonly size =
        MotorU64.size +
        MotorU64.size +
        MotorU64.size +
        MotorStack.size +
        PackageMap.size;
    get type() {
        return {
            programCounter: MotorU64,
            stackPointer: MotorU64,
            framePointer: MotorU64,
            stack: MotorStack,
            packageMap: PackageMap,
        };
    }

    protected onInstanceCreated(): void {
        this.get('stackPointer').js = MotorStack.size;
    }

    clear() {
        this.get('programCounter').js = 0;
        this.get('stackPointer').js = MotorStack.size;
        this.get('framePointer').js = 0;
        this.get('packageMap').clear();
    }

    async init() {
        const packageMap = this.get('packageMap');
        for (let i = 0; i < packageMap.length; i++) {
            const [key, address] = packageMap.at(i);
            for (const loader of this.loaders) {
                const result = await loader(key.js);
                if (result) {
                    const initFunc = new Function('runtime', 'targetAddress', result);
                    const targetAddress = initFunc(this, address.js);
                    address.js = targetAddress;
                    continue;
                }
            }
            throw new Error(`Package ${key.js} not found`);
        }
    }

    pushStack<T extends MotorType<any>>(type: T, value: T extends MotorType<infer U> ? U : never): InstanceType<T> {
        const stackPointer = this.get('stackPointer');
        if (stackPointer.js < type.size) {
            throw new Error('Stack overflow');
        }
        stackPointer.js -= type.size;
        return new type(value, this.memory, this.get('stack').address + stackPointer.js) as InstanceType<T>;
    }

    popStack<T extends MotorType<any>>(type: T): T extends MotorType<infer U> ? U : never {
        const stackPointer = this.get('stackPointer');
        if (stackPointer.js + type.size > MotorStack.size) {
            throw new Error('Stack underflow');
        }
        const value = new type(undefined, this.memory, this.get('stack').address + stackPointer.js);
        const jsValue = value.js;
        stackPointer.js += type.size;
        value.delete();
        return jsValue;
    }

    async run() {
        const programCounter = this.get('programCounter');
        while (true) {
            if (programCounter.js === 0) {
                break;
            }
            const instruction = MotorInstruction.readInstruction(programCounter.js, this.memory)
            programCounter.js += (instruction.constructor as MotorInstructionType).size;
            await instruction.exec(this);
        }
    }
}
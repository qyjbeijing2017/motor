import { MotorInstruction, MotorInstructionType } from "./il/instruction";
import { MotorType } from "./instance";
import { MotorStack } from "./stack";
import { MotorStruct } from "./types/struct";
import { MotorU16 } from "./types/number/u16";
import { MotorU64 } from "./types/number/u64";
import { motorCreateMap } from "./types/map";
import { MotorString } from "./types/string";
import { MotorPackage } from "./package";

const PackageMap = motorCreateMap(
    MotorString,
    MotorU64,
)

export class MotorRuntime extends MotorStruct<{
    programCounter: typeof MotorU64,
    stackPointer: typeof MotorU64,
    framePointer: typeof MotorU64,
    stack: typeof MotorStack,
    packageMap: typeof PackageMap,
}> {
    readonly invokeMap: Map<string, (runtime: MotorRuntime) => void | Promise<void>> = new Map([
        ['system.print', async (runtime) => {
            const logStr = runtime.popStack(MotorString);
            console.log(logStr);
        }],
        ['system.import', async (runtime) => {
            const newPackage = new MotorPackage(runtime.popStack(MotorString), runtime);
            const targetAddress = await newPackage.init();
            this.packages.set(newPackage.url, newPackage);
            runtime.pushStack(MotorU64, targetAddress);
        }]
    ]);
    readonly packages: Map<string, MotorPackage> = new Map();
    static readonly size =
        MotorU16.size +
        MotorU64.size +
        MotorU64.size +
        MotorStack.size +
        PackageMap.size;
    get type() {
        return {
            id: MotorU16,
            programCounter: MotorU64,
            stackPointer: MotorU64,
            framePointer: MotorU64,
            packagePointer: MotorU64,
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
        for(let i = 0; i < packageMap.length; i++) {
            const [key, value] = packageMap.at(i);
            let pack = this.packages.get(key.js);
            if(!pack) {
                const newPack = new MotorPackage(key.js, this);
                this.packages.set(key.js, newPack);
                pack = newPack;
            }
            if(!pack.initialized) {
                value.js = await pack.init(value.js);
            }
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
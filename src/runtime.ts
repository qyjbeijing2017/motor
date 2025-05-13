import { QzaInstruction, QzaInstructionType } from "./il/instruction";
import { QzaType } from "./instance";
import { QzaStack } from "./stack";
import { QzaStruct } from "./types/struct";
import { QzaU64 } from "./types/number/u64";
import { QzaString } from "./types/string";
import { qzaCreateList } from "./types/list";

const PackageList = qzaCreateList(QzaString)

export type PackageLoader = (name: string) => Promise<void> | void;

export class QzaRuntime extends QzaStruct<{
    programCounter: typeof QzaU64,
    stackPointer: typeof QzaU64,
    framePointer: typeof QzaU64,
    stack: typeof QzaStack,
    packageMap: typeof PackageList,
}> {
    loaders: PackageLoader[] = [];
    readonly invokeMap: Map<string, (runtime: QzaRuntime) => void | Promise<void>> = new Map([
        ['print', async (runtime) => {
            const logStr = runtime.popStack(QzaString);
            console.log(logStr);
        }],
        ['import', async (runtime) => {
            const name = runtime.popStack(QzaString);
            for (const loader of runtime.loaders) {
                try {
                    await loader(name);
                    this.get('packageMap').add(name);
                    return;
                } catch (e) {
                    console.error(e);
                    continue;
                }
            }
            throw new Error(`Failed to load package ${name}`);
        }],
        ['allocate', async (runtime) => {
            const size = runtime.popStack(QzaU64);
            const address = runtime.memory.allocate(size);
            runtime.pushStack(QzaU64, address);
        }],
        ['free', async (runtime) => {
            const size = runtime.popStack(QzaU64);
            const address = runtime.popStack(QzaU64);
            runtime.memory.free(address, size);
        }]
    ]);
    static readonly size =
        QzaU64.size +
        QzaU64.size +
        QzaU64.size +
        QzaStack.size +
        PackageList.size;
    get type() {
        return {
            programCounter: QzaU64,
            stackPointer: QzaU64,
            framePointer: QzaU64,
            stack: QzaStack,
            packageMap: PackageList,
        };
    }

    protected onInstanceCreated(): void {
        this.get('stackPointer').js = QzaStack.size;
    }

    clear() {
        this.get('programCounter').js = 0;
        this.get('stackPointer').js = QzaStack.size;
        this.get('framePointer').js = 0;
        this.get('packageMap').clear();
    }

    async init() {
        const packageMap = this.get('packageMap');
        for (let i = 0; i < packageMap.length; i++) {
        }
    }

    pushStack<T extends QzaType<any>>(type: T, value: T extends QzaType<infer U> ? U : never): InstanceType<T> {
        const stackPointer = this.get('stackPointer');
        if (stackPointer.js < type.size) {
            throw new Error('Stack overflow');
        }
        stackPointer.js -= type.size;
        return new type(value, this.memory, this.get('stack').address + stackPointer.js) as InstanceType<T>;
    }

    popStack<T extends QzaType<any>>(type: T): T extends QzaType<infer U> ? U : never {
        const stackPointer = this.get('stackPointer');
        if (stackPointer.js + type.size > QzaStack.size) {
            throw new Error('Stack underflow');
        }
        const value = new type(undefined, this.memory, this.get('stack').address + stackPointer.js);
        const jsValue = value.js;
        stackPointer.js += type.size;
        value.delete();
        return jsValue;
    }

    private _running = false;
    get running() {
        return this._running;
    }

    stop() {
        this._running = false;
    }

    async run() {
        const programCounter = this.get('programCounter');
        while (this._running) {
            if (programCounter.js === 0) {
                break;
            }
            const instruction = QzaInstruction.readInstruction(programCounter.js, this.memory)
            programCounter.js += (instruction.constructor as QzaInstructionType).size;
            await instruction.exec(this);
        }
    }
}
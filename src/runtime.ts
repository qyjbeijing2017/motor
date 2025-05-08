import { QzaInstruction, QzaInstructionType } from "./il/instruction";
import { QzaType } from "./instance";
import { QzaStack } from "./stack";
import { QzaStruct } from "./types/struct";
import { QzaU64 } from "./types/number/u64";
import { qzaCreateMap } from "./types/map";
import { QzaString } from "./types/string";
import { qzaPackageEnvironments } from "./package-environment";

const PackageMap = qzaCreateMap(
    QzaString,
    QzaU64,
)

export type PackageLoader = (name: string) => Promise<string | void> | string | void;

export class QzaRuntime extends QzaStruct<{
    programCounter: typeof QzaU64,
    stackPointer: typeof QzaU64,
    framePointer: typeof QzaU64,
    stack: typeof QzaStack,
    packageMap: typeof PackageMap,
}> {
    loaders: PackageLoader[] = [
        async (name: string) => {
            if (name.startsWith('http://') || name.startsWith('https://')) {
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
    readonly invokeMap: Map<string, (runtime: QzaRuntime) => void | Promise<void>> = new Map([
        ['print', async (runtime) => {
            const logStr = runtime.popStack(QzaString);
            console.log(logStr);
        }],
        ['import', async (runtime) => {
            const key = runtime.popStack(QzaString);
            for (const loader of this.loaders) {
                const result = await loader(key);
                if (result) {
                    const initFunc = new (Object.getPrototypeOf(async function () { }).constructor)(
                        'runtime',
                        'targetAddress',
                        ...Object.keys(qzaPackageEnvironments),
                        result
                    );
                    let targetAddress = 0
                    targetAddress = await initFunc(
                        this,
                        targetAddress,
                        ...Object.values(qzaPackageEnvironments),
                    );
                    this.get('packageMap').set(key, targetAddress ?? 0);
                    return;
                }
            }
            throw new Error(`Package ${key} not found`);
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
        PackageMap.size;
    get type() {
        return {
            programCounter: QzaU64,
            stackPointer: QzaU64,
            framePointer: QzaU64,
            stack: QzaStack,
            packageMap: PackageMap,
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

    async run() {
        const programCounter = this.get('programCounter');
        while (true) {
            if (programCounter.js === 0) {
                break;
            }
            const instruction = QzaInstruction.readInstruction(programCounter.js, this.memory)
            programCounter.js += (instruction.constructor as QzaInstructionType).size;
            await instruction.exec(this);
        }
    }
}
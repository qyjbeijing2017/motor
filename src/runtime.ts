import { MotorFunctionFrame } from "./il/function-frame";
import { MotorInstruction, MotorInstructionType } from "./il/instruction";
import { MotorType } from "./instance";
import { MotorStack } from "./stack";
import { MotorStruct } from "./types/struct";
import { MotorU16 } from "./types/number/u16";
import { MotorU64 } from "./types/number/u64";

export class MotorRuntime extends MotorStruct<{
    programCounter: typeof MotorU64,
    stackPointer: typeof MotorU64,
    framePointer: typeof MotorU64,
    packagePointer: typeof MotorU64,
    stack: typeof MotorStack,
}> {
    static readonly size =
        MotorU64.size +
        MotorU64.size +
        MotorU64.size +
        MotorStack.size;
    get type() {
        return {
            id: MotorU16,
            programCounter: MotorU64,
            stackPointer: MotorU64,
            framePointer: MotorU64,
            packagePointer: MotorU64,
            stack: MotorStack,
        };
    }

    protected onInstanceCreated(): void {
        this.get('stackPointer').js = MotorStack.size;
    }

    clear() {
        this.get('programCounter').js = 0;
        this.get('stackPointer').js = MotorStack.size;
        this.get('framePointer').js = 0;
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
        const value = new type(undefined, this.get('stack').memory, this.get('stack').address + stackPointer.js).js;
        stackPointer.js += type.size;
        return value;
    }

    run() {
        const programCounter = this.get('programCounter');
        while (true) {
            if (programCounter.js === 0) {
                break;
            }
            const instruction = MotorInstruction.readInstruction(this.memory, programCounter.js)
            programCounter.js += (instruction.constructor as MotorInstructionType).size;
            instruction.exec(this);
        }
    }

    call() {
        const functionAddress = this.popStack(MotorU64);
        const programCounter = this.get('programCounter');
        const framePointer = this.get('framePointer');
        const packagePointer = this.get('packagePointer');
        this.pushStack(MotorFunctionFrame, {
            returnAddress: programCounter.js,
            framePointer: framePointer.js,
            packagePointer: packagePointer.js,
        })
        framePointer.js = this.get('stackPointer').js;
        programCounter.js = functionAddress;
        this.run();
    }
}
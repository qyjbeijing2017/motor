import { MotorProgram } from "./il/program";
import { MotorStack } from "./stack";
import { MotorStruct } from "./types/struct";
import { MotorU64 } from "./types/unsigned";
import { motorSingleton } from "./utils/singleton";

export class MotorRuntime extends MotorStruct<{
    program: MotorProgram;
    stack: MotorStack;
    programCounter: MotorU64;
    stackPointer: MotorU64;
}> {
    constructor() {
        super({
            programCounter: motorSingleton(MotorU64, 0),
            stack: motorSingleton(MotorStack),
            stackPointer: motorSingleton(MotorU64, 0),
            program: motorSingleton(MotorProgram)
        });
    }
}
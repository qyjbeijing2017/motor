import { MotorNull } from "../types/null";
import { MotorPointer } from "../types/pointer";
import { MotorStruct } from "../types/struct";
import { MotorU64 } from "../types/unsigned";
import { motorSingleton } from "../utils/singleton";

export class MotorProgram extends MotorStruct<{
    length: MotorU64;
    pointer: MotorPointer<MotorNull>;
}> {
    constructor() {
        super({
            length: motorSingleton(MotorU64, 0),
            pointer: new MotorPointer(new MotorNull()),
        });
    }
}
import { MotorMapType } from "../types/map";
import { MotorNull } from "../types/null";
import { MotorPointerType } from "../types/pointer";
import { MotorString } from "../types/string";
import { MotorStruct } from "../types/struct";

export class Package extends MotorStruct<{
    name: typeof MotorString,
    exports: MotorMapType<typeof MotorString, MotorPointerType<typeof MotorNull>>,
}> {
    static readonly size = MotorString.size;
    get types() {
        return {
            name: MotorString,

        };
    }
}
import { MotorMemory } from "../memory";
import { MotorInstance } from "./instance";

export class MotorNull extends MotorInstance<null>{
    static readonly size = 0;
    protected onSetData(val: null): void {
    }
    protected onGetData(): null {
        return null;
    }
    constructor(
        def: null = null,
        memory?: MotorMemory
    ) {
        super(def, memory, 0);
    }
}
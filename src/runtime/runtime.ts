import { MotorInstance } from "../instance"; 

export interface MotorRuntimeProps {
    stackSize: number;
    stackPointer: number;
}

export class MotorRuntime extends MotorInstance<null> {
    protected onGetJsVal(): null {
        throw new Error("Method not implemented.");
    }
    protected onSetJsVal(value?: null | undefined): void {
        throw new Error("Method not implemented.");
    }
    protected onGetSize(): number {
        throw new Error("Method not implemented.");
    }   
}

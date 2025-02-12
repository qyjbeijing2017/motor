import { MotorInstance } from "../../instance";
import { MotorMemory } from "../../memory";
import { MotorRawOf } from "../../utils/raw-of";
import { MotorArray } from "../array.type";
import { MotorReference } from "../reference.type";

export class MotorList<T extends MotorInstance<any>> extends MotorReference<MotorRawOf<T>[], MotorArray<T>> {
    delete(): void {
        throw new Error("Method not implemented.");
    }
    get rawRef(): MotorRawOf<T>[] {
        return this.raw.rawValue;
    }
    set rawRef(value: MotorRawOf<T>[]) {
        this.raw.rawValue = value;
    }
    get raw(): MotorArray<T> {
        throw new Error("Method not implemented.");
    }
    private _length: number = 0;
    get length(): number {
        return this._length;
    }

    constructor(
        defaultValue: {
            Type: MotorRawOf<T>,
            defaultValue?: MotorRawOf<T>[] | MotorList<T>,
            length?: number,
        },
        memory?: MotorMemory,
        address?: number,
    ){
        super(defaultValue.defaultValue, memory, address);
    }
}
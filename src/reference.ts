import { MotorInstance } from "./instance";
import { MotorMemory } from "./memory";
import { MotorType } from "./type";
import { MotorRawOf } from "./utils/raw-of";

export class MotorReference<T extends MotorType<any>> {
    private _instance: InstanceType<T>
    static readonly counter: Map<MotorInstance<any>, number> = new Map()

    get rawValue() {
        return this._instance.rawValue
    }
    set(MotorReference: MotorReference<T>) {
        this._instance = MotorReference._instance
    }
    constructor(
        readonly type: T,
        defaultValue?: MotorRawOf<InstanceType<T>> | MotorReference<T>,
        memory?: MotorMemory,
        address?: number
    ) {
        if(defaultValue instanceof MotorReference) {
            this._instance = defaultValue._instance
        } else {
            this._instance = new type(defaultValue, memory, address) as InstanceType<T>
        }
        if(MotorReference.counter.has(this._instance)) {
            MotorReference.counter.set(this._instance, MotorReference.counter.get(this._instance)! + 1)
        } else {
            MotorReference.counter.set(this._instance, 1)
        }
    }
}
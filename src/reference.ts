import { MotorInstance } from "./instance";
import { MotorMemory } from "./memory";
import { MotorType } from "./type";
import { MotorRawOf } from "./utils/raw-of";

export class MotorAvable<T extends MotorType<any>> {
    private _instance: InstanceType<T>
    static readonly counter: Map<MotorInstance<any>, number> = new Map()

    get rawValue() {
        return this._instance.rawValue
    }
    set(MotorReference: MotorAvable<T>) {
        this._instance = MotorReference._instance
    }
    constructor(
        readonly type: T,
        defaultValue?: MotorRawOf<InstanceType<T>> | MotorAvable<T>,
        memory?: MotorMemory,
        address?: number
    ) {
        if(defaultValue instanceof MotorAvable) {
            this._instance = defaultValue._instance
        } else {
            this._instance = new type(defaultValue, memory, address) as InstanceType<T>
        }
        if(MotorAvable.counter.has(this._instance)) {
            MotorAvable.counter.set(this._instance, MotorAvable.counter.get(this._instance)! + 1)
        } else {
            MotorAvable.counter.set(this._instance, 1)
        }
    }
}
import { MotorMemory } from "../memory";
import { motorSingleton } from "../utils/singleton";
import { motorSizeOf } from "./sizeof";

/**
 * Base class for all Motor instances.
 */
export abstract class MotorInstance<T> {
    protected abstract onSetData(val: T): void;
    protected abstract onGetData(): T;
    protected _address: number = 0;

    /**
    * The address of this instance in memory.
    */
    get address(): number {
        return this._address;
    }

    /**
     * Get or set the value of this instance in JavaScript.
     */
    get jsVal(): T {
        return this.onGetData();
    }
    set jsVal(val: T) {
        this.onSetData(val);
    }

    /**
     * Free the memory of this instance.
     */
    free(): void {
        this.memory.free(this._address, motorSizeOf(this.constructor));
    }

    constructor(
        def?: T,
        /**
         * The memory instance that this instance is stored in.
         */
        readonly memory: MotorMemory = motorSingleton(MotorMemory),
        /**
         * The address of this instance in memory.
         */
        address: number = memory.allocate(motorSizeOf(this.constructor))
    ) {
        this._address = address;
        if(def){
            this.onSetData(def);
        }
    }
}
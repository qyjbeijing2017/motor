import { QzaMemory } from "./memory";
import { qzaSingleton } from "./utils/singleton";

export abstract class QzaInstance<JSType> {
    abstract get js(): JSType;
    abstract set js(value: JSType);

    protected onInstanceCreated(): void {
    }

    constructor(
        def?: JSType,
        readonly memory = qzaSingleton(QzaMemory),
        readonly address = memory.allocate(qzaTypeof(this).size),
    ) {
        this.onInstanceCreated();
        if (def !== undefined) {
            (this as QzaInstance<JSType>).js = def;
        }
    }

    delete() {
        // free memory from heap
    }

    free() {
        this.delete();
        this.memory.free(this.address, qzaTypeof(this).size);
    }

    equal(other: QzaInstance<JSType>): boolean {
        if(other.constructor !== this.constructor) {
            return false;
        }
        if(this.address === other.address) {
            return true;
        }
        return false;
    }
}

export type QzaType<JSType> = {
    readonly size: number;
    new(def?: JSType, memory?: QzaMemory, address?: number): QzaInstance<JSType>;
}

export type QzaJSType<T extends QzaInstance<any> | QzaType<any>> = T extends QzaInstance<infer U> ? U : T extends QzaType<infer U> ? U : never;

export function qzaTypeof<JSType>(type: QzaInstance<JSType>): QzaType<JSType> {
    if ('size' in type.constructor) {
        return type.constructor as QzaType<JSType>;
    }
    throw new Error('Invalid type: ' + type.constructor.name);
}

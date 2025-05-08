import { QzaType } from "../instance";
import { QzaMemory } from "../memory";
import { qzaPackageEnvironments } from "../package-environment";
import { QzaNull } from "./null";
import { QzaU64 } from "./number/u64";

export abstract class QzaPointer<T extends QzaType<any>> extends QzaU64 {
    abstract get type(): T;
    get value(): InstanceType<T> | QzaNull {
        if (this.js === 0) {
            return new QzaNull(undefined, this.memory);
        }
        return new this.type(undefined, this.memory, this.js) as InstanceType<T>
    }

    delete() {
        this.value.free();
        this.js = 0;
    }
}

export type QzaPointerType<T extends QzaType<any>> = {
    readonly size: 8;
    new(def?: number, memory?: QzaMemory, address?: number): QzaPointer<T>;
}

export function qzaCreatePointer<T extends QzaType<any>>(type: T): QzaPointerType<T> {
    return class extends QzaPointer<T> {
        static readonly size = 8;
        get type(): T {
            return type;
        }
    };
}
qzaPackageEnvironments['qzaCreatePointer'] = qzaCreatePointer;

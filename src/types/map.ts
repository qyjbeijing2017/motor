import { MotorJs, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { MotorNull } from "./null";
import { MotorReference } from "./reference";

export abstract class MotorMap<K extends MotorType<any>, V extends MotorType<any>> extends MotorReference<Map<MotorJs<K>, MotorJs<V>>> {
    abstract get keyType(): K;
    abstract get valueType(): V;

    get count(): number {
        return this.length / (this.keyType.size + this.valueType.size);
    }

    get js(): Map<MotorJs<K>, MotorJs<V>> {
        const result = new Map<MotorJs<K>, MotorJs<V>>();
        for (let i = 0; i < this.length; i += this.keyType.size + this.valueType.size) {
            const key = new this.keyType(undefined, this.memory, this.refAddress + i).js;
            const value = new this.valueType(undefined, this.memory, this.refAddress + i + this.keyType.size).js;
            result.set(key, value);
        }
        return result;
    }

    set js(value: Map<MotorJs<K>, MotorJs<V>>) {
        this.length = value.size * (this.keyType.size + this.valueType.size);
        let offset = 0;
        for (const [key, val] of value.entries()) {
            new this.keyType(key, this.memory, this.refAddress + offset);
            new this.valueType(val, this.memory, this.refAddress + offset + this.keyType.size);
            offset += this.keyType.size + this.valueType.size;
        }
    }

    get(key: MotorJs<K>): InstanceType<V> | MotorNull {
        for (let i = 0; i < this.length; i += this.keyType.size + this.valueType.size) {
            const k = new this.keyType(undefined, this.memory, this.refAddress + i).js;
            if (k === key) {
                return new this.valueType(undefined, this.memory, this.refAddress + i + this.keyType.size) as InstanceType<V>;
            }
        }
        return new MotorNull(undefined, this.memory);
    }
}

export type MotorMapType<K extends MotorType<any>, V extends MotorType<any>> = {
    readonly size: 8;
    new(def?: Map<MotorJs<K>, MotorJs<V>>, memory?: MotorMemory, address?: number): MotorMap<K, V>;
}

export function motorCreateMap<K extends MotorType<any>, V extends MotorType<any>>(keyType: K, valueType: V): MotorMapType<K, V> {
    return class extends MotorMap<K, V> {
        static readonly size = 8;
        get keyType(): K {
            return keyType;
        }
        get valueType(): V {
            return valueType;
        }
    };
}

import { MotorJSType, MotorType } from "../instance";
import { MotorMemory } from "../memory";
import { MotorNull } from "./null";
import { MotorReference } from "./reference";

export abstract class MotorMap<K extends MotorType<any>, V extends MotorType<any>> extends MotorReference<[MotorJSType<K>, MotorJSType<V>][]> {
    abstract get keyType(): K;
    abstract get valueType(): V;

    get length(): number {
        if (this.size === 0) {
            return 0;
        }
        return this.size / (this.keyType.size + this.valueType.size);
    }

    get js(): [MotorJSType<K>, MotorJSType<V>][] {
        const result: [MotorJSType<K>, MotorJSType<V>][] = [];
        for (let i = 0; i < this.length; i++) {
            const [key, value] = this.at(i);
            result.push([key.js, value.js]);
        }
        return result;
    }

    set js(value: [MotorJSType<K>, MotorJSType<V>][]) {
        this.size = value.length * (this.keyType.size + this.valueType.size);
        for (let i = 0; i < value.length; i++) {
            const [k, v] = this.at(i);
            k.js = value[i][0];
            v.js = value[i][1];
        }
    }

    at(index: number): [InstanceType<K>, InstanceType<V>] {
        const address = this.refAddress + index * (this.keyType.size + this.valueType.size);
        const key = new this.keyType(undefined, this.memory, address) as InstanceType<K>;
        const value = new this.valueType(undefined, this.memory, address + this.keyType.size) as InstanceType<V>;
        return [key, value];
    }

    set(k: MotorJSType<K>, v: MotorJSType<V>): void {
        for (let i = 0; i < this.length; i++) {
            const [key, value] = this.at(i);
            if (key.js === k) {
                value.js = v;
                return;
            }
        }
        this.js = [...this.js, [k, v]];
    }

    get(k: MotorJSType<K>): InstanceType<V> | MotorNull {
        for (let i = 0; i < this.length; i++) {
            const [key, value] = this.at(i);
            if (key.js === k) {
                return value;
            }
        }
        return new MotorNull(undefined, this.memory);
    }
}

export type MotorMapType<K extends MotorType<any>, V extends MotorType<any>> = {
    readonly size: 8;
    new(def?: [MotorJSType<K>, MotorJSType<V>][], memory?: MotorMemory, address?: number): MotorMap<K, V>;
}

export function motorCreateMap<K extends MotorType<any>, V extends MotorType<any>>(keyType: K, valueType: V): MotorMapType<K, V> {
    return class extends MotorMap<K, V> {
        static readonly size = 8
        get keyType(): K {
            return keyType;
        }
        get valueType(): V {
            return valueType;
        }
    }
}

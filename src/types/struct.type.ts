import { MotorMemory } from "../memory";
import { MotorInstance } from "./instance";
import { motorSizeOf } from "./sizeof";

export abstract class MotorStruct<T extends {[key: string]: new (
    def: undefined,
    memory: MotorMemory,
    address: number
) => MotorInstance<any>}> extends MotorInstance<{[K in keyof T]: InstanceType<T[K]>['jsVal']}> {
    protected abstract onGetType<K extends keyof T>(key: K): T[K];
    protected abstract get keys(): (keyof T)[];

    get<K extends keyof T>(key: K): InstanceType<T[K]> {
        let offset = 0;
        for(const k of this.keys) {
            if(k === key) {
                break;
            }
            offset += motorSizeOf(this.onGetType(k));
        }
        return new (this.onGetType(key))(undefined, this.memory, this.address + offset) as InstanceType<T[K]>;
    }

    protected onGetData(): { [K in keyof T]: InstanceType<T[K]>["jsVal"]; } {
        return this.keys.reduce((acc, key) => {
            acc[key] = this.get(key).jsVal;
            return acc;
        }, {} as { [K in keyof T]: InstanceType<T[K]>["jsVal"]; });
    }

    protected onSetData(data: { [K in keyof T]: InstanceType<T[K]>["jsVal"]; }): void {
        this.keys.forEach(key => {
            this.get(key).jsVal = data[key];
        });
    }
}

export function defineMotorStruct<T extends {[key: string]: new () => MotorInstance<any>}>(type: T): new (
    def?: {[K in keyof T]: InstanceType<T[K]>['jsVal']},
    memory?: MotorMemory,
    address?: number
) => MotorStruct<T> {
    let size = 0;
    for(const key in type) {
        size += motorSizeOf(type[key]);
    }

    return class extends MotorStruct<T> {
        static readonly size = size;
        onGetType<K extends keyof T>(key: K): T[K] {
            return type[key];
        }
        get keys(): (keyof T)[] {
            return Object.keys(type) as (keyof T)[];
        }
    }
}
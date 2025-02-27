import { MotorMemory } from "../memory";
import { MotorInstance } from "./instance";

export abstract class MotorStruct<T extends {[key: string]: new (
    def: undefined,
    memory: MotorMemory,
    address: number
) => MotorInstance<any>}> extends MotorInstance<{[K in keyof T]: InstanceType<T[K]>['jsVal']}> {
    protected abstract onGetType<K extends keyof T>(key: K): T[K];
    protected abstract get keys(): (keyof T)[];

    get<K extends keyof T>(key: K): InstanceType<T[K]> {
        return new (this.onGetType(key))(undefined, this.memory, this.address) as InstanceType<T[K]>;
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

import { MotorMemory } from "../memory";
import { MotorInstance } from "./instance";
import { motorSizeOf } from "./sizeof";

export abstract class  MotorList<T extends new (def: undefined, memory: MotorMemory, address: number) => MotorInstance<any>> extends MotorInstance<(InstanceType<T>['jsVal'])[]> {
    protected abstract onGetType(): T;

    get length(): number {
        return this.memory.dataView.getUint32(this.address, true);
    }
    
    get count(): number {
        return this.memory.dataView.getUint32(this.address + 4, true);
    }

    at(index: number): InstanceType<T> {
        if(index < 0 || index >= this.count) {
            throw new Error(`Index out of bounds: ${index}`);
        }
        return new (this.onGetType())(undefined,this.memory, this.address + 8 + index * motorSizeOf(this.onGetType())) as InstanceType<T>;
    }

    resize(newSize: number): void {
        const lengthBefore = this.length;
        if(lengthBefore < newSize) {
            let newLength = Math.max(lengthBefore * 2, 1);
            while(newLength < newSize) {
                newLength *= 2;
            }
            const newAddress = this.memory.allocate(newLength * motorSizeOf(this.onGetType()) + 8);
            this.memory.memory.set(this.memory.memory.subarray(this.address + 8, this.address + 8 + this.count * motorSizeOf(this.onGetType())), newAddress);
            this.memory.dataView.setUint32(newAddress, newLength, true);
            this._address = newAddress;
        }
        this.memory.dataView.setUint32(this.address + 4, newSize, true);
    }

    protected onGetData(): InstanceType<T>['jsVal'][] {
        return Array.from({length: this.count}, (_, i) => this.at(i).jsVal);
    }

    protected onSetData(data: InstanceType<T>['jsVal'][]): void {
        this.resize(data.length);
        data.forEach((val, i) => this.at(i).jsVal = val);
    }

    free(): void {
        this.memory.free(this.address, this.length);
    }
}

export function defineMotorList<T extends new () => MotorInstance<any>>(type: T): new (
    def?: InstanceType<T>['jsVal'][],
    memory?: MotorMemory,
    address?: number
) => MotorList<T> {
    return class extends MotorList<T> {
        static readonly size = 8;
        onGetType(): T {
            return type;
        }
    }
}
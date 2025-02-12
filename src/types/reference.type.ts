import { MotorInstance } from "../instance";
import { MotorMemory } from "../memory";
import { MotorPointer } from "./pointer.type";

export abstract class MotorReference<RefType, PointerType extends MotorInstance<any>> extends MotorPointer<PointerType> {
    abstract delete(): void;
    abstract get rawRef(): RefType;
    abstract set rawRef(value: RefType);
    constructor(
        defaultValue?: RefType | MotorReference<RefType, PointerType>,
        memory?: MotorMemory,
        address?: number,
    ){
        super(defaultValue instanceof MotorReference? defaultValue : 0, memory, address);
    }
}
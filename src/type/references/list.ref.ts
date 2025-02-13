import { MotorInstance } from "../../instance";

export abstract class MotorList<T extends MotorInstance<T>> extends MotorInstance<(T extends MotorInstance<infer U> ? U : never)[]> {

}
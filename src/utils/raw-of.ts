import { MotorInstance } from "../instance";

export type MotorRawOf<T extends MotorInstance<any>> = T extends MotorInstance<infer U> ? U : any;
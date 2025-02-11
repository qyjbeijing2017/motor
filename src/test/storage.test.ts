import { motorDefineArray } from "../types/array.type";
import { MotorDouble } from "../types/double.type";
import { MotorString } from "../types/string.type";
import { motorDefineStruct } from "../types/struct.type";

const Vec3 = motorDefineStruct({
    x: MotorDouble,
    y: MotorDouble,
    z: MotorDouble,
});

const Gate = motorDefineStruct({
    name: MotorString,
    position: Vec3,
});

const Star = motorDefineStruct({
    name: MotorString,
    gates: motorDefineArray(Gate, 10),
})
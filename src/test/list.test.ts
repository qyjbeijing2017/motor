import { MotorFloat } from "../types/float.type";
import { MotorList } from "../types/references/list.ref";

const list = MotorList.newList(MotorFloat, {
    defaultValue: [1, 2, 3, 4, 5]
});
list.pushBack(6);
console.log(list.length)
console.log(list.toString());
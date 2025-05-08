import { QzaInstance } from "../../instance";

export abstract class QzaNumber extends QzaInstance<number> {
    equal(other: QzaInstance<number>): boolean {
        return this.js === other.js;
    }
}
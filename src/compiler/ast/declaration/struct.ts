import { AstType } from "./type";

export class AstStruct extends AstType {
    get size(): number {
        let size = 0;
        for (const key in this.member) {
            if (this.member[key] instanceof AstType) {
                size += this.member[key].size;
            }
        }
        return size;
    }

    constructor(
        readonly identifier: string,
    ) {
        super();
    }
}

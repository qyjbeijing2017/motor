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

    toObject(): any {
        return {
            astType: 'struct',
            identifier: this.identifier,
            member: Object.keys(this.member).reduce((acc, key) => {
                acc[key] = this.member[key].toObject();
                return acc;
            }, {} as { [key: string]: any; }),
        }
    }
}

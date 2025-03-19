import { AstExpression } from "./expression";
import { AstType } from "./declaration/type";
import { AstFunction } from "./declaration/function";

export class AstCall extends AstExpression {
    readonly type: AstType;
    constructor(
        readonly fn: AstFunction | AstType,
        readonly args: AstExpression[] = [],
    ) {
        super();
        if(fn instanceof AstFunction) {
            this.type = fn.type;
        } else {
            this.type = fn;
        }
    }

    toJson(space?: string | number): string {
        return JSON.stringify({
            fn: this.fn.toJson(),
            args: this.args.map(arg => arg.toJson()),
        }, null, space);
    }
}
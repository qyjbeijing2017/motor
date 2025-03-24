import { IAstBlock } from "../block.interface";
import { AstCallable, isAstCallable } from "../type/callable";
import { AstExpression } from "./expression";

export class AstCall extends AstExpression {
    get type() {
        return (this.identifier.type as AstCallable).returnType;
    }
    constructor(
        readonly identifier: AstExpression,
        readonly args: AstExpression[] = [],
        parent?: IAstBlock,
    ) {
        super(parent);
        if (!isAstCallable(identifier.type)) {
            throw new Error(`Cannot call non-callable type ${identifier.type}`);
        }
        const callType = identifier.type as AstCallable;

        if (callType.params) {
            for (let i = 0; i < callType.params.length; i++) {
                const paramType = callType.params[i];
                const argType = args[i].type;
                if (paramType !== argType) {
                    throw new Error(`Argument ${i} of type ${argType} does not match expected type ${paramType}`);
                }
            }
        } else {
            args.length = 0;
        }
    }
}
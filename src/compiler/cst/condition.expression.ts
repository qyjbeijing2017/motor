import { CstNode } from "chevrotain"
import { CstOrExpression } from "./or.expression"

export interface CstConditionExpression extends CstNode {
    name: "conditional"
    children: {
        test: [CstOrExpression]
        true: [CstConditionExpression]
        false?: [CstConditionExpression]
    }
}
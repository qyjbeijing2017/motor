import { AstConst } from "../ast/const.expression";
import { AstExpression } from "../ast/expression.statement";
import { AstTransform } from "../ast/transform.expression";
import { AstType } from "../ast/type";
import { AstVariable } from "../ast/variable.expression";

export type MotorTransformer = (target: AstType, origin: AstExpression) => AstVariable | AstConst | AstTransform
const motorTransformers = new Map<string, MotorTransformer>();

export function typeToTag(type: AstType): string {
    if(type.isList) {
        if(type.count) {
            return `Array<${type.typeName}>[${type.count}]`;
        } else {
            return `List<${type.typeName}>`;
        }
    } else {
        return type.typeName;
    }
}


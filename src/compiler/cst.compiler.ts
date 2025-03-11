export interface MotorCST {
    name: string;
}

export type MotorAssignOperation = "=" | "+=" | "-=" | "*=" | "/=" | "%=";

export type MotorBinaryOperator = "+" | "-" | "*" | "/" | "%" | "==" | "!=" | "<" | ">" | "<=" | ">=" | "&&" | "||" | "&" | "|" | "^" | "<<" | ">>" | ">>>" | "===" | "!==";

export type MotorUnaryOperator = "!" | "~" | "+" | "-" | "++" | "--";


export interface MotorCSTConst extends MotorCST {
    name: "const";
    type: string;
    value: string;
}

export interface MotorCSTIdentifier extends MotorCST {
    name: "identifier";
    identifier: string;
}

export interface MotorCSTIndexExpression extends MotorCST {
    name: "indexExpression";
    index: MotorCST;
}

export interface MotorCSTCallExpression extends MotorCST {
    name: "callExpression";
    identifier: string;
    arguments: MotorCST[];
}

export interface MotorCSTGetExpression extends MotorCST {
    name: "getExpression";
    identifier: string;
}

export interface MotorCSTPostfixExpression extends MotorCST {
    name: "postfixExpression";
    expression: MotorCST;
    operator: MotorCST;
}

export interface MotorCSTUnaryExpression extends MotorCST {
    name: "unaryExpression";
    operator: string;
    expression: MotorCST;
}

export interface MotorCSTBinaryExpression extends MotorCST {
    name: "binaryExpression";
    left: MotorCST;
    operator: MotorBinaryOperator;
    right: MotorCST;
}

export interface MotorCSTConditionalExpression extends MotorCST {
    name: "conditionalExpression";
    condition: MotorCST;
    ifTrue: MotorCST;
    ifFalse: MotorCST;
}

export interface MotorCSTAssignExpression extends MotorCST {
    name: "assignExpression";
    identifier: string;
    type?: string;
    optional?: MotorAssignOperation;
    expression: MotorCST;
}

export interface MotorCSTBlockStatement extends MotorCST {
    name: "blockStatement";
    body: MotorCST[];
}

export interface MotorCSTWhileStatement extends MotorCST {
    name: "whileStatement";
    condition: MotorCST;
    body: MotorCST[];
}

export interface MotorCSTForStatement extends MotorCST {
    name: "forStatement";
    identifier: string;
    condition: MotorCST;
    body: MotorCST[];
}

export interface MotorCSTIfStatement extends MotorCST {
    name: "ifStatement";
    condition: MotorCST;
    ifTrue: MotorCST[];
    ifFalse?: MotorCST[];
}

export interface MotorCSTReturnStatement extends MotorCST {
    name: "returnStatement";
    expression: MotorCST;
}

export interface MotorCSTContinueStatement extends MotorCST {
    name: "continueStatement";
}

export interface MotorCSTBreakStatement extends MotorCST {
    name: "breakStatement";
}

export interface MotorCSTFunctionDeclaration extends MotorCST {
    name: "functionDeclaration";
    identifier: string;
    parameters: {
        identifier: string;
        type?: string;
        defaultValue?: MotorCST;
    }[];
    body: MotorCST[];
    returnType?: string;
}

export interface MotorCSTTryStatement extends MotorCST {
    name: "tryStatement";
    body: MotorCST[];
    catch?: {
        identifier: string;
        body: MotorCST[];
    };
    finally?: MotorCST[];
}

export interface MotorCSTEnumDeclaration extends MotorCST {
    name: "enumDeclaration";
    type?: string;
    enums: {
        identifier: string;
        value: MotorCST;
    }[];
}

export interface MotorCSTStructDeclaration extends MotorCST {
    name: "enumDeclaration";
    type?: string;
    members: {
        identifier: string;
        type?: string;
        defaultValue?: MotorCST;
    }[];
}

export interface MotorCSTBlock extends MotorCST {
    name: "block";
    lines: MotorCST[];
}
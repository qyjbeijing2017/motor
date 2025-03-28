export enum MotorOperator {
    PUSH,
    POP,

    LOAD,
    STORE,
    
    ALLOC,
    FREE,

    ADD,
    SUB,
    MUL,
    DIV,
    MOD,

    AND,
    OR,
    XOR,
    NOT,
    SHL,
    SHR,

    EQ,
    NE,
    LT,
    LE,
    GT,
    GE,

    CONVERT,

    CALL,
    RET,

    JUM,
    JUM_IF,
}

export enum Type {
    NULL,
    F64,
    I64,
    U64,
    F32,
    I32,
    U32,
    F16,
    I16,
    U16,
    F8,
    I8,
    U8,
}

export interface MotorILInstruction {
    operator: MotorOperator;
    type?: Type;
    value?: number;
}

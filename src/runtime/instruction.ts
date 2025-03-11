export enum MotorInstruction {
    PUSH,
    PUSH_VAR,
    POP_VAR,
    DUP,
    SWAP,
    DROP,

    ADD,
    SUB,
    MUL,
    DIV,
    MOD,

    EQ,
    NEQ,
    GT,
    LT,
    GTE,
    LTE,
    AND,
    OR,
    XOR,
    NOT,

    JMP,
    JMP_IF,
    JMP_IF_NOT,

    CALL,
    RET,
    ENTER,
    LEAVE,
}

export enum MotorInstructionType {
    INT8,
    INT16,
    INT32,
    INT64,
    FLOAT8,
    FLOAT16,
    FLOAT32,
    FLOAT64,
    UINT8,
    UINT16,
    UINT32,
    UINT64,
}
export enum OperatorCode {
    PUSH = 0,
    POP = 1,

    LOAD = 2,
    STORE = 3,

    CALL = 4,
    RET = 5,

    JUMP = 6,
    JUMP_IF_ZERO = 7,

    ADD = 10,
    SUB = 11,
    MUL = 12,
    DIV = 13,
    MOD = 14,

    OPERATOR_CODE = 0xFF,
}
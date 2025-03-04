export enum MotorInstruction {
    PUSH_FLOAT = 0,
    PUSH_INT = 1,
    PUSH_BOOL = 2,
    PUSH_CHAR = 3,
    
    PUSH_FLOAT_IMM = 20,
    PUSH_INT_IMM = 21,
    PUSH_BOOL_IMM = 22,
    PUSH_CHAR_IMM = 23,

    POP_FLOAT = 40,
    POP_INT = 41,
    POP_BOOL = 42,
    POP_CHAR = 43,

    ADD_FLOAT = 60,
    ADD_INT = 61,

    SUB_FLOAT = 80, 
    SUB_INT = 81,

    MUL_FLOAT = 100,
    MUL_INT = 101,

    DIV_FLOAT = 120,
    DIV_INT = 121,

    MOD_INT = 140,

    EQUAL_FLOAT = 160,
    EQUAL_INT = 161,
    EQUAL_BOOL = 162,
    EQUAL_CHAR = 163,

    NOT_EQUAL_FLOAT = 180,
    NOT_EQUAL_INT = 181,
    NOT_EQUAL_BOOL = 182,
    NOT_EQUAL_CHAR = 183,

    LESS_FLOAT = 200,
    LESS_INT = 201,

    LESS_EQUAL_FLOAT = 220,
    LESS_EQUAL_INT = 221,


    AND = 240,
    OR = 241,
    NOT = 242,

    JUM = 500,
    JUM_IF_TRUE = 501,
    JUM_IF_FALSE = 502,
}
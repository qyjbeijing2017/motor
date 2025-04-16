export enum Operator {
    push,
    pop,

    store,
    load,

    call,
    return,

    jump,
    if_not_zero,

    add,
    sub,
    mul,
    div,
    mod,
    and,
    or,
    xor,
    not,
    equal,
    less,
    greater,
    less_equal,
    greater_equal,
    bit_and,
    bit_or,
    bit_xor,
    bit_not,
    bit_shift_left,
    bit_shift_right,

    operator = 0x0F,
}
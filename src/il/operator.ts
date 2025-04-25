export enum MotorOperator {
    push,
    pop,

    store,
    load,

    local,
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
    not_equal,
    less,
    greater,
    less_equal,
    greater_equal,

    // bit_and,
    // bit_or,
    // bit_xor,
    // bit_not,
    // bit_shift_left,
    // bit_shift_right,

    operator_mask = 0xFF,
}
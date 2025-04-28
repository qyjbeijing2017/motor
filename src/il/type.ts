export enum MotorILType {
    VOID = 0,
    U8 = 0x0100,
    U16 = 0x0200,
    U32 = 0x0300,
    U64 = 0x0400,
    I8 = 0x0500,
    I16 = 0x0600,
    I32 = 0x0700,
    I64 = 0x0800,
    F8 = 0x0900,
    F16 = 0x0A00,
    F32 = 0x0B00,
    F64 = 0x0C00,

    mask = 0xFF00,
}

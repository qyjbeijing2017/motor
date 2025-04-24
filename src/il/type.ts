export enum MotorILType {
    U8 = 0,
    U16 = 0x100,
    U32 = 0x200,
    U64 = 0x300,
    I8 = 0x400,
    I16 = 0x500,
    I32 = 0x600,
    I64 = 0x700,
    F8 = 0x800,
    F16 = 0x900,
    F32 = 0xA00,
    F64 = 0xB00,

    type_mask = 0xFF00,
}
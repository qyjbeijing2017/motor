import {
    MotorILType,
    MotorInstruction,
    MotorOperator,
    MotorPushF8
} from '../../src'

test('read', () => {
    const instructionOnTest = new MotorPushF8(3)
    expect(instructionOnTest.code).toBe(MotorOperator.push | MotorILType.F8)
    expect(instructionOnTest.ILType).toBe(MotorILType.F8)
    expect(instructionOnTest.operator).toBe(MotorOperator.push)
    expect(instructionOnTest.js).toBe(3)
})

test('write', () => {
    const instructionOnTest = new MotorPushF8(3)
    instructionOnTest.js = 4
    expect(instructionOnTest.js).toBe(4)
})

test('readFromInstruction', () => {
    const instructionOnTest = new MotorPushF8(3)
    const instruction = MotorInstruction.readInstruction(instructionOnTest.address)
    expect(instruction).toBeInstanceOf(MotorPushF8)
    expect(instruction.js).toBe(3)
})
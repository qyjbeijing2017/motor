import {
    QzaILType,
    QzaInstruction,
    QzaOperator,
    QzaPushF8
} from '../../src'

test('read', () => {
    const instructionOnTest = new QzaPushF8(3)
    expect(instructionOnTest.code).toBe(QzaOperator.push | QzaILType.F8)
    expect(instructionOnTest.ILType).toBe(QzaILType.F8)
    expect(instructionOnTest.operator).toBe(QzaOperator.push)
    expect(instructionOnTest.js).toBe(3)
})

test('write', () => {
    const instructionOnTest = new QzaPushF8(3)
    instructionOnTest.js = 4
    expect(instructionOnTest.js).toBe(4)
})

test('readFromInstruction', () => {
    const instructionOnTest = new QzaPushF8(3)
    const instruction = QzaInstruction.readInstruction(instructionOnTest.address)
    expect(instruction).toBeInstanceOf(QzaPushF8)
    expect(instruction.js).toBe(3)
})
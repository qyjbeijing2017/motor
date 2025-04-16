import { MotorMemory } from "../src";
describe("memory", () => {
    test('default', () => {
        const memoryOnTest = new MotorMemory()
        expect(memoryOnTest.size).toBe(4096)
    })
    test('custom size', () => {
        const memoryOnTest = new MotorMemory({ size: 8192 })
        expect(memoryOnTest.size).toBe(8192)
    })
    test('custom buffer', () => {
        const memoryOnTest = new MotorMemory({
            size: 8192,
            createBuffer: (size: number) => new Uint8Array(size).fill(1)
        })
        expect(memoryOnTest.size).toBe(8192)
        expect(memoryOnTest.buffer[0]).toBe(1)
        expect(memoryOnTest.buffer[1]).toBe(1)
    })
    test('allocate', () => {
        const memoryOnTest = new MotorMemory()
        const address = memoryOnTest.allocate(1024)
        expect(address).toBe(0)
        expect(memoryOnTest.size).toBe(4096)
        expect(memoryOnTest.buffer.length).toBe(4096)
    })
    test('free', ()=> {
        const memoryOnTest = new MotorMemory()
        const address = memoryOnTest.allocate(1024)
        const address2 = memoryOnTest.allocate(1024)
        memoryOnTest.free(address, 1024)
        const address3 = memoryOnTest.allocate(512)
        const address4 = memoryOnTest.allocate(513)
        expect(address).toBe(0)
        expect(address2).toBe(1024)
        expect(address3).toBe(0)
        expect(address4).toBe(2048)
    })
    test('merge empty blocks', () => {
        const memoryOnTest = new MotorMemory()
        const address1 = memoryOnTest.allocate(8)
        const address2 = memoryOnTest.allocate(8)
        memoryOnTest.allocate(8)
        memoryOnTest.free(address1, 8)
        memoryOnTest.free(address2, 8)
        const address4 = memoryOnTest.allocate(10)
        expect(address4).toBe(address1)
    })
    test('auto expansion', () => {
        const memoryOnTest = new MotorMemory({ size: 8 })
        memoryOnTest.allocate(8)
        memoryOnTest.allocate(4)
        expect(memoryOnTest.size).toBe(16)
    })
    test('serialize', () => {
        const memoryOnTest = new MotorMemory({ size: 16 })
        const size1 = 4;
        const size2 = 4;
        const size3 = 6;
        const address1 = memoryOnTest.allocate(size1)
        const address2 = memoryOnTest.allocate(size2)
        const address3 = memoryOnTest.allocate(size3)
        const value1 = 1234
        const value2 = 5678
        const value3 = 0
        memoryOnTest.viewer.setUint32(address1, value1, true)
        memoryOnTest.viewer.setUint32(address2, value2, true)
        memoryOnTest.viewer.setUint32(address3, value3, true)
        memoryOnTest.free(address2, size2)
        const serialized = memoryOnTest.serialize()
        const viewer = new DataView(serialized.buffer)
        expect(serialized.byteLength).toBe(26) // 4 bytes for address + 4 bytes for size + 4 bytes for value + 4 bytes for address + 4 bytes for size + 6 bytes for value
        expect(viewer.getUint32(0, true)).toBe(address1)
        expect(viewer.getUint32(4, true)).toBe(size1)
        expect(viewer.getUint32(8, true)).toBe(value1)
        expect(viewer.getUint32(12, true)).toBe(address3)
        expect(viewer.getUint32(16, true)).toBe(size3)
        expect(viewer.getUint32(20, true)).toBe(value3)
    })
    test('clear', () => {
        const memoryOnTest = new MotorMemory({ size: 16 })
        const size1 = 4;
        const size2 = 4;
        memoryOnTest.allocate(size1)
        memoryOnTest.allocate(size2)
        memoryOnTest.clear()
        const address = memoryOnTest.allocate(size1)
        expect(address).toBe(0)
    })
    test('deserialize', () => {
        const memoryOnTest = new MotorMemory({ size: 16 })
        const size1 = 4;
        const size2 = 4;
        const size3 = 6;
        const address1 = memoryOnTest.allocate(size1)
        const address2 = memoryOnTest.allocate(size2)
        const address3 = memoryOnTest.allocate(size3)
        const value1 = 1234
        const value2 = 5678
        const value3 = 0
        memoryOnTest.viewer.setUint32(address1, value1, true)
        memoryOnTest.viewer.setUint32(address2, value2, true)
        memoryOnTest.viewer.setUint32(address3, value3, true)
        memoryOnTest.free(address2, size2)
        const serialized = memoryOnTest.serialize()
        const newMemory = new MotorMemory({ size: 16 })
        newMemory.deserialize(serialized)
        expect(newMemory.viewer.getUint32(address1, true)).toBe(value1)
        expect(newMemory.viewer.getUint32(address3, true)).toBe(value3)
    })
})
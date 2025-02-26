import { MotorMemory, MotorVersion } from '../src';
describe('Memory', () => {
    let memoryOnTest = new MotorMemory({ size: 1024 });
    test('Create Memory', () => {
        memoryOnTest.clean();
        // default version is V1
        expect(memoryOnTest.version).toBe(MotorVersion.V1);
        // default memory size is 1 KB
        expect(memoryOnTest.memory.length).toBe(1024);
        // default empty block is the whole memory
        expect(memoryOnTest.emptySize).toBe(1024);
        // default used size is 0
        expect(memoryOnTest.usedSize).toBe(0);
    });

    describe('Expand Memory', () => {

        test('Default Expand', () => {
            // default expand size is 2 times of current size
            const memorySizeOnTest = memoryOnTest.memory.length;
            memoryOnTest.expand();
            expect(memoryOnTest.emptySize).toBe(memorySizeOnTest * 2);
        });

        test('Smaller Expand', () => {
            // expand to a smaller size will not change the memory size
            const memorySizeOnTest = memoryOnTest.memory.length;
            memoryOnTest.expand(memorySizeOnTest / 2);
            expect(memoryOnTest.emptySize).toBe(memorySizeOnTest);
        });

        test('Larger Expand', () => {
            // expand to a larger size will change the memory size
            const memorySizeOnTest = memoryOnTest.memory.length;
            memoryOnTest.expand(memorySizeOnTest * 1.8);
            expect(memoryOnTest.emptySize).toBe(Math.floor(memorySizeOnTest * 1.8));
        });

    });


    test('Allocate Memory', () => {
        // clean the memory
        memoryOnTest.resize(1024);
        // allocate a block of 512 bytes
        const address = memoryOnTest.allocate(512);
        expect(memoryOnTest.emptySize).toBe(memoryOnTest.memory.length - 512);
        expect(memoryOnTest.usedSize).toBe(512);
        expect(address).toBe(0); // the address of the first block is 0

        // allocate a block of 1024 bytes
        const address2 = memoryOnTest.allocate(1024);
        expect(memoryOnTest.emptySize).toBe(memoryOnTest.memory.length - 512 - 1024);
        expect(memoryOnTest.usedSize).toBe(512 + 1024);
        expect(address2).toBe(512); // the address of the second block is 512
        expect(memoryOnTest.memory.length).toBe(2048); // the memory size is expanded to 2 KB, it will expand to Math.max(currentSize * 2, neededSize + currentSize)
    });

    // test('Free Memory', () => {
    //     // clean the memory
    //     memoryOnTest.clean();
    //     expect(memoryOnTest.emptySize).toBe(memoryOnTest.memory.length);
    //     expect(memoryOnTest.usedSize).toBe(0);
    //     // allocate a block of 512 bytes
    //     memoryOnTest.allocate(512);
    //     expect(memoryOnTest.emptySize).toBe(memoryOnTest.memory.length - 512);
    //     expect(memoryOnTest.usedSize).toBe(512);
    //     // free the block
    //     memoryOnTest.free(0, 512);
    //     expect(memoryOnTest.emptySize).toBe(memoryOnTest.memory.length);
    //     expect(memoryOnTest.usedSize).toBe(0);
    //     // allocate a block of 1024 bytes
    //     memoryOnTest.allocate(1024);
    //     expect(memoryOnTest.emptySize).toBe(memoryOnTest.memory.length - 1024);
    //     expect(memoryOnTest.usedSize).toBe(1024);
    //     // free the block
    //     memoryOnTest.free(0, 1024);
    //     expect(memoryOnTest.emptySize).toBe(memoryOnTest.memory.length);
    //     expect(memoryOnTest.usedSize).toBe(0);
    // });
});
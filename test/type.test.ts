import { MotorBool, MotorFloat32, MotorInt32, MotorMemory } from '../src';
import { motorSingleton } from '../src/utils/singleton';
describe('Type', () => {
    describe('float32', () => {
        test('size', () => {
            expect(MotorFloat32.size).toBe(4);
        });
        test('init', () => {
            const floatOnTest = new MotorFloat32();
            const floatOnTest2 = new MotorFloat32(1.1);
            expect(floatOnTest.jsVal).toBeCloseTo(0);
            expect(floatOnTest2.jsVal).toBeCloseTo(1.1);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(floatOnTest2.address)).toBeCloseTo(1.1);
        })
        test('set', () => {
            const floatOnTest = new MotorFloat32();
            floatOnTest.jsVal = 1.1;
            expect(floatOnTest.jsVal).toBeCloseTo(1.1);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(floatOnTest.address)).toBeCloseTo(1.1);
        });
    });

    describe('int32', () => {
        test('size', () => {
            expect(MotorInt32.size).toBe(4);
        });
        test('init', () => {
            const intOnTest = new MotorInt32();
            const intOnTest2 = new MotorInt32(1);
            expect(intOnTest.jsVal).toBe(0);
            expect(intOnTest2.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(intOnTest2.address)).toBe(1);
        })
        test('set', () => {
            const intOnTest = new MotorInt32();
            intOnTest.jsVal = 1;
            expect(intOnTest.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(intOnTest.address)).toBe(1);
        });
        test('set float', () => {
            const intOnTest = new MotorInt32();
            intOnTest.jsVal = 1.1;
            expect(intOnTest.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(intOnTest.address)).toBe(1);
            intOnTest.jsVal = 1.9;
            expect(intOnTest.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(intOnTest.address)).toBe(1);
        });
    });

    describe('bool', () => {
        test('size', () => {
            expect(MotorBool.size).toBe(1);
        });
        test('init', () => {
            const boolOnTest = new MotorBool();
            const boolOnTest2 = new MotorBool(true);
            expect(boolOnTest.jsVal).toBe(false);
            expect(boolOnTest2.jsVal).toBe(true);
            expect(motorSingleton(MotorMemory).dataView.getUint8(boolOnTest2.address)).toBe(1);
        })
        test('set', () => {
            const boolOnTest = new MotorBool();
            boolOnTest.jsVal = true;
            expect(boolOnTest.jsVal).toBe(true);
            expect(motorSingleton(MotorMemory).dataView.getUint8(boolOnTest.address)).toBe(1);
        });
    });
});
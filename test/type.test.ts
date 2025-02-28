import { 
    MotorBool,
    MotorFloat32, 
    MotorInt32, 
    MotorMemory, 
    MotorChar, 
    defineMotorArray, 
    motorSizeOf,
    motorDefineStruct
} from '../src';
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

    describe('char', () => {
        test('size', () => {
            expect(MotorChar.size).toBe(1);
        });
        test('init', () => {
            const charOnTest = new MotorChar();
            const charOnTest2 = new MotorChar('a');
            expect(charOnTest.jsVal).toBe('\x00'); // String.fromCharCode(0)
            expect(charOnTest2.jsVal).toBe('a');
            expect(motorSingleton(MotorMemory).dataView.getUint8(charOnTest2.address)).toBe(97);
        })
        test('set', () => {
            const charOnTest = new MotorChar();
            charOnTest.jsVal = 'a';
            expect(charOnTest.jsVal).toBe('a');
            expect(motorSingleton(MotorMemory).dataView.getUint8(charOnTest.address)).toBe(97);
        });
    });

    describe('array', () => {
        const arrayOnTest = defineMotorArray(MotorFloat32, 3);
        test('size', () => {
            expect(motorSizeOf(arrayOnTest)).toBe(12);
        });
        test('init', () => {
            const array = new arrayOnTest();
            const array2 = new arrayOnTest([1.1,2.2,3.3]);
            const jsArrayOnTest = array.jsVal;
            const jsArrayOnTest2 = array2.jsVal;
            expect(jsArrayOnTest.length).toBe(3);
            expect(jsArrayOnTest[0]).toBeCloseTo(0);
            expect(jsArrayOnTest[1]).toBeCloseTo(0);
            expect(jsArrayOnTest[2]).toBeCloseTo(0);
            expect(jsArrayOnTest2.length).toBe(3);
            expect(jsArrayOnTest2[0]).toBeCloseTo(1.1);
            expect(jsArrayOnTest2[1]).toBeCloseTo(2.2);
            expect(jsArrayOnTest2[2]).toBeCloseTo(3.3);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(array.address)).toBeCloseTo(0);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(array.address+4)).toBeCloseTo(0);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(array.address+8)).toBeCloseTo(0);
        });
        test('set', () => {
            const array = new arrayOnTest();
            array.jsVal = [1.1,2.2,3.3];
            const jsArrayOnTest = array.jsVal;
            expect(jsArrayOnTest.length).toBe(3);
            expect(jsArrayOnTest[0]).toBeCloseTo(1.1);
            expect(jsArrayOnTest[1]).toBeCloseTo(2.2);
            expect(jsArrayOnTest[2]).toBeCloseTo(3.3);
        });
        test('at', () => {
            const array = new arrayOnTest([3.3,4.4,5.5]);
            expect(array.at(0) instanceof MotorFloat32).toBe(true);
            expect(array.at(0).jsVal).toBeCloseTo(3.3);
            expect(array.at(1).jsVal).toBeCloseTo(4.4);
            expect(array.at(2).jsVal).toBeCloseTo(5.5);
        });
        test('define int', () => {
            const arrayOnTest = defineMotorArray(MotorInt32, 5);
            const array = new arrayOnTest([1,2,3,4,5]);
            expect(array.at(0) instanceof MotorInt32).toBe(true);
            expect(array.at(0).jsVal).toBe(1);
            expect(array.at(1).jsVal).toBe(2);
            expect(array.at(2).jsVal).toBe(3);
            expect(array.at(3).jsVal).toBe(4);
            expect(array.at(4).jsVal).toBe(5);
        });
        test('define bool', () => {
            const arrayOnTest = defineMotorArray(MotorBool, 5);
            const array = new arrayOnTest([true,false,true,false,true]);
            expect(array.at(0) instanceof MotorBool).toBe(true);
            expect(array.at(0).jsVal).toBe(true);
            expect(array.at(1).jsVal).toBe(false);
            expect(array.at(2).jsVal).toBe(true);
            expect(array.at(3).jsVal).toBe(false);
            expect(array.at(4).jsVal).toBe(true);
        });
        test('define char', () => {
            const arrayOnTest = defineMotorArray(MotorChar, 5);
            const array = new arrayOnTest(['a','b','c','d','e']);
            expect(array.at(0) instanceof MotorChar).toBe(true);
            expect(array.at(0).jsVal).toBe('a');
            expect(array.at(1).jsVal).toBe('b');
            expect(array.at(2).jsVal).toBe('c');
            expect(array.at(3).jsVal).toBe('d');
            expect(array.at(4).jsVal).toBe('e');
        });
        test('define array', () => {
            const arrayOnTest = defineMotorArray(defineMotorArray(MotorFloat32, 3), 2);
            expect(motorSizeOf(arrayOnTest)).toBe(24);
            const array = new arrayOnTest([[1.1,2.2,3.3],[4.4,5.5,6.6]]);
            const jsArrayOnTest = array.jsVal;
            expect(jsArrayOnTest.length).toBe(2);
            expect(jsArrayOnTest[0]!.length).toBe(3);
            expect(jsArrayOnTest[1]!.length).toBe(3);
            console.log(jsArrayOnTest);
        });
        test('define struct array', () => {
            const structOnTest = motorDefineStruct({
                f: MotorFloat32,
                i: MotorInt32,
                b: MotorBool,
                c: MotorChar,
                a: defineMotorArray(MotorFloat32, 3)
            });
            const structArrayOnTest = defineMotorArray(structOnTest, 2);
            const structArray = new structArrayOnTest([{
                f: 1.1,
                i: 2,
                b: true,
                c: 'a',
                a: [1.1,2.2,3.3]
            },{
                f: 4.4,
                i: 5,
                b: false,
                c: 'b',
                a: [4.4,5.5,6.6]
            }]);
            const jsStructArray = structArray.jsVal;
            expect(jsStructArray.length).toBe(2);
            expect(jsStructArray[0].f).toBeCloseTo(1.1);
            expect(jsStructArray[0].i).toBe(2);
            expect(jsStructArray[0].b).toBe(true);
            expect(jsStructArray[0].c).toBe('a');
            expect(jsStructArray[0].a.length).toBe(3);
            expect(jsStructArray[0].a[0]).toBeCloseTo(1.1);
            expect(jsStructArray[0].a[1]).toBeCloseTo(2.2);
            expect(jsStructArray[0].a[2]).toBeCloseTo(3.3);
            expect(jsStructArray[1].f).toBeCloseTo(4.4);
            expect(jsStructArray[1].i).toBe(5);
            expect(jsStructArray[1].b).toBe(false);
            expect(jsStructArray[1].c).toBe('b');
            expect(jsStructArray[1].a.length).toBe(3);
            expect(jsStructArray[1].a[0]).toBeCloseTo(4.4);
            expect(jsStructArray[1].a[1]).toBeCloseTo(5.5);
            expect(jsStructArray[1].a[2]).toBeCloseTo(6.6);
        });
    });

    describe('struct', () => {
        const structOnTest = motorDefineStruct({
            f: MotorFloat32,
            i: MotorInt32,
            b: MotorBool,
            c: MotorChar,
            a: defineMotorArray(MotorFloat32, 3)
        });
        test('size', () => {
            expect(motorSizeOf(structOnTest)).toBe(22);
        });
        test('init', () => {
            const struct = new structOnTest();
            const struct2 = new structOnTest({
                f: 1.1,
                i: 2,
                b: true,
                c: 'a',
                a: [1.1,2.2,3.3]
            });
            const jsStructOnTest = struct.jsVal;
            const jsStructOnTest2 = struct2.jsVal;
            expect(jsStructOnTest.f).toBeCloseTo(0);
            expect(jsStructOnTest.i).toBe(0);
            expect(jsStructOnTest.b).toBe(false);
            expect(jsStructOnTest.c).toBe('\x00');
            expect(jsStructOnTest.a.length).toBe(3);
            expect(jsStructOnTest.a[0]).toBeCloseTo(0);
            expect(jsStructOnTest.a[1]).toBeCloseTo(0);
            expect(jsStructOnTest.a[2]).toBeCloseTo(0);
            expect(jsStructOnTest2.f).toBeCloseTo(1.1);
            expect(jsStructOnTest2.i).toBe(2);
            expect(jsStructOnTest2.b).toBe(true);
            expect(jsStructOnTest2.c).toBe('a');
            expect(jsStructOnTest2.a.length).toBe(3);
            expect(jsStructOnTest2.a[0]).toBeCloseTo(1.1);
            expect(jsStructOnTest2.a[1]).toBeCloseTo(2.2);
            expect(jsStructOnTest2.a[2]).toBeCloseTo(3.3);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(struct2.address)).toBeCloseTo(1.1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(struct2.address+4)).toBe(2);
            expect(motorSingleton(MotorMemory).dataView.getUint8(struct2.address+8)).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint8(struct2.address+9)).toBe(97);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(struct2.address+10)).toBeCloseTo(1.1);
        });
        test('set', () => {
            const struct = new structOnTest();
            struct.jsVal = {
                f: 1.1,
                i: 2,
                b: true,
                c: 'a',
                a: [1.1,2.2,3.3]
            };
            const jsStructOnTest = struct.jsVal;
            expect(jsStructOnTest.f).toBeCloseTo(1.1);
            expect(jsStructOnTest.i).toBe(2);
            expect(jsStructOnTest.b).toBe(true);
            expect(jsStructOnTest.c).toBe('a');
            expect(jsStructOnTest.a.length).toBe(3);
            expect(jsStructOnTest.a[0]).toBeCloseTo(1.1);
            expect(jsStructOnTest.a[1]).toBeCloseTo(2.2);
            expect(jsStructOnTest.a[2]).toBeCloseTo(3.3);
        });
        test('get', () => {
            const struct = new structOnTest({
                f: 1.1,
                i: 2,
                b: true,
                c: 'a',
                a: [1.1,2.2,3.3]
            });
            expect(struct.get('f') instanceof MotorFloat32).toBe(true);
            expect(struct.get('i') instanceof MotorInt32).toBe(true);
            expect(struct.get('b') instanceof MotorBool).toBe(true);
            expect(struct.get('c') instanceof MotorChar).toBe(true);
            expect(struct.get('f').jsVal).toBeCloseTo(1.1);
            expect(struct.get('i').jsVal).toBe(2);
            expect(struct.get('b').jsVal).toBe(true);
            expect(struct.get('c').jsVal).toBe('a');
            expect(struct.get('a').jsVal.length).toBe(3);
            expect(struct.get('a').jsVal[0]).toBeCloseTo(1.1);
            expect(struct.get('a').jsVal[1]).toBeCloseTo(2.2);
            expect(struct.get('a').jsVal[2]).toBeCloseTo(3.3);
        });
        test('struct in struct', () => {
            const structOnTest = motorDefineStruct({
                f: MotorFloat32,
                s: motorDefineStruct({
                    i: MotorInt32,
                    b: MotorBool
                })
            });
            const struct = new structOnTest({
                f: 1.1,
                s: {
                    i: 2,
                    b: true
                }
            });
            const jsStruct = struct.jsVal;
            expect(jsStruct.f).toBeCloseTo(1.1);
            expect(jsStruct.s.i).toBe(2);
            expect(jsStruct.s.b).toBe(true);
        });
    });
});

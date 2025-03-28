import { 
    MotorBool,
    MotorFloat32,
    MotorFloat64,
    MotorFloat16,
    MotorFloat8,
    MotorInt32, 
    MotorInt64,
    MotorInt16,
    MotorInt8,
    MotorUint,
    MotorUint64,
    MotorUint16,
    MotorUint8,
    MotorMemory, 
    MotorChar, 
    defineMotorArray, 
    motorSizeOf,
    motorDefineStruct,
    defineMotorPointer,
    MotorNull,
    MotorString,
    defineMotorList
} from '../src';
import { motorSingleton } from '../src/utils/singleton';
import { getFloat16 } from '@petamoriken/float16';
import { getFloat8 } from '../src/utils/float8';

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
            expect(motorSingleton(MotorMemory).dataView.getFloat32(floatOnTest2.address, true)).toBeCloseTo(1.1);
        })
        test('set', () => {
            const floatOnTest = new MotorFloat32();
            floatOnTest.jsVal = 1.1;
            expect(floatOnTest.jsVal).toBeCloseTo(1.1);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(floatOnTest.address, true)).toBeCloseTo(1.1);
        });
    });

    describe('float64', () => {
        test('size', () => {
            expect(MotorFloat64.size).toBe(8);
        });
        test('init', () => {
            const floatOnTest = new MotorFloat64();
            const floatOnTest2 = new MotorFloat64(1.1);
            expect(floatOnTest.jsVal).toBeCloseTo(0);
            expect(floatOnTest2.jsVal).toBeCloseTo(1.1);
            expect(motorSingleton(MotorMemory).dataView.getFloat64(floatOnTest2.address, true)).toBeCloseTo(1.1);
        })
        test('set', () => {
            const floatOnTest = new MotorFloat64();
            floatOnTest.jsVal = 1.1;
            expect(floatOnTest.jsVal).toBeCloseTo(1.1);
            expect(motorSingleton(MotorMemory).dataView.getFloat64(floatOnTest.address, true)).toBeCloseTo(1.1);
        });
    });

    describe('float16', () => {
        test('size', () => {
            expect(MotorFloat16.size).toBe(2);
        });
        test('init', () => {
            const floatOnTest = new MotorFloat16();
            const floatOnTest2 = new MotorFloat16(1.1);
            expect(floatOnTest.jsVal).toBeCloseTo(0);
            expect(floatOnTest2.jsVal).toBeCloseTo(1.1);
            expect(getFloat16(motorSingleton(MotorMemory).dataView,floatOnTest2.address, true)).toBeCloseTo(1.1);
        })
        test('set', () => {
            const floatOnTest = new MotorFloat16();
            floatOnTest.jsVal = 1.1;
            expect(floatOnTest.jsVal).toBeCloseTo(1.1);
            expect(getFloat16(motorSingleton(MotorMemory).dataView,floatOnTest.address, true)).toBeCloseTo(1.1);
        });
    });

    describe('float8', () => {
        test('size', () => {
            expect(MotorFloat8.size).toBe(1);
        });
        test('init', () => {
            const floatOnTest = new MotorFloat8();
            const floatOnTest2 = new MotorFloat8(1.1); // because of the precision, 1.1 will be rounded to 1.125
            expect(floatOnTest.jsVal).toBeCloseTo(0);
            expect(floatOnTest2.jsVal).toBeCloseTo(1.125);
            expect(getFloat8(motorSingleton(MotorMemory).dataView,floatOnTest2.address)).toBeCloseTo(1.125);
        })
        test('set', () => {
            const floatOnTest = new MotorFloat8();
            floatOnTest.jsVal = 1.1;
            expect(floatOnTest.jsVal).toBeCloseTo(1.125); // because of the precision, 1.1 will be rounded to 1.125
            expect(getFloat8(motorSingleton(MotorMemory).dataView,floatOnTest.address)).toBeCloseTo(1.125);
        });
    });

    describe('int32', () => {
        test('size', () => {
            expect(MotorInt32.size).toBe(4);
        });
        test('init', () => {
            const intOnTest = new MotorInt32();
            const intOnTest2 = new MotorInt32(-1);
            expect(intOnTest.jsVal).toBe(0);
            expect(intOnTest2.jsVal).toBe(-1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(intOnTest2.address, true)).toBe(-1);
        })
        test('set', () => {
            const intOnTest = new MotorInt32();
            intOnTest.jsVal = -1;
            expect(intOnTest.jsVal).toBe(-1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(intOnTest.address, true)).toBe(-1);
        });
        test('set float', () => {
            const intOnTest = new MotorInt32();
            intOnTest.jsVal = -1.1;
            expect(intOnTest.jsVal).toBe(-1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(intOnTest.address, true)).toBe(-1);
            intOnTest.jsVal = -1.9;
            expect(intOnTest.jsVal).toBe(-1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(intOnTest.address, true)).toBe(-1);
        });
    });

    describe('int64', () => {
        test('size', () => {
            expect(MotorInt64.size).toBe(8);
        });
        test('init', () => {
            const intOnTest = new MotorInt64();
            const intOnTest2 = new MotorInt64(-1n);
            expect(intOnTest.jsVal).toBe(0n);
            expect(intOnTest2.jsVal).toBe(-1n);
            expect(motorSingleton(MotorMemory).dataView.getBigInt64(intOnTest2.address, true)).toBe(-1n);
        })
        test('set', () => {
            const intOnTest = new MotorInt64();
            intOnTest.jsVal = -1n;
            expect(intOnTest.jsVal).toBe(-1n);
            expect(motorSingleton(MotorMemory).dataView.getBigInt64(intOnTest.address, true)).toBe(-1n);
        });
    });

    describe('int16', () => {
        test('size', () => {
            expect(MotorInt16.size).toBe(2);
        });
        test('init', () => {
            const intOnTest = new MotorInt16();
            const intOnTest2 = new MotorInt16(-1);
            expect(intOnTest.jsVal).toBe(0);
            expect(intOnTest2.jsVal).toBe(-1);
            expect(motorSingleton(MotorMemory).dataView.getInt16(intOnTest2.address, true)).toBe(-1);
        })
        test('set', () => {
            const intOnTest = new MotorInt16();
            intOnTest.jsVal = -1;
            expect(intOnTest.jsVal).toBe(-1);
            expect(motorSingleton(MotorMemory).dataView.getInt16(intOnTest.address, true)).toBe(-1);
        });
    });

    describe('int8', () => {
        test('size', () => {
            expect(MotorInt8.size).toBe(1);
        });
        test('init', () => {
            const intOnTest = new MotorInt8();
            const intOnTest2 = new MotorInt8(-1);
            expect(intOnTest.jsVal).toBe(0);
            expect(intOnTest2.jsVal).toBe(-1);
            expect(motorSingleton(MotorMemory).dataView.getInt8(intOnTest2.address)).toBe(-1);
        })
        test('set', () => {
            const intOnTest = new MotorInt8();
            intOnTest.jsVal = -1;
            expect(intOnTest.jsVal).toBe(-1);
            expect(motorSingleton(MotorMemory).dataView.getInt8(intOnTest.address)).toBe(-1);
        });
    });

    describe('uint32', () => {
        test('size', () => {
            expect(MotorUint.size).toBe(4);
        });
        test('init', () => {
            const uintOnTest = new MotorUint();
            const uintOnTest2 = new MotorUint(1);
            expect(uintOnTest.jsVal).toBe(0);
            expect(uintOnTest2.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint32(uintOnTest2.address, true)).toBe(1);
        })
        test('set', () => {
            const uintOnTest = new MotorUint();
            uintOnTest.jsVal = 1;
            expect(uintOnTest.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint32(uintOnTest.address, true)).toBe(1);
        });
        test('set float', () => {
            const uintOnTest = new MotorUint();
            uintOnTest.jsVal = 1.1;
            expect(uintOnTest.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint32(uintOnTest.address, true)).toBe(1);
            uintOnTest.jsVal = 1.9;
            expect(uintOnTest.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint32(uintOnTest.address, true)).toBe(1);
        });
        
    });

    describe('uint64', () => {
        test('size', () => {
            expect(MotorUint64.size).toBe(8);
        });
        test('init', () => {
            const uintOnTest = new MotorUint64();
            const uintOnTest2 = new MotorUint64(1n);
            expect(uintOnTest.jsVal).toBe(0n);
            expect(uintOnTest2.jsVal).toBe(1n);
            expect(motorSingleton(MotorMemory).dataView.getBigUint64(uintOnTest2.address, true)).toBe(1n);
        })
        test('set', () => {
            const uintOnTest = new MotorUint64();
            uintOnTest.jsVal = 1n;
            expect(uintOnTest.jsVal).toBe(1n);
            expect(motorSingleton(MotorMemory).dataView.getBigUint64(uintOnTest.address, true)).toBe(1n);
        });
    });

    describe('uint16', () => {
        test('size', () => {
            expect(MotorUint16.size).toBe(2);
        });
        test('init', () => {
            const uintOnTest = new MotorUint16();
            const uintOnTest2 = new MotorUint16(1);
            expect(uintOnTest.jsVal).toBe(0);
            expect(uintOnTest2.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint16(uintOnTest2.address, true)).toBe(1);
        })
        test('set', () => {
            const uintOnTest = new MotorUint16();
            uintOnTest.jsVal = 1;
            expect(uintOnTest.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint16(uintOnTest.address, true)).toBe(1);
        });
    });

    describe('uint8', () => {
        test('size', () => {
            expect(MotorUint8.size).toBe(1);
        });
        test('init', () => {
            const uintOnTest = new MotorUint8();
            const uintOnTest2 = new MotorUint8(1);
            expect(uintOnTest.jsVal).toBe(0);
            expect(uintOnTest2.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint8(uintOnTest2.address)).toBe(1);
        })
        test('set', () => {
            const uintOnTest = new MotorUint8();
            uintOnTest.jsVal = 1;
            expect(uintOnTest.jsVal).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint8(uintOnTest.address)).toBe(1);
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
            expect(motorSizeOf(structOnTest)).toBe(22); // 4 + 4 + 1 + 1 + 12
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
            expect(motorSingleton(MotorMemory).dataView.getFloat32(struct2.address, true)).toBeCloseTo(1.1);
            expect(motorSingleton(MotorMemory).dataView.getInt32(struct2.address+4, true)).toBe(2);
            expect(motorSingleton(MotorMemory).dataView.getUint8(struct2.address+8)).toBe(1);
            expect(motorSingleton(MotorMemory).dataView.getUint8(struct2.address+9)).toBe(97);
            expect(motorSingleton(MotorMemory).dataView.getFloat32(struct2.address+10, true)).toBeCloseTo(1.1);
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

    describe('pointer', () => {
        const pointerOnTest = defineMotorPointer(MotorFloat32);
        test('size', () => {
            expect(motorSizeOf(pointerOnTest)).toBe(4); // pointer size is 4 bytes, record the address of the value
        });
        test('init', () => {
            const pointer = new pointerOnTest();
            const valOnTest = new MotorFloat32(1.1);
            const pointer2 = new pointerOnTest(valOnTest.address);
            expect(pointer.jsVal).toBe(0);
            expect(pointer2.jsVal).toBe(valOnTest.address);
        });
        test('set', () => {
            const pointer = new pointerOnTest();
            const valOnTest = new MotorFloat32(1.1);
            pointer.jsVal = valOnTest.address;
            expect(pointer.jsVal).toBe(valOnTest.address);
        });
        test('val', () => {
            const valOnTest = new MotorFloat32(1.1);
            const pointer = new pointerOnTest(valOnTest.address);
            expect(pointer.value instanceof MotorFloat32).toBe(true);
            expect(pointer.value.jsVal).toBeCloseTo(1.1);
        });
    });

    describe('null', () => {
        test('size', () => {
            expect(MotorNull.size).toBe(0);
        });
        test('init', () => {
            const nullOnTest = new MotorNull();
            expect(nullOnTest.jsVal).toBe(null);
        });
    });

    describe('string', () => {
        test('size', () => {
            expect(MotorString.size).toBe(4); // minimum size, first 4 bytes for length
        });
        test('init', () => {
            const stringOnTest = new MotorString();
            const stringOnTest2 = new MotorString('test');
            expect(stringOnTest.jsVal).toBe('');
            expect(stringOnTest2.jsVal).toBe('test');
            expect(motorSingleton(MotorMemory).dataView.getUint32(stringOnTest2.address, true)).toBe(4);
        });
        test('set', () => {
            const stringOnTest = new MotorString();
            stringOnTest.jsVal = 'test';
            expect(stringOnTest.jsVal).toBe('test');
            expect(motorSingleton(MotorMemory).dataView.getUint32(stringOnTest.address, true)).toBe(4);
        });
    });

    describe('list', () => {
        test('size', () => {
            const listOnTest = defineMotorList(MotorFloat32);
            expect(motorSizeOf(listOnTest)).toBe(8); // minimum size, first 4 bytes for length, second 4 bytes for count
        });
        test('init', () => {
            const listOnTest = defineMotorList(MotorFloat32);
            const list = new listOnTest();
            const list2 = new listOnTest([1.1,2.2,3.3]);
            const jsListOnTest = list.jsVal;
            const jsListOnTest2 = list2.jsVal;
            expect(jsListOnTest.length).toBe(0);
            expect(jsListOnTest2.length).toBe(3);
            expect(motorSingleton(MotorMemory).dataView.getUint32(list2.address, true)).toBe(4); // length will be expanded to 2^2
            expect(motorSingleton(MotorMemory).dataView.getUint32(list2.address+4, true)).toBe(3);
        });
        test('set', () => {
            const listOnTest = defineMotorList(MotorFloat32);
            const list = new listOnTest();
            list.jsVal = [1.1,2.2,3.3];
            const jsListOnTest = list.jsVal;
            expect(jsListOnTest.length).toBe(3);
        });
        test('at', () => {
            const listOnTest = defineMotorList(MotorFloat32);
            const list = new listOnTest([3.3,4.4,5.5]);
            expect(list.at(0) instanceof MotorFloat32).toBe(true);
            expect(list.at(0).jsVal).toBeCloseTo(3.3);
            expect(list.at(1).jsVal).toBeCloseTo(4.4);
            expect(list.at(2).jsVal).toBeCloseTo(5.5);
        });
    });
});

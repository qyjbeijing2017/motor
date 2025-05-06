import { motorCreateFunction, MotorInvoke, MotorLocalU64, MotorNull, MotorPushU64, MotorReturn, MotorString } from "../../src"

test('Invoke', () => {
    const FunctionOnTest = motorCreateFunction(MotorNull, [
        MotorString,
        MotorString,
    ]);

    const str = new MotorString('hello world');

    const logInstance = new FunctionOnTest([
        { type: MotorPushU64, immediate: str.memoryAddress },
        { type: MotorLocalU64, immediate: 0 },
        { type: MotorInvoke },
        { type: MotorReturn },
    ]);

    logInstance.call([
        'print',
        '123455',
    ]);
})
import { motorCreateFunction, MotorInvoke, MotorLocalU64, MotorMemory, MotorNull, MotorPushU64, MotorReturn, MotorRuntime, motorSingleton, MotorStack, MotorString, MotorU64 } from "../../src"

test('Call External', () => {
    const runtime = new MotorRuntime();
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
        'system.print',
        '123455',
    ], runtime);



})
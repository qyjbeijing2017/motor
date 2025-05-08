import { MotorRuntime, MotorI32, motorCreateFunction, MotorLocalI32, MotorString, MotorPushU64, MotorInvoke, MotorReturn, MotorF32, motorSingleton, MotorNull } from "../../src"

describe('Package', () => {
    test('import', async () => {
        const runtime = motorSingleton(MotorRuntime);
        console.log(MotorI32.name)
        runtime.loaders.push((name) => {
            if (name !== 'test') return;
            return `
runtime.invokeMap.set('test.add', async (runtime) => {
    const b = runtime.popStack(MotorI32);
    const a = runtime.popStack(MotorI32);
    const result = a + b;
    runtime.pushStack(MotorF32, result);
})
        `
        })

        const FunctionOnTest = motorCreateFunction(MotorF32, [MotorI32, MotorI32]);
        const importName = new MotorString('import');
        const packageName = new MotorString('test');
        const functionName = new MotorString('test.add');
        const addFuncOnTest = new FunctionOnTest([
            { type: MotorPushU64, immediate: packageName.memoryAddress },
            { type: MotorPushU64, immediate: importName.memoryAddress },
            { type: MotorInvoke },
            { type: MotorLocalI32, immediate: 0 },
            { type: MotorLocalI32, immediate: MotorI32.size },
            { type: MotorPushU64, immediate: functionName.memoryAddress },
            { type: MotorInvoke },
            { type: MotorReturn, immediate: MotorF32.size },
        ])

        const result = await addFuncOnTest.call([1, 2])
        expect(result).toBe(3)
    })
})
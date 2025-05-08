import { QzaRuntime, QzaI32, qzaCreateFunction, QzaLocalI32, QzaString, QzaPushU64, QzaInvoke, QzaReturn, QzaF32, qzaSingleton, QzaNull } from "../../src"

describe('Package', () => {
    test('import', async () => {
        const runtime = qzaSingleton(QzaRuntime);
        console.log(QzaI32.name)
        runtime.loaders.push((name) => {
            if (name !== 'test') return;
            return `
runtime.invokeMap.set('test.add', (runtime) => {
    const b = runtime.popStack(QzaI32);
    const a = runtime.popStack(QzaI32);
    const result = a + b;
    runtime.pushStack(QzaF32, result);
})
        `
        })

        const FunctionOnTest = qzaCreateFunction(QzaF32, [QzaI32, QzaI32]);
        const importName = new QzaString('import');
        const packageName = new QzaString('test');
        const functionName = new QzaString('test.add');
        const addFuncOnTest = new FunctionOnTest([
            { type: QzaPushU64, immediate: packageName.memoryAddress },
            { type: QzaPushU64, immediate: importName.memoryAddress },
            { type: QzaInvoke },
            { type: QzaLocalI32, immediate: 0 },
            { type: QzaLocalI32, immediate: QzaI32.size },
            { type: QzaPushU64, immediate: functionName.memoryAddress },
            { type: QzaInvoke },
            { type: QzaReturn, immediate: QzaF32.size },
        ])

        const result = await addFuncOnTest.call([1, 2])
        expect(result).toBe(3)
    })
})
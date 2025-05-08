import { qzaCreateFunction, QzaInvoke, QzaLocalU64, QzaNull, QzaPushU64, QzaReturn, QzaString } from "../../src"

test('Invoke', () => {
    const FunctionOnTest = qzaCreateFunction(QzaNull, [
        QzaString,
        QzaString,
    ]);

    const str = new QzaString('hello world');

    const logInstance = new FunctionOnTest([
        { type: QzaPushU64, immediate: str.memoryAddress },
        { type: QzaLocalU64, immediate: 0 },
        { type: QzaInvoke },
        { type: QzaReturn },
    ]);

    logInstance.call([
        'print',
        '123455',
    ]);
})
import { QzaStruct } from "../types/struct";
import { QzaU64 } from "../types/number/u64";

export class QzaFunctionFrame extends QzaStruct<{
    returnAddress: typeof QzaU64,
    framePointer: typeof QzaU64,
}> {
    static readonly size = QzaU64.size + QzaU64.size;
    get type() {
        return {
            returnAddress: QzaU64,
            framePointer: QzaU64,
        };
    }
}
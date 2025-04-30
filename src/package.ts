import { MotorRuntime } from "./runtime";

export class MotorPackage {
    private _initialized = false;

    get initialized() {
        return this._initialized;
    }

    constructor(
        readonly url: string,
        readonly runtime: MotorRuntime,
    ) { }

    async init(targetAddress?: number): Promise<number> {
        const script = await fetch(this.url).then((res) => res.text());
        const func = new Function(script);
        const ret = func.call(this, targetAddress);
        this._initialized = true;
        return ret;
    }
}
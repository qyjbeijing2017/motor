export class Action<T> {
    readonly callBacks = new Set<(value: T) => void>();
    addListener(callBack: (value: T) => void) {
        this.callBacks.add(callBack);
    }
    removeListener(callBack: (value: T) => void) {
        this.callBacks.delete(callBack);
    }
    invoke(value: T) {
        for (const callBack of this.callBacks) {
            callBack(value);
        }
    }
    readonly emit = this.invoke;
    readonly on = this.addListener;
    readonly off = this.removeListener;
    readonly trigger = this.invoke;
}
export class MotorAst {
    static toJs(obj: any, loop: object[] = []): any {
        if (obj instanceof Array) {
            if (loop.includes(obj)) return;
            loop.push(obj);
            return obj.map((item) => MotorAst.toJs(item, loop.concat()));
        } else if (obj instanceof MotorAst) {
            return obj.toJs(loop.concat());
        } else if (obj instanceof Object) {
            if (loop.includes(obj)) return;
            loop.push(obj);
            const newObj: any = {};
            for (const key in obj) {
                newObj[key] = MotorAst.toJs(obj[key], loop.concat());
            }
            return newObj;
        } else {
            return obj;
        }
    }

    toJs(loop: object[] = []): any {
        if (loop.includes(this)) return;
        loop.push(this);
        const newObj: any = {};
        for (const key in this) {
            newObj[key] = MotorAst.toJs(this[key], loop.concat());
        }
        return newObj;
    }
}
export abstract class MotorAst {
    toObject(): any {
        return JSON.parse(JSON.stringify(this));
    }
}

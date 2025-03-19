export abstract class MotorAst {
    toJson(space?: string | number): string {
        return JSON.stringify(this, null, space);
    }
}

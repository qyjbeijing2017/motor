import { CstParser } from "chevrotain";
import { motorTokens } from "./lexer.compiler";

class MotorParser extends CstParser {
    constructor() {
        super(motorTokens);
        this.performSelfAnalysis();
    }

    program = this.RULE('program', () => {
        this.MANY(() => {
        });
    });
}
import { AstBlock } from "./block";

export interface AstTry extends AstBlock {
    astType: 'try';
    catch: AstBlock;
    finally?: AstBlock;
}
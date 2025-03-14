export type AstType = string | {
    type?: string | AstType;
    count?: number;
} | undefined
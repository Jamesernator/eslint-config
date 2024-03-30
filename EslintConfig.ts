import type { EslintRules } from "./EslintRules.js";

export type EslintConfig = {
    root?: boolean;
    parser?: string;
    parserOptions?: {
        project?: string;
        extraFileExtensions?: Array<string>;
    };
    rules?: Partial<EslintRules>;
    plugins?: Array<string>;
    overrides?: ReadonlyArray<EslintConfig & { files: Array<string> }>;
};

import type { EslintRules } from "./EslintRules.cjs";
import rules = require("./rules.cjs");

type CreateEslintConfigOptions = {
    project: string,
};

type EslintConfig = {
    root?: boolean,
    parser?: string,
    parserOptions?: {
        project?: string,
    },
    rules?: Partial<EslintRules>,
    plugins?: string[],
    overrides?: Array<EslintConfig & { files: string[] }>,
};

export = function createEslintConfig({
    project,
}: CreateEslintConfigOptions): EslintConfig {
    return {
        root: true,
        parser: "@typescript-eslint/parser",
        parserOptions: {
            project,
        },
        rules,
        plugins: [
            "eslint-plugin-import",
            "@typescript-eslint/eslint-plugin",
        ],
        overrides: [
            {
                files: ["**/*.cts"],
                rules: {
                    
                },
            },
        ],
    };
}

import type { EslintRules } from "./EslintRules.cjs";
import rules = require("./rules.cjs");

type CreateEslintConfigOptions = {
    project: string,
};

type EslintConfig = {
    root: boolean,
    parser: string,
    parserOptions: {
        project: string,
    },
    rules: EslintRules,
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
    };
}

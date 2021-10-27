import type { EslintRules } from "./EslintRules.js";
import rules = require("./rules.js");

type CreateEslintConfigOptions = Readonly<{
    project: string,
    type?: "commonjs" | "module",
}>;

type EslintConfig = {
    root?: boolean,
    parser?: string,
    parserOptions?: {
        project?: string,
    },
    rules?: Partial<EslintRules>,
    plugins?: Array<string>,
    overrides?: ReadonlyArray<EslintConfig & { files: Array<string> }>,
};

export = function createEslintConfig({
    project,
    type = "module",
}: CreateEslintConfigOptions): EslintConfig {
    const overrides: Array<EslintConfig & { files: Array<string> }> = [
        {
            files: ["**/*.cts"],
            rules: {
                "@typescript-eslint/no-require-imports": "off",
            },
        },
    ];

    if (type === "commonjs") {
        overrides.push({
            files: ["**/*.ts"],
            rules: {
                "@typescript-eslint/no-require-imports": "off",
            },
        });
    }

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
        overrides,
    };
};

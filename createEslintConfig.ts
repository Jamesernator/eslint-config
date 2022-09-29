import type { EslintRules } from "./EslintRules.js";
import baseRules = require("./rules.js");

type CreateEslintConfigOptions = Readonly<{
    project: string,
    type?: "commonjs" | "module",
    rules?: Partial<EslintRules>,
}>;

type EslintConfig = {
    root?: boolean,
    parser?: string,
    parserOptions?: {
        project?: string,
        extraFileExtensions?: Array<string>,
    },
    rules?: Partial<EslintRules>,
    plugins?: Array<string>,
    overrides?: ReadonlyArray<EslintConfig & { files: Array<string> }>,
};

/**
 * @todo Flat eslint config
 */
// type EslintConfigEntry = {
//     files?: ReadonlyArray<string>,
//     ignores?: ReadonlyArray<string>,
//     languageOptions?: {
//         ecmaVersion?: number | "latest",
//         sourceType?: "commonjs" | "module" | "script",
//         globals?: Record<string, "mutable" | "readonly">,
//         parser?: any,
//         parserOptions?: any,
//     },
//     linterOptions?: {
//         noInlineConfig?: boolean,
//         reportUnusedDisableDirectives?: boolean,
//     },
//     processor?:
//     | string
//     | {
//         preprocess(...args: Array<any>): any,
//         postprocess(...args: Array<any>): any,
//     },
//     plugins?: Record<string, any>,
//     rules?: EslintRules,
//     settings?: Record<string, any>,
// };

export = function createEslintConfig({
    project,
    type = "module",
    rules: extraRules = {},
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
            extraFileExtensions: [".mts", ".cts"],
        },
        rules: {
            ...baseRules,
            ...extraRules,
        },
        plugins: ["eslint-plugin-import", "@typescript-eslint/eslint-plugin"],
        overrides,
    };
};

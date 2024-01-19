import type { CreateEslintConfigOptions } from "./CreateEslintConfigOptions.js";
import type { EslintConfig } from "./EslintConfig.js";
import baseRules = require("./rules.js");

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

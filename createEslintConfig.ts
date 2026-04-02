import type * as eslint from "eslint";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import type { ESLintRules } from "eslint/rules";
import typescriptEslint from "typescript-eslint";
import defaultRules from "./defaultRules.ts";

export type Rules = ESLintRules;

export type CreateEslintConfigOptions = Readonly<{
    tsconfigRootDir: string;
    type?: "commonjs" | "module";
    rules?: Partial<Rules>;
}>;

export type Config = ReadonlyArray<eslint.Linter.Config>;

export default function createEslintConfig({
    rules = {},
    tsconfigRootDir,
    type = "module",
}: CreateEslintConfigOptions): Config {
    const plugins: Record<string, eslint.ESLint.Plugin> = {
        "@typescript-eslint": typescriptEslint.plugin,
        perfectionist: perfectionistPlugin,
    };

    return [
        {
            files: ["**/*.ts", "**/*.cts", "**/*.mts"],
            languageOptions: {
                parser: typescriptEslint.parser,
                parserOptions: {
                    projectService: true,
                    tsconfigRootDir,
                },
            },
            linterOptions: {
                reportUnusedDisableDirectives: true,
                reportUnusedInlineConfigs: "error",
            },
            plugins,
            rules: {
                ...defaultRules,
                ...rules,
            },
        },
        {
            files: ["**/*.cts", ...(type === "module" ? [] : ["**/*.ts"])],
            rules: {
                "@typescript-eslint/no-require-imports": "off",
            },
        },
        {
            ignores: ["**/*.d.ts", "**/*.d.cts", "**/*.d.mts"],
        },
    ];
}

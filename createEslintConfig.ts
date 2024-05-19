import { fixupPluginRules } from "@eslint/compat";
import type { Linter } from "eslint";
import eslintImportPlugin from "eslint-plugin-import";
import typescriptEslint from "typescript-eslint";
import defaultRules from "./defaultRules.js";

export type CreateEslintConfigOptions = Readonly<{
    tsconfigRootDir: string;
    type?: "commonjs" | "module";
    rules?: Partial<Linter.RulesRecord>;
}>;

export default function createEslintConfig({
    type = "module",
    tsconfigRootDir,
    rules = {},
}: CreateEslintConfigOptions): ReadonlyArray<Linter.FlatConfig> {
    const plugins: Record<string, any> = {
        "@typescript-eslint": typescriptEslint.plugin,
        import: fixupPluginRules(eslintImportPlugin),
    };

    return [
        {
            files: ["**/*.ts", "**/*.cts", "**/*.mts"],
            plugins,
            languageOptions: {
                parser: typescriptEslint.parser as any,
                parserOptions: {
                    project: true,
                    tsconfigRootDir,
                },
            },
            linterOptions: {
                reportUnusedDisableDirectives: true,
            },
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

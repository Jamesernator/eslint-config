import typescriptEslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";
import type { EslintRules } from "./EslintRules.js";
import defaultRules from "./defaultRules.js";

export type CreateEslintConfigOptions = Readonly<{
    tsconfigRootDir: string;
    type?: "commonjs" | "module";
    rules?: Partial<EslintRules>;
}>;
export type EslintConfig = Readonly<{
    files?: ReadonlyArray<string>;
    ignores?: ReadonlyArray<string>;
    languageOptions?: EslintConfigLanguageOptions;
    linterOptions?: Readonly<{
        noInlineConfig?: boolean;
        reportUnusedDisableDirectives?: boolean;
    }>;
    processor?: {
        preprocessor: (...args: any) => any;
        postprocessor: (...args: any) => any;
    };
    plugins?: Record<string, any>;
    rules?: Partial<EslintRules>;
}>;
export type EslintConfigLanguageOptions = Readonly<{
    ecmaVersion?: string;
    sourceType?: "commonjs" | "module" | "script";
    globals?: Record<string, "off" | "readonly" | "writable">;
    parser?: any;
    parserOptions?: any;
}>;

export default function createEslintConfig({
    type = "module",
    tsconfigRootDir,
    rules = {},
}: CreateEslintConfigOptions): ReadonlyArray<EslintConfig> {
    const plugins: Record<string, any> = {
        import: eslintPluginImport,
        "@typescript-eslint": typescriptEslint.plugin,
    };
    const languageOptions: EslintConfigLanguageOptions = {
        parser: typescriptEslint.parser,
        parserOptions: {
            project: true,
            tsconfigRootDir,
        },
    };

    return [
        {
            files: ["**/*.ts", "**/*.cts", "**/*.mts"],
            plugins,
            languageOptions,
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

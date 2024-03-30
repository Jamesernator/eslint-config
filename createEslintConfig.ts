import typescriptEslint from "@typescript-eslint/eslint-plugin";
import eslintPluginImport from "eslint-plugin-import";
import type { EslintRules } from "./EslintRules.js";
import rules from "./rules.js";

export type CreateEslintConfigOptions = Readonly<{
    project: string;
    type?: "commonjs" | "module";
    rules?: Partial<EslintRules>;
}>;

export type EslintConfig = Readonly<{
    files?: ReadonlyArray<string>;
    ignores?: ReadonlyArray<string>;
    languageOptions?: Readonly<{
        ecmaVersion?: string;
        sourceType?: "commonjs" | "module" | "script";
        globals?: Record<string, "off" | "readonly" | "writable">;
        parser?: Readonly<{ parseForEslint: (...args: any) => any }>;
        parserOptions?: any;
    }>;
    linterOptions?: Readonly<{
        noInlineConfig?: boolean;
        reportUnusedDisableDirectives?: boolean;
    }>;
    processor?: {
        preprocessor: (...args: any) => any;
        postprocessor: (...args: any) => any;
    };
    plugins?: Record<string, any>;
    rules?: EslintRules;
}>;

export default function createEslintConfig({
    type = "module",
    project,
    rules: extraRules = {},
}: CreateEslintConfigOptions): ReadonlyArray<EslintConfig> {
    const ctsConfig: EslintConfig = {
        plugins: [eslintPluginImport, typescriptEslint],
        rules: {
            ...rules,
            ...extraRules,
            "@typescript-eslint/no-require-imports": "off",
        },
    };

    const mtsConfig: EslintConfig = {
        plugins: [eslintPluginImport, typescriptEslint],
        rules: {
            ...rules,
            ...extraRules,
        },
    };

    return [
        {
            files: ["**/*.cts"],
            ...ctsConfig,
        },
        {
            files: ["**/*.ts"],
            ...(type === "module" ? mtsConfig : ctsConfig),
        },
        {
            files: ["**/*.mts"],
            ...mtsConfig,
        },
    ];
}

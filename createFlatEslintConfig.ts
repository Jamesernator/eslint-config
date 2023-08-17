import type EslintRules = require("./EslintRules.js");

type FlatEslintConfig = ReadonlyArray<
    Readonly<{
        files?: ReadonlyArray<string>,
        ignores?: ReadonlyArray<string>,
        languageOptions?: Readonly<{
            ecmaVersion?: string,
            sourceType?: "commonjs" | "module" | "script",
            globals?: Record<string, "off" | "readonly" | "writable">,
            parser?: Readonly<{ parseForEslint: (...args: any) => any }>,
            parserOptions?: any,
        }>,
        linterOptions?: Readonly<{
            noInlineConfig?: boolean,
            reportUnusedDisableDirectives?: boolean,
        }>,
        processor?: {
            preprocessor: (...args: any) => any,
            postprocessor: (...args: any) => any,
        },
        plugins?: Record<string, any>,
        rules?: EslintRules.EslintRules,
    }>
>;

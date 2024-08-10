import type { Linter } from "eslint";

const builtinModules = [
    "_http_agent",
    "_http_client",
    "_http_common",
    "_http_incoming",
    "_http_outgoing",
    "_http_server",
    "_stream_duplex",
    "_stream_passthrough",
    "_stream_readable",
    "_stream_transform",
    "_stream_wrap",
    "_stream_writable",
    "_tls_common",
    "_tls_wrap",
    "assert",
    "assert/strict",
    "async_hooks",
    "buffer",
    "child_process",
    "cluster",
    "console",
    "constants",
    "crypto",
    "dgram",
    "diagnostics_channel",
    "dns",
    "dns/promises",
    "domain",
    "events",
    "fs",
    "fs/promises",
    "http",
    "http2",
    "https",
    "inspector",
    "inspector/promises",
    "module",
    "net",
    "os",
    "path",
    "path/posix",
    "path/win32",
    "perf_hooks",
    "process",
    "punycode",
    "querystring",
    "readline",
    "readline/promises",
    "repl",
    "stream",
    "stream/consumers",
    "stream/promises",
    "stream/web",
    "string_decoder",
    "sys",
    "timers",
    "timers/promises",
    "tls",
    "trace_events",
    "tty",
    "url",
    "util",
    "util/types",
    "v8",
    "vm",
    "wasi",
    "worker_threads",
    "zlib",
];

/**
 * Rules that detect things that are highly likely to be errors
 */
const errorDetection = {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-array-delete": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": [
        "error",
        {
            ignoreArrowShorthand: false,
            ignoreVoidOperator: true,
        },
    ],
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-floating-promises": [
        "error",
        {
            ignoreIIFE: false,
            ignoreVoid: true,
        },
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-misused-promises": [
        "error",
        {
            checksConditionals: true,
            checksVoidReturn: true,
        },
    ],
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-unused-expressions": [
        "error",
        {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: false,
        },
    ],
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            argsIgnorePattern: "^",
            caughtErrors: "all",
            ignoreRestSiblings: true,
            varsIgnorePattern: "^_",
        },
    ],
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/require-array-sort-compare": [
        "error",
        {
            ignoreStringArrays: true,
        },
    ],
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
            allowAny: false,
            allowBoolean: true,
            allowNullish: false,
            allowNumber: true,
            allowRegExp: false,
        },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
            allowAny: true,
            allowNullableBoolean: true,
            allowNullableNumber: false,
            allowNullableObject: true,
            allowNullableString: false,
            allowNumber: false,
            allowString: false,
        },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unbound-method": [
        "error",
        {
            ignoreStatic: true,
        },
    ],
    "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
    curly: ["error", "multi-line"],
    eqeqeq: [
        "error",
        "always",
        {
            null: "ignore",
        },
    ],
    "for-direction": "error",
    "no-case-declarations": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constant-condition": [
        "error",
        {
            checkLoops: false,
        },
    ],
    "no-control-regex": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-extra-bind": "error",
    "no-fallthrough": [
        "error",
        {
            commentPattern: "^continue$",
        },
    ],
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-invalid-regexp": "error",
    "no-misleading-character-class": ["error", { allowEscape: true }],
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-native-nonconstructor": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-return-assign": "error",
    "no-self-assign": [
        "error",
        {
            props: true,
        },
    ],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": [
        "error",
        {
            disallowArithmeticOperators: true,
        },
    ],
    "no-unused-labels": "error",
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    radix: ["error", "always"],
    "use-isnan": "error",
} satisfies Partial<Linter.RulesRecord>;

/**
 * Rules that detect things that are likely to be problematic
 */
const codeHealth = {
    "@typescript-eslint/ban-ts-comment": [
        "error",
        {
            "ts-check": true,
            "ts-expect-error": false,
            "ts-ignore": true,
            "ts-nocheck": true,
        },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/consistent-return": "error",
    "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "never",
        },
    ],
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
        },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
        "error",
        {
            allowArgumentsExplicitlyTypedAsAny: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
        },
    ],
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-invalid-void-type": [
        "error",
        {
            allowAsThisParameter: true,
            allowInGenericTypeArguments: true,
        },
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
        "error",
        {
            allowComparingNullableBooleansToFalse: true,
            allowComparingNullableBooleansToTrue: true,
        },
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-enum-comparison": "error",
    "@typescript-eslint/no-unsafe-function-type": "error",
    "@typescript-eslint/no-wrapper-object-types": "error",
    "@typescript-eslint/no-unnecessary-template-expression": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/only-throw-error": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-find": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true,
        },
    ],
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/triple-slash-reference": [
        "error",
        {
            lib: "never",
            path: "never",
            types: "never",
        },
    ],
    "accessor-pairs": [
        "error",
        {
            enforceForClassMembers: true,
            getWithoutSet: false,
            setWithoutGet: true,
        },
    ],
    "default-case": "error",
    "import/no-absolute-path": [
        "error",
        {
            commonjs: true,
            esmodule: true,
        },
    ],
    "import/no-anonymous-default-export": [
        "error",
        {
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowArray: false,
            allowArrowFunction: false,
            allowCallExpression: false,
            allowLiteral: false,
            allowObject: false,
        },
    ],
    "max-params": [
        "error",
        {
            max: 7,
        },
    ],
    "max-statements-per-line": [
        "error",
        {
            max: 1,
        },
    ],
    "no-alert": "error",
    "no-class-assign": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-label-var": "error",
    "no-lone-blocks": "error",
    "no-loss-of-precision": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-plusplus": [
        "error",
        {
            allowForLoopAfterthoughts: true,
        },
    ],
    "no-proto": "error",
    "no-unneeded-ternary": [
        "error",
        {
            defaultAssignment: false,
        },
    ],
    "no-useless-return": "error",
    "no-var": "error",
    "no-warning-comments": [
        "error",
        {
            terms: ["CRITICAL"],
        },
    ],
    "no-with": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-regex-literals": [
        "error",
        {
            disallowRedundantWrapping: true,
        },
    ],
    "prefer-rest-params": "error",
    "require-unicode-regexp": "error",
} satisfies Partial<Linter.RulesRecord>;

/**
 * Rules that enforce certain stylistic consistency even if either form would be otherwise valid
 * NOTE: This does not include syntatic formatting rules, specifically rules belong here if they
 * correspond to different AST's
 */
const consistency = {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
        "error",
        {
            default: "generic",
            readonly: "generic",
        },
    ],
    "@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-imports": [
        "error",
        {
            disallowTypeAnnotations: true,
            prefer: "type-imports",
            fixStyle: "separate-type-imports",
        },
    ],
    "@typescript-eslint/dot-notation": [
        "error",
        {
            allowKeywords: true,
        },
    ],
    "@typescript-eslint/naming-convention": [
        "error",
        {
            selector: "default",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
            selector: "variableLike",
            format: ["camelCase", "PascalCase"],
        },
        {
            selector: "variable",
            modifiers: ["const"],
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
            selector: "enumMember",
            format: ["camelCase", "UPPER_CASE"],
        },
        {
            selector: "function",
            format: ["camelCase"],
        },
        {
            selector: "parameter",
            format: ["camelCase", "PascalCase"],
        },
        {
            selector: "property",
            format: ["camelCase", "PascalCase"],
        },
        {
            selector: "property",
            modifiers: ["readonly"],
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
            selector: [
                "objectLiteralProperty",
                "objectLiteralMethod",
                "typeProperty",
                "typeMethod",
            ],
            format: null,
        },
        {
            selector: "typeLike",
            format: ["PascalCase"],
        },
        {
            selector: "variable",
            modifiers: ["destructured"],
            format: null,
        },
    ],
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-restricted-imports": [
        "error",
        {
            paths: builtinModules.map((modName) => {
                const message = `Use node:${modName} instead`;
                return {
                    name: modName,
                    message,
                };
            }),
        },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/parameter-properties": [
        "error",
        {
            prefer: "class-property",
        },
    ],
    "@typescript-eslint/prefer-destructuring": [
        "error",
        {
            array: true,
            object: true,
        },
        {
            enforceForRenamedProperties: false,
        },
    ],
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/sort-type-constituents": [
        "error",
        {
            checkIntersections: true,
            checkUnions: true,
        },
    ],
    "default-case-last": "error",
    "func-names": ["error", "as-needed", {}],
    "func-style": [
        "error",
        "declaration",
        {
            allowArrowFunctions: true,
        },
    ],
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/first": "error",
    "import/newline-after-import": [
        "error",
        {
            count: 1,
        },
    ],
    "import/no-duplicates": [
        "error",
        {
            considerQueryString: false,
            "prefer-inline": false,
        },
    ],
    "import/no-empty-named-blocks": "error",
    "import/no-named-default": "error",
    "import/no-useless-path-segments": [
        "error",
        {
            commonjs: true,
            noUselessIndex: false,
        },
    ],
    "import/order": [
        "error",
        {
            alphabetize: {
                caseInsensitive: true,
                order: "asc",
            },
        },
    ],
    "logical-assignment-operators": [
        "error",
        "always",
        {
            enforceForIfStatements: true,
        },
    ],
    "new-parens": ["error", "always"],
    "no-else-return": [
        "error",
        {
            allowElseIf: true,
        },
    ],
    "no-empty": [
        "error",
        {
            allowEmptyCatch: false,
        },
    ],
    "no-empty-static-block": "error",
    "no-extra-boolean-cast": [
        "error",
        {
            enforceForInnerExpressions: false,
        },
    ],
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": [
        "error",
        {
            boolean: true,
            disallowTemplateShorthand: false,
            number: true,
            string: true,
        },
    ],
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-negated-condition": "error",
    "no-useless-computed-key": [
        "error",
        {
            enforceForClassMembers: true,
        },
    ],
    "no-useless-rename": [
        "error",
        {
            ignoreDestructuring: false,
            ignoreExport: false,
            ignoreImport: false,
        },
    ],
    "object-shorthand": ["error", "always", {}],
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "initializations"],
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": [
        "error",
        {
            allowNamedFunctions: true,
            allowUnboundThis: true,
        },
    ],
    "prefer-const": [
        "error",
        {
            destructuring: "any",
        },
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "sort-imports": [
        "error",
        {
            allowSeparatedGroups: true,
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
        },
    ],
} satisfies Partial<Linter.RulesRecord>;

/**
 * Rules concerning formatting
 * NOTE: As per https://typescript-eslint.io/linting/troubleshooting/formatting all style rules
 * are now off
 */
const formatting = {
    "@typescript-eslint/brace-style": [
        "off",
        "1tbs",
        {
            allowSingleLine: true,
        },
    ],
    "@typescript-eslint/comma-dangle": [
        "off",
        {
            arrays: "always-multiline",
            enums: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
            generics: "always-multiline",
            imports: "always-multiline",
            objects: "always-multiline",
            tuples: "always-multiline",
        },
    ],
    "@typescript-eslint/comma-spacing": [
        "off",
        {
            after: true,
            before: false,
        },
    ],
    "@typescript-eslint/func-call-spacing": ["off", "never"],
    "@typescript-eslint/indent": [
        "off",
        4,
        {
            flatTernaryExpressions: true,
            FunctionExpression: {
                parameters: 1,
            },
            ignoredNodes: ["ConditionalExpression"],
            SwitchCase: 1,
        },
    ],
    "@typescript-eslint/keyword-spacing": [
        "off",
        {
            after: true,
            before: true,
        },
    ],
    "@typescript-eslint/lines-between-class-members": [
        "off",
        "always",
        {
            exceptAfterOverload: true,
            exceptAfterSingleLine: true,
        },
    ],
    "@typescript-eslint/no-extra-parens": [
        "off",
        "all",
        {
            conditionalAssign: false,
            enforceForArrowConditionals: true,
            enforceForFunctionPrototypeMethods: true,
            enforceForNewInMemberExpressions: true,
            enforceForSequenceExpressions: false,
            nestedBinaryExpressions: true,
            returnAssign: false,
        },
    ],
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/object-curly-spacing": ["error", "always", {}],
    "@typescript-eslint/quotes": [
        "off",
        "double",
        {
            allowTemplateLiterals: true,
            avoidEscape: false,
        },
    ],
    "@typescript-eslint/semi": ["off", "always"],
    "@typescript-eslint/space-before-blocks": [
        "off",
        {
            classes: "always",
            functions: "always",
            keywords: "off",
        },
    ],
    "@typescript-eslint/space-before-function-paren": [
        "off",
        {
            anonymous: "never",
            asyncArrow: "always",
            named: "never",
        },
    ],
    "@typescript-eslint/space-infix-ops": "off",
    "@typescript-eslint/type-annotation-spacing": [
        "off",
        {
            overrides: {
                arrow: {
                    after: true,
                    before: true,
                },
                colon: {
                    after: true,
                    before: false,
                },
            },
        },
    ],
    "array-bracket-newline": ["off", "consistent"],
    "array-bracket-spacing": ["off", "never", {}],
    "array-element-newline": ["off", "consistent"],
    "arrow-parens": ["off", "always"],
    "arrow-spacing": [
        "off",
        {
            after: true,
            before: true,
        },
    ],
    "block-spacing": ["off", "always"],
    "comma-style": ["off", "last"],
    "computed-property-spacing": [
        "off",
        "never",
        {
            enforceForClassMembers: true,
        },
    ],
    "dot-location": ["off", "property"],
    "eol-last": ["off", "always"],
    "function-call-argument-newline": ["off", "consistent"],
    "function-paren-newline": ["off", "multiline-arguments"],
    "generator-star-spacing": [
        "off",
        {
            after: true,
            before: false,
        },
    ],
    "implicit-arrow-linebreak": ["off", "beside"],
    "jsx-quotes": ["off", "prefer-double"],
    "key-spacing": [
        "off",
        {
            afterColon: true,
            beforeColon: false,
        },
    ],
    "line-comment-position": ["off", "above"],
    "linebreak-style": ["off", "unix"],
    "lines-around-comment": [
        "off",
        {
            afterBlockComment: false,
            afterLineComment: false,
            allowArrayEnd: true,
            allowArrayStart: true,
            allowBlockEnd: true,
            allowBlockStart: true,
            allowClassEnd: true,
            allowClassStart: true,
            allowObjectEnd: true,
            allowObjectStart: true,
            beforeBlockComment: true,
            beforeLineComment: false,
        },
    ],
    "max-len": [
        "off",
        {
            code: 100,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        },
    ],
    "newline-per-chained-call": [
        "off",
        {
            ignoreChainWithDepth: 3,
        },
    ],
    "no-irregular-whitespace": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": [
        "off",
        {
            max: 3,
            maxBOF: 0,
            maxEOF: 2,
        },
    ],
    "no-tabs": "off",
    "no-trailing-spaces": "off",
    "no-whitespace-before-property": "off",
    "nonblock-statement-body-position": ["off", "beside"],
    "object-curly-newline": [
        "off",
        {
            consistent: true,
            multiline: true,
        },
    ],
    "object-property-newline": [
        "off",
        {
            allowAllPropertiesOnSameLine: true,
        },
    ],
    "padded-blocks": [
        "off",
        "never",
        {
            allowSingleLineBlocks: true,
        },
    ],
    "quote-props": [
        "off",
        "as-needed",
        {
            keywords: false,
            numbers: true,
            unnecessary: true,
        },
    ],
    "rest-spread-spacing": ["off", "never"],
    "semi-spacing": [
        "off",
        {
            after: true,
            before: false,
        },
    ],
    "semi-style": ["off", "last"],
    "space-in-parens": ["off", "never"],
    "space-unary-ops": [
        "off",
        {
            nonwords: false,
            words: true,
        },
    ],
    "spaced-comment": [
        "off",
        "always",
        {
            block: {
                balanced: true,
            },
            line: {
                markers: ["/"],
            },
        },
    ],
    "switch-colon-spacing": [
        "off",
        {
            after: true,
            before: false,
        },
    ],
    "template-curly-spacing": ["off", "always"],
    "template-tag-spacing": ["off", "never"],
    "unicode-bom": ["off", "never"],
    "yield-star-spacing": [
        "off",
        {
            after: true,
            before: false,
        },
    ],
    // This makes typescript object types more consistent with JS objects
    "@typescript-eslint/member-delimiter-style": [
        "off",
        {
            multiline: {
                requireLast: true,
            },
            overrides: {
                interface: {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: "semi",
                        requireLast: false,
                    },
                },
                typeLiteral: {
                    multiline: {
                        delimiter: "comma",
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: "comma",
                        requireLast: false,
                    },
                },
            },
            singleline: {
                requireLast: false,
            },
        },
    ],
    "operator-linebreak": ["off", "before"],
} satisfies Partial<Linter.RulesRecord>;

/**
 * Rules that TypeScript itself is able to cover
 */
const coveredByTypescript = {
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/no-invalid-this": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "constructor-super": "off",
    "getter-return": "off",
    "import/default": "off",
    "import/export": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/no-amd": "off",
    "import/no-commonjs": "off",
    "import/no-deprecated": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-import-module-exports": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-nodejs-modules": "off",
    "import/no-unresolved": "off",
    "import/unambiguous": "off",
    "init-declarations": "off",
    "new-cap": "off",
    "no-async-promise-executor": "off",
    "no-caller": "off",
    "no-const-assign": "off",
    "no-eq-null": "off",
    "no-global-assign": "off",
    "no-invalid-this": "off",
    "no-obj-calls": "off",
    "no-this-before-super": "off",
    "no-undef": "off",
    "no-undefined": "off",
    "no-use-before-define": "off",
} satisfies Partial<Linter.RulesRecord>;

/**
 * Rules that are covered by a different plugin
 */
const coveredByOtherPlugins = {
    "brace-style": "off",
    camelcase: "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "consistent-return": "off",
    "default-param-last": "off",
    "dot-notation": "off",
    "func-call-spacing": "off",
    indent: "off",
    "keyword-spacing": "off",
    "lines-between-class-members": "off",
    "no-array-constructor": "off",
    "no-dupe-class-members": "off",
    // Covered by other plugins
    "no-duplicate-imports": "off",
    "no-empty-function": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-implied-eval": "off",
    "no-loop-func": "off",
    "no-redeclare": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    "object-curly-spacing": "off",
    quotes: "off",
    semi: "off",
    "space-before-function-paren": "off",
    "space-infix-ops": "off",
} satisfies Partial<Linter.RulesRecord>;

const disabled = {
    "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
    "@typescript-eslint/class-literal-property-style": ["off", "fields"],
    "@typescript-eslint/class-methods-use-this": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": ["off", "property"],
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-loop-func": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-meaningless-void-operator": "off",
    "@typescript-eslint/no-misused-new": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/prefer-namespace-keyword": "off",
    "@typescript-eslint/prefer-promise-reject-errors": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unified-signatures": [
        "off",
        {
            ignoreDifferentlyNamedParameters: true,
        },
    ],
    "array-callback-return": "off",
    "arrow-body-style": "off",
    "block-scoped-var": "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    complexity: "off",
    "consistent-this": "off",
    "func-name-matching": "off",
    "guard-for-in": "off",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "import/exports-last": "off",
    "import/group-exports": "off",
    "import/max-dependencies": "off",
    "import/no-cycle": "off",
    "import/no-default-export": "off",
    "import/no-dynamic-require": "off",
    "import/no-internal-modules": "off",
    "import/no-mutable-exports": "off",
    "import/no-named-export": "off",
    "import/no-namespace": "off",
    "import/no-relative-packages": "off",
    "import/no-relative-parent-imports": "off",
    "import/no-restricted-paths": "off",
    "import/no-self-import": "off",
    "import/no-unassigned-import": "off",
    "import/no-unused-modules": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "max-depth": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-statements": "off",
    "multiline-comment-style": ["off", "starred-block"],
    "multiline-ternary": "off",
    "no-await-in-loop": "off",
    "no-bitwise": "off",
    "no-confusing-arrow": "off",
    "no-constant-binary-expression": "off",
    "no-constructor-return": "off",
    "no-continue": "off",
    "no-div-regex": "off",
    "no-implicit-globals": "off",
    "no-inner-declarations": "off",
    "no-iterator": "off",
    "no-labels": "off",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    // Deprecated
    "no-new-symbol": "off",
    "no-nested-ternary": "off",
    "no-param-reassign": "off",
    "no-restricted-exports": "off",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-return-await": "off",
    "no-script-url": "off",
    "no-shadow": "off",
    "no-shadow-restricted-names": "off",
    "no-template-curly-in-string": "off",
    "no-ternary": "off",
    "no-throw-literal": "off",
    "no-undef-init": "off",
    "no-void": "off",
    "padding-line-between-statements": "off",
    "prefer-promise-reject-errors": "off",
    "require-atomic-updates": "off",
    "require-await": "off",
    "require-yield": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "off",
    strict: "off",
    "valid-typeof": "off",
    "vars-on-top": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    yoda: [
        "off",
        "never",
        {
            onlyEquality: true,
        },
    ],
    "prefer-destructuring": [
        "off",
        {
            array: true,
            object: true,
        },
        {
            enforceForRenamedProperties: false,
        },
    ],
    "symbol-description": "off",
    "@typescript-eslint/no-restricted-types": "off",
} satisfies Partial<Linter.RulesRecord>;

const considerInFuture = {
    // Consider in future
    "@typescript-eslint/prefer-readonly-parameter-types": [
        "off",
        {
            checkParameterProperties: true,
            ignoreInferredTypes: true,
            treatMethodsAsReadonly: true,
        },
    ],
} satisfies Partial<Linter.RulesRecord>;

const defaultRules: {
    [K in keyof Linter.RulesRecord]-?: NonNullable<Linter.RulesRecord[K]>;
} = {
    ...errorDetection,
    ...codeHealth,
    ...consistency,
    ...formatting,
    ...coveredByTypescript,
    ...coveredByOtherPlugins,
    ...considerInFuture,
    ...disabled,
};

export default defaultRules;

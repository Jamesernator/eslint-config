import type { EslintRules } from "./EslintRules.js";

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

const rules: EslintRules = {
    // Error Detection
    "for-direction": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constant-condition": [
        "error",
        {
            checkLoops: false,
        },
    ],
    "no-control-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-invalid-regexp": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
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
    "no-useless-backreference": "error",
    "use-isnan": "error",
    "consistent-return": "error",
    curly: ["error", "multi-line"],
    eqeqeq: [
        "error",
        "always",
        {
            null: "ignore",
        },
    ],
    "no-case-declarations": "error",
    "no-extra-bind": "error",
    "no-fallthrough": [
        "error",
        {
            commentPattern: "^continue$",
        },
    ],
    "@typescript-eslint/no-implied-eval": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "@typescript-eslint/no-redeclare": [
        "error",
        {
            ignoreDeclarationMerge: true,
        },
    ],
    "no-return-assign": "error",
    "no-self-assign": [
        "error",
        {
            props: true,
        },
    ],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-unmodified-loop-condition": "error",
    "@typescript-eslint/no-unused-expressions": [
        "error",
        {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: false,
        },
    ],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    radix: ["error", "always"],
    "no-delete-var": "error",
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            varsIgnorePattern: "^_",
            caughtErrors: "all",
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
        },
    ],
    "@typescript-eslint/no-array-constructor": "error",
    "no-multi-assign": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": [
        "error",
        {
            ignoreArrowShorthand: false,
            ignoreVoidOperator: true,
        },
    ],
    "@typescript-eslint/no-floating-promises": [
        "error",
        {
            ignoreIIFE: false,
            ignoreVoid: true,
        },
    ],
    "@typescript-eslint/no-misused-promises": [
        "error",
        {
            checksConditionals: true,
            checksVoidReturn: true,
        },
    ],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/require-array-sort-compare": [
        "error",
        {
            ignoreStringArrays: true,
        },
    ],
    "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
            checkCompoundAssignments: true,
        },
    ],
    "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
            allowBoolean: true,
            allowNumber: true,
            allowRegExp: false,
            allowAny: false,
            allowNullish: false,
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
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",

    // Code Health
    "@typescript-eslint/no-require-imports": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-ex-assign": "error",
    "accessor-pairs": [
        "error",
        {
            setWithoutGet: true,
            getWithoutSet: false,
            enforceForClassMembers: true,
        },
    ],
    "default-case": "error",
    "@typescript-eslint/default-param-last": "error",
    "no-alert": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-lone-blocks": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-proto": "error",
    "no-useless-return": "error",
    "no-warning-comments": [
        "error",
        {
            terms: ["TODO", "FIXME"],
        },
    ],
    "no-with": "error",
    "prefer-named-capture-group": "error",
    "prefer-regex-literals": [
        "error",
        {
            disallowRedundantWrapping: true,
        },
    ],
    "require-unicode-regexp": "error",
    "no-label-var": "error",
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
    "no-bitwise": "error",
    "no-new-object": "error",
    "no-plusplus": [
        "error",
        {
            allowForLoopAfterthoughts: true,
        },
    ],
    "no-unneeded-ternary": [
        "error",
        {
            defaultAssignment: false,
        },
    ],
    "no-class-assign": "error",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-new-symbol": "error",
    "no-var": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "import/no-absolute-path": [
        "error",
        {
            esmodule: true,
            commonjs: true,
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
    "@typescript-eslint/ban-ts-comment": [
        "error",
        {
            "ts-check": true,
            "ts-ignore": true,
            "ts-nocheck": true,
            "ts-expect-error": false,
        },
    ],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "never",
        },
    ],
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
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-implicit-any-catch": [
        "error",
        {
            allowExplicitAny: true,
        },
    ],
    "@typescript-eslint/no-invalid-void-type": [
        "error",
        {
            allowAsThisParameter: true,
            allowInGenericTypeArguments: true,
        },
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
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
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
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
    "@typescript-eslint/triple-slash-reference": [
        "error",
        {
            lib: "never",
            path: "never",
            types: "never",
        },
    ],
    "@typescript-eslint/unified-signatures": ["error", {
        ignoreDifferentlyNamedParameters: true,
    }],
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/ban-types": [
        "error",
        {
            extendDefaults: false,
            types: {
                BigInt: "Don't use boxed types, use bigint instead",
                Number: "Don't use boxed types, use number instead",
                Boolean: "Don't use boxed types, use boolean instead",
                String: "Don't use boxed types, use string instead",
                Symbol: "Don't use boxed types, use symbol instead",
                Function: "Don't use the plain Function type, use (...args: any[]) => any instead",
            },
        },
    ],

    // Code Style
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/space-before-blocks": [
        "error",
        {
            classes: "always",
            functions: "always",
            keywords: "off",
        },
    ],
    "function-call-argument-newline": ["error", "consistent"],
    "no-empty": [
        "error",
        {
            allowEmptyCatch: false,
        },
    ],
    "no-extra-boolean-cast": [
        "error",
        {
            enforceForLogicalOperands: false,
        },
    ],
    "@typescript-eslint/no-extra-parens": [
        "error",
        "all",
        {
            conditionalAssign: false,
            returnAssign: false,
            nestedBinaryExpressions: true,

            enforceForArrowConditionals: true,
            enforceForSequenceExpressions: false,
            enforceForNewInMemberExpressions: true,
            enforceForFunctionPrototypeMethods: true,
        },
    ],
    "@typescript-eslint/no-extra-semi": "error",
    "no-irregular-whitespace": "error",
    "default-case-last": "error",
    "dot-location": ["error", "property"],
    "@typescript-eslint/dot-notation": [
        "error",
        {
            allowKeywords: true,
        },
    ],
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "no-else-return": [
        "error",
        {
            allowElseIf: true,
        },
    ],
    "@typescript-eslint/no-empty-function": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": [
        "error",
        {
            boolean: true,
            number: true,
            string: true,
            disallowTemplateShorthand: false,
        },
    ],
    "no-multi-spaces": "error",
    yoda: [
        "off",
        "never",
        {
            onlyEquality: true,
        },
    ],
    "array-bracket-newline": [
        "error",
        "consistent",
    ],
    "array-bracket-spacing": ["error", "never", {}],
    "array-element-newline": [
        "error",
        "consistent",
    ],
    "block-spacing": ["error", "always"],
    "@typescript-eslint/brace-style": [
        "error",
        "1tbs",
        {
            allowSingleLine: true,
        },
    ],
    "@typescript-eslint/comma-dangle": [
        "error",
        {
            arrays: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
            imports: "always-multiline",
            objects: "always-multiline",
            enums: "always-multiline",
            generics: "always-multiline",
            tuples: "always-multiline",
        },
    ],
    "@typescript-eslint/comma-spacing": [
        "error",
        {
            before: false,
            after: true,
        },
    ],
    "comma-style": ["error", "last"],
    "computed-property-spacing": [
        "error",
        "never",
        {
            enforceForClassMembers: true,
        },
    ],
    "eol-last": ["error", "always"],
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "func-names": ["error", "as-needed", {}],
    "func-style": [
        "error",
        "declaration",
        {
            allowArrowFunctions: true,
        },
    ],
    "function-paren-newline": ["error", "multiline-arguments"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "@typescript-eslint/indent": [
        "error",
        4,
        {
            SwitchCase: 1,
            FunctionExpression: {
                parameters: 1,
            },
            ignoredNodes: ["ConditionalExpression"],
            flatTernaryExpressions: true,
        },
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": [
        "error",
        {
            beforeColon: false,
            afterColon: true,
        },
    ],
    "@typescript-eslint/keyword-spacing": [
        "error",
        {
            before: true,
            after: true,
        },
    ],
    "line-comment-position": ["error", "above"],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": [
        "error",
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
    "@typescript-eslint/lines-between-class-members": [
        "error",
        "always",
        {
            exceptAfterSingleLine: true,
            exceptAfterOverload: true,
        },
    ],
    "max-len": [
        "error",
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
    "new-parens": ["error", "always"],
    "newline-per-chained-call": [
        "error",
        {
            ignoreChainWithDepth: 3,
        },
    ],
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": [
        "error",
        {
            max: 3,
            maxBOF: 0,
            maxEOF: 2,
        },
    ],
    "no-negated-condition": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": ["error", "beside"],
    "object-curly-newline": [
        "error",
        {
            multiline: true,
            consistent: true,
        },
    ],
    "@typescript-eslint/object-curly-spacing": ["error", "always", {}],
    "object-property-newline": [
        "error",
        {
            allowAllPropertiesOnSameLine: true,
        },
    ],
    "one-var": [
        "error",
        "never",
    ],
    "one-var-declaration-per-line": ["error", "initializations"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "padded-blocks": [
        "error",
        "never",
        {
            allowSingleLineBlocks: true,
        },
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "quote-props": [
        "error",
        "as-needed",
        {
            keywords: false,
            unnecessary: true,
            numbers: true,
        },
    ],
    "@typescript-eslint/quotes": [
        "error",
        "double",
        {
            allowTemplateLiterals: true,
            avoidEscape: false,
        },
    ],
    "@typescript-eslint/semi": ["error", "always"],
    "semi-spacing": [
        "error",
        {
            before: false,
            after: true,
        },
    ],
    "semi-style": ["error", "last"],
    "@typescript-eslint/space-before-function-paren": [
        "error",
        {
            anonymous: "never",
            asyncArrow: "always",
            named: "never",
        },
    ],
    "space-in-parens": ["error", "never"],
    "@typescript-eslint/space-infix-ops": "error",
    "space-unary-ops": [
        "error",
        {
            words: true,
            nonwords: false,
        },
    ],
    "spaced-comment": ["error", "always"],
    "switch-colon-spacing": [
        "error",
        {
            before: false,
            after: true,
        },
    ],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": [
        "error",
        {
            before: true,
            after: true,
        },
    ],
    "generator-star-spacing": [
        "error",
        {
            before: false,
            after: true,
        },
    ],
    "no-useless-computed-key": [
        "error",
        {
            enforceForClassMembers: true,
        },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "no-useless-rename": [
        "error",
        {
            ignoreDestructuring: false,
            ignoreExport: false,
            ignoreImport: false,
        },
    ],
    "object-shorthand": ["error", "always", {}],
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
    "prefer-destructuring": [
        "error",
        {
            array: true,
            object: true,
        },
        {
            enforceForRenamedProperties: false,
        },
    ],
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": [
        "error",
        {
            allowSeparatedGroups: true,
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
        },
    ],
    "symbol-description": "error",
    "template-curly-spacing": ["error", "always"],
    "yield-star-spacing": [
        "error",
        {
            before: false,
            after: true,
        },
    ],
    "import/no-useless-path-segments": [
        "error",
        {
            noUselessIndex: false,
            commonjs: true,
        },
    ],
    "import/first": "error",
    "import/no-duplicates": [
        "error",
        {
            considerQueryString: true,
        },
    ],
    "import/order": [
        "error",
        {
            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },
        },
    ],
    "import/newline-after-import": [
        "error",
        {
            count: 1,
        },
    ],
    "import/no-named-default": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
        "error", {
            default: "generic",
            readonly: "generic",
        },
    ],
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-imports": [
        "error",
        {
            prefer: "type-imports",
            disallowTypeAnnotations: true,
        },
    ],
    "@typescript-eslint/member-delimiter-style": [
        "error",
        {
            multiline: {
                requireLast: true,
            },
            singleline: {
                requireLast: false,
            },
            overrides: {
                interface: {
                    multiline: {
                        requireLast: true,
                        delimiter: "semi",
                    },
                    singleline: {
                        requireLast: false,
                        delimiter: "semi",
                    },
                },
                typeLiteral: {
                    multiline: {
                        requireLast: true,
                        delimiter: "comma",
                    },
                    singleline: {
                        requireLast: false,
                        delimiter: "comma",
                    },
                },
            },
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
            format: ["camelCase"],
        },
        {
            selector: "variable",
            modifiers: ["const"],
            format: ["camelCase", "UPPER_CASE"],
        },
        {
            selector: "enumMember",
            format: ["camelCase"],
        },
        {
            selector: "function",
            format: ["camelCase"],
        },
        {
            selector: "parameter",
            format: ["camelCase"],
        },
        {
            selector: "parameter",
            types: ["function"],
            format: ["camelCase", "PascalCase"],
        },
        {
            selector: ["classProperty", "classMethod", "parameterProperty"],
            format: ["camelCase"],
        },
        {
            selector: ["objectLiteralProperty", "objectLiteralMethod", "typeProperty", "typeMethod"],
            format: null,
        },
        {
            selector: "typeLike",
            format: ["PascalCase"],
        },
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/parameter-properties": ["error", {
        prefer: "class-property",
    }],
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/sort-type-union-intersection-members": [
        "error",
        {
            checkIntersections: true,
            checkUnions: true,
        },
    ],
    "@typescript-eslint/type-annotation-spacing": [
        "error",
        {
            overrides: {
                colon: {
                    before: false,
                    after: true,
                },
                arrow: {
                    before: true,
                    after: true,
                },
            },
        },
    ],
    "@typescript-eslint/no-restricted-imports": [
        "error",
        {
            paths: builtinModules
                .map((modName) => {
                    const message = `Use node:${ modName } instead`;
                    return { name: modName, message };
                }),
        },
    ],

    // Covered by TypeScript
    "getter-return": "off",
    "no-async-promise-executor": "off",
    "no-obj-calls": "off",
    "no-caller": "off",
    "no-global-assign": "off",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "off",
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "off",
    "no-eq-null": "off",
    "no-undef": "off",
    "no-undefined": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "new-cap": "off",
    "constructor-super": "off",
    "no-const-assign": "off",
    "no-this-before-super": "off",
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/export": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-deprecated": "off",
    "import/no-extraneous-dependencies": "off",
    "import/unambiguous": "off",
    "import/no-commonjs": "off",
    "import/no-amd": "off",
    "import/no-nodejs-modules": "off",
    "import/no-import-module-exports": "off",
    "import/extensions": "off",

    // Covered by other plugins
    "no-duplicate-imports": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "brace-style": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "default-param-last": "off",
    "dot-notation": "off",
    "func-call-spacing": "off",
    indent: "off",
    "keyword-spacing": "off",
    "lines-between-class-members": "off",
    "no-array-constructor": "off",
    "no-dupe-class-members": "off",
    "no-empty-function": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-implied-eval": "off",
    "no-loop-func": "off",
    "no-loss-of-precision": "off",
    "no-redeclare": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    "object-curly-spacing": "off",
    quotes: "off",
    semi: "off",
    "space-before-function-paren": "off",
    "space-infix-ops": "off",

    // Disabled
    "@typescript-eslint/no-duplicate-imports": "off",
    "no-constant-binary-expression": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "multiline-comment-style": ["off", "starred-block"],
    "@typescript-eslint/no-meaningless-void-operator": "off",
    "@typescript-eslint/method-signature-style": ["off", "property"],
    "@typescript-eslint/no-unnecessary-condition": "off",
    "arrow-body-style": "off",
    "@typescript-eslint/no-loop-func": "off",
    "no-await-in-loop": "off",
    "no-inner-declarations": "off",
    "no-template-curly-in-string": "off",
    "require-atomic-updates": "off",
    "valid-typeof": "off",
    "array-callback-return": "off",
    "class-methods-use-this": "off",
    complexity: "off",
    "guard-for-in": "off",
    "max-classes-per-file": "off",
    "no-constructor-return": "off",
    "no-div-regex": "off",
    "no-labels": "off",
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "no-param-reassign": "off",
    "no-restricted-properties": "off",
    "no-return-await": "off",
    "no-script-url": "off",
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "no-void": "off",
    "prefer-promise-reject-errors": "off",
    "require-await": "off",
    "@typescript-eslint/require-await": "off",
    "require-yield": "off",
    "no-restricted-globals": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-undef-init": "off",
    "capitalized-comments": "off",
    "consistent-this": "off",
    "func-name-matching": "off",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "max-depth": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-statements": "off",
    "multiline-ternary": "off",
    "no-continue": "off",
    "no-mixed-operators": "off",
    "no-nested-ternary": "off",
    "no-restricted-syntax": "off",
    "no-ternary": "off",
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "wrap-regex": "off",
    "no-confusing-arrow": "off",
    "no-restricted-exports": "off",
    "no-restricted-imports": "off",
    "import/no-restricted-paths": "off",
    "import/no-dynamic-require": "off",
    "import/no-internal-modules": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/no-self-import": "off",
    "import/no-cycle": "off",
    "import/no-relative-packages": "off",
    "import/no-relative-parent-imports": "off",
    "import/no-mutable-exports": "off",
    "import/no-unused-modules": "off",
    "import/exports-last": "off",
    "import/no-namespace": "off",
    "import/prefer-default-export": "off",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-default-export": "off",
    "import/no-named-export": "off",
    "import/group-exports": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-new": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/prefer-namespace-keyword": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/typedef": "off",
    "space-before-blocks": "off",

    // Not Applicable
    "block-scoped-var": "off",
    "no-implicit-globals": "off",
    "no-iterator": "off",
    "vars-on-top": "off",
    "wrap-iife": "off",
    strict: "off",
    "no-shadow-restricted-names": "off",

    // Consider in future
    "@typescript-eslint/prefer-readonly-parameter-types": [
        "off",
        {
            checkParameterProperties: true,
            ignoreInferredTypes: true,
            treatMethodsAsReadonly: true,
        },
    ],
};

export = rules;

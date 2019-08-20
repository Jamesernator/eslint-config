"use strict";

module.exports = {
    // ---- TypeScript Errors ----
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": [
        "error",
        // TODO: Deal with Number/BigInt/etc
    ],
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": ["error", {
        checksVoidReturn: false,
    }],
    "@typescript-eslint/no-namespace": [
        "error",
        {
            allowDeclarations: true,
            allowDefinitionFiles: true,
        },
    ],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            varsIgnorePattern: "^_",
            argsIgnorePattern: "^_",
        },
    ],
    "@typescript-eslint/no-use-before-define": [
        "error",
        { classes: false, functions: false },
    ],
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": "error",

    // ---- TypeScript Styles ----
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
        "error",
        { default: "generic" },
    ],
    "@typescript-eslint/camelcase": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/generic-type-naming": [
        "error",
        "^[A-Z]",
    ],
    "@typescript-eslint/indent": [
        "error",
        4,
        { ignoredNodes: ["ConditionalExpression"], flatTernaryExpressions: true },
    ],
    "@typescript-eslint/member-delimiter-style": [
        "error",
        {
            multiline: {
                delimiter: "comma",
                requireLast: true,
            },
            singleline: {
                delimiter: "comma",
                requireLast: false,
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
            },
        },
    ],
    "@typescript-eslint/member-naming": [
        "error",
        { private: "^_" },
    ],
    "@typescript-eslint/member-ordering": [
        "error",
        {
            default: [
                "static-field",

                "static-method",

                "instance-field",

                "private-constructor",
                "constructor",

                "instance-method",
            ],
        },
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-object-literal-type-assertion": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/type-annotation-spacing": [
        "error",
        {
            before: false,
            after: true,
            overrides: {
                arrow: { before: true, after: true },
            },
        },
    ],
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow",
        },
    ],

    // ---- TypeScript disabled ----
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/typedef": "off",

    // Disable other rules that will handled by typescript indent

    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/export": "off",
    "import/no-unresolved": "off",
    semi: "off",
    indent: "off",
    "no-undef": "off",
};

"use strict";

module.exports = [
    {
        files: "**/*.cjs",
        parserOptions: {
            sourceType: "script",
        },
        env: {
            node: true,
        },
        rules: {
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-require-imports": "off",
        },
    },
    {
        files: ["**/*.mjs", "**/*.js"],
        rules: {
            "no-undef": "error",
            "no-dupe-class-members": "error",
            "@typescript-eslint/restrict-plus-operands": "off",
        },
        overrides: [
            {
                files: "**/.eslintrc.js",
                parserOptions: {
                    sourceType: "script",
                },
                env: {
                    node: true,
                },
                rules: {
                    "@typescript-eslint/no-var-requires": "off",
                    "@typescript-eslint/no-require-imports": "off",
                },
            },
        ],
    },
    {
        files: "**/*.d.ts",
        rules: {
            "import/unambiguous": "off",
            "import/prefer-default": "off",
        },
    },
];

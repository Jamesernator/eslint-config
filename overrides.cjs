"use strict";
const parserOptions = require("./js/parserOptions.cjs");

const cjsOverrides = {
    parserOptions: {
        ...parserOptions,
        sourceType: "script",
    },
    env: {
        node: true,
    },
    rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off",
    },
};

module.exports = [
    {
        files: "**/*.cjs",
        ...cjsOverrides,
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
                ...cjsOverrides,
            },
            {
                files: "**/*.script.js",
                parserOptions: {
                    ...parserOptions,
                    sourceType: "script",
                },
                rules: {
                    "import/unambiguous": "off",
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

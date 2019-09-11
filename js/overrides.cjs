"use strict";

module.exports = [
    {
        files: ["**/*.cjs", "**/.eslintrc.js"],
        parserOptions: {
            sourceType: "script",
        },
        env: {
            node: true,
        },
    },
];

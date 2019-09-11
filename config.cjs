"use strict";
const rules = require("./rules.cjs");
const overrides = require("./overrides.cjs");
const plugins = require("./plugins.cjs");
const parserOptions = require("./js/parserOptions.cjs");

module.exports = function createEslintConfig({ project="./tsconfig.json" }={}) {
    return {
        root: true,
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ...parserOptions,
            project,
        },
        plugins,
        overrides,
        rules,
    };
};

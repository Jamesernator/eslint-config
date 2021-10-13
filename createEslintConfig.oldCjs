"use strict";
const parserOptions = require("./js/parserOptions.cjs");
const overrides = require("./overrides.cjs");
const plugins = require("./plugins.cjs");
const rules = require("./rules.cjs");

module.exports = function createEslintConfig({ project="./tsconfig.json" }={}) {
    return {
        root: true,
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ...parserOptions,
            project,
            extraFileExtensions: [".cjs", ".mjs"],
        },
        plugins,
        overrides,
        rules,
    };
};

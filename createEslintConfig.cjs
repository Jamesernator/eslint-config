"use strict";
const baseRules = require("./baseRules.cjs");
const typescriptRules = require("./typescriptRules.cjs");
const overrides = require("./overrides.cjs");

module.exports = function createEslintConfig({ typescript=true, project="./tsconfig.json" }={}) {
    const plugins = [
        "import",
    ];

    const parserOptions = { sourceType = "module" };

    if (typescript) {
        parserOptions.project = project;
    }

    if (typescript) {
        plugins.push("@typescript-eslint/eslint-plugin");
    }

    const rules = { ...baseRules };

    if (typescript) {
        Object.assign(rules, typescriptRules);
    }

    const config = {
        root: true,
        plugins,

        parserOptions,

        overrides,

        env: {
            es6: true,
        },

        rules: {

        },
    };

    if (typescript) {
        Object.assign(config, { parser: "@typescript-eslint/parser" });
    }

    return config;
};

"use strict";

module.exports = function createEslintConfig() {
    return {
        root: true,
        plugins: require("./plugins.cjs"),
        parserOptions: require("./parserOptions.cjs"),
        overrides: require("./overrides.cjs"),
        rules: require("./rules.cjs"),
    };
};

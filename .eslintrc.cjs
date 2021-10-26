"use strict";
const path = require("path");
const createEslintConfig = require("./createEslintConfig.cjs");

module.exports = createEslintConfig({
    project: path.join(__dirname, "./tsconfig.json"),
});

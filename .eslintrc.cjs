"use strict";
const path = require("path");
const createEslintConfig = require("./createEslintConfig.js");

module.exports = createEslintConfig({
    project: path.join(__dirname, "./tsconfig.json"),
    type: "commonjs",
});

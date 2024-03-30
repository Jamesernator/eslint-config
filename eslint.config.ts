import path from "node:path";
import createEslintConfig from "./createEslintConfig.js";

const eslintConfig = createEslintConfig({
    project: path.join(import.meta.dirname, "./tsconfig.json"),
    type: "module",
});

export default eslintConfig;

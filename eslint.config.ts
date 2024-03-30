import createEslintConfig from "./createEslintConfig.js";

const eslintConfig = createEslintConfig({
    type: "module",
    tsconfigRootDir: import.meta.dirname,
});

export default eslintConfig;

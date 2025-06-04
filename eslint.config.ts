import createEslintConfig from "./createEslintConfig.ts";

const eslintConfig = createEslintConfig({
    type: "module",
    tsconfigRootDir: import.meta.dirname,
});

export default eslintConfig;

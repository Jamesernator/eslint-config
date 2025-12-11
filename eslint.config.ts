import createEslintConfig from "./createEslintConfig.ts";

const eslintConfig = createEslintConfig({
    tsconfigRootDir: import.meta.dirname,
    type: "module",
});

export default eslintConfig;

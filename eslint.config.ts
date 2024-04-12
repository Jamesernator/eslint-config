import createEslintConfig from "./createEslintConfig.js";

const eslintConfig = createEslintConfig({
    type: "module",
    tsconfigRootDir: import.meta.dirname,
    rules: {
        "import/first": "error",
    },
});

export default eslintConfig;

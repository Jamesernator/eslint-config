import type { Linter } from "eslint";
import createEslintConfig from "./createEslintConfig.ts";

const eslintConfig: ReadonlyArray<Linter.Config> = createEslintConfig({
    tsconfigRootDir: import.meta.dirname,
    type: "module",
});

export default eslintConfig;

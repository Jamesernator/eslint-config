import type { EslintRules } from "./EslintRules.js";

export type CreateEslintConfigOptions = Readonly<{
    project: string;
    type?: "commonjs" | "module";
    rules?: Partial<EslintRules>;
}>;

import type { EslintRules } from "./EslintRules.cjs";

const rules: EslintRules = {
    // Error Direction
    "for-direction": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-constant-condition": ["error", {
        checkLoops: false,
    }],
    "no-control-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-invalid-regexp": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": ["error", {
        disallowArithmeticOperators: true,
    }],
    "no-useless-backreference": "error",
    "use-isnan": "error",
    "consistent-return": "error",
    "curly": ["error", "multi-line"],
    "eqeqeq": ["error", "always", {
        null: "ignore",
    }],
    "no-case-declarations": "error",
    "no-extra-bind": "error",
    "no-fallthrough": ["error", {
        commentPattern: "^continue$"
    }],
    "no-implied-eval": "error",
    "no-loop-func": "error",

    // Code Health
    "no-console": "error",
    "no-debugger": "error",
    "no-ex-assign": "error",
    "accessor-pairs": ["error", {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
    }],
    "default-case": "error",
    "default-param-last": "error",
    "no-alert": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-lone-blocks": "error",

    // Code Style
    "no-empty": ["error", {
        allowEmptyCatch: false,
    }],
    "no-extra-boolean-cast": ["error", {
        enforceForLogicalOperands: false,
    }],
    "no-extra-parens": ["error", "all", {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: true,

        enforceForArrowConditionals: true,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: true,
        enforceForFunctionPrototypeMethods: true,
    }],
    "no-extra-semi": "error",
    "no-irregular-whitespace": "error",
    "default-case-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": ["error", {
        allowKeywords: true,
    }],
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "no-else-return": ["error", {
        allowElseIf: true,
    }],
    "no-empty-function": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": ["error", {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: false,
    }],
    "no-multi-spaces": "error",

    // Covered by TypeScript
    "getter-return": "off",
    "no-async-promise-executor": "off",
    "no-obj-calls": "off",
    "no-caller": "off",
    "no-global-assign": "off",
    "no-invalid-this": "off",

    // Disabled
    "no-await-in-loop": "off",
    "no-inner-declarations": "off",
    "no-template-curly-in-string": "off",
    "require-atomic-updates": "off",
    "valid-typeof": "off",
    "array-callback-return": "off",
    "class-methods-use-this": "off",
    "complexity": "off",
    "guard-for-in": "off",
    "max-classes-per-file": "off",
    "no-constructor-return": "off",
    "no-div-regex": "off",
    "no-eq-null": "off",
    "no-labels": "off",
    "no-magic-numbers": "off",

    // Not Applicable
    "block-scoped-var": "off",
    "no-implicit-globals": "off",
    "no-iterator": "off",
};

export = rules;

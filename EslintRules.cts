
type ErrorLevel = "off" | "warn" | "error";

export type RuleOptions<
    Options extends any[] | [any] = []
    > = ErrorLevel | [ErrorLevel, ...Options];

type AccessibilityLevel =
    | 'explicit'
    | 'no-public'
    | 'off';

export type EslintRules = {
    "for-direction": RuleOptions,
    "getter-return": RuleOptions<[{ allowImplicit?: boolean }]>,
    "no-async-promise-executor": RuleOptions,
    "no-await-in-loop": RuleOptions,
    "no-compare-neg-zero": RuleOptions,
    "no-cond-assign": RuleOptions<["except-parens" | "always"]>,
    "no-console": RuleOptions<[{ allow?: string[] }]>,
    "no-constant-condition": RuleOptions<[{ checkLoops?: boolean }]>,
    "no-control-regex": RuleOptions,
    "no-debugger": RuleOptions,
    "no-dupe-args": RuleOptions,
    "no-dupe-else-if": RuleOptions,
    "no-dupe-keys": RuleOptions,
    "no-duplicate-case": RuleOptions,
    "no-empty": RuleOptions<[{ allowEmptyCatch?: boolean }]>,
    "no-empty-character-class": RuleOptions,
    "no-ex-assign": RuleOptions,
    "no-extra-boolean-cast": RuleOptions<[{
        enforceForLogicalOperands?: boolean,
    }]>,
    "no-extra-parens": RuleOptions<["all" | "functions", {
        conditionalAssign?: boolean,
        returnAssign?: boolean,
        nestedBinaryExpressions?: boolean,
        ignoreJSX?: boolean,
        enforceForArrowConditionals?: boolean,
        enforceForSequenceExpressions?: boolean,
        enforceForNewInMemberExpressions?: boolean,
        enforceForFunctionPrototypeMethods?: boolean,
    }]>,
    "no-extra-semi": RuleOptions,
    "no-func-assign": RuleOptions,
    "no-import-assign": RuleOptions,
    "no-inner-declarations": RuleOptions<["functions" | "both"]>,
    "no-invalid-regexp": RuleOptions,
    "no-irregular-whitespace": RuleOptions<[{
        skipStrings?: boolean,
        skipComments?: boolean,
        skipRegExps?: boolean,
        skipTemplates?: boolean,
    }]>,
    "no-loss-of-precision": RuleOptions,
    "no-misleading-character-class": RuleOptions,
    "no-obj-calls": RuleOptions,
    "no-promise-executor-return": RuleOptions,
    "no-prototype-builtins": RuleOptions,
    "no-regex-spaces": RuleOptions,
    "no-setter-return": RuleOptions,
    "no-sparse-arrays": RuleOptions,
    "no-template-curly-in-string": RuleOptions,
    "no-unexpected-multiline": RuleOptions,
    "no-unreachable": RuleOptions,
    "no-unreachable-loop": RuleOptions<[{
        ignore?: ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[],
    }]>,
    "no-unsafe-finally": RuleOptions,
    "no-unsafe-negation": RuleOptions<[{
        enforceForOrderingRelations?: boolean,
    }]>,
    "no-unsafe-optional-chaining": RuleOptions<[{
        disallowArithmeticOperators?: boolean,
    }]>,
    "no-useless-backreference": RuleOptions,
    "require-atomic-updates": RuleOptions,
    "use-isnan": RuleOptions,
    "valid-typeof": RuleOptions,

    "accessor-pairs": RuleOptions<[{
        setWithoutGet?: boolean,
        getWithoutSet?: boolean,
        enforceForClassMembers?: boolean,
    }]>,
    "array-callback-return": RuleOptions<[{
        allowImplicit?: boolean,
        checkForEach?: boolean,
    }]>,
    "block-scoped-var": RuleOptions,
    "class-methods-use-this": RuleOptions<[{
        exceptMethods?: string[],
    }]>,
    "complexity": RuleOptions<[{ max?: number }]>,
    "consistent-return": RuleOptions<[{
        treatUndefinedAsUnspecified?: boolean,
    }]>,
    "curly": RuleOptions<[
        "all" | "multi" | "multi-line" | "multi-or-nest" | "consistent",
    ]>,
    "default-case": RuleOptions<[{
        commentPattern?: string,
    }]>,
    "default-case-last": RuleOptions,
    "default-param-last": RuleOptions,
    "dot-location": RuleOptions<[
        "object" | "property",
    ]>,
    "dot-notation": RuleOptions<[{
        allowKeywords?: boolean,
        allowPattern?: boolean,
    }]>,
    "eqeqeq": RuleOptions<[
        "always" | "smart",
        { null?: "always" | "never" | "ignore" },
    ]>,
    "grouped-accessor-pairs": RuleOptions<[
        "getBeforeSet" | "setBeforeGet",
    ]>,
    "guard-for-in": RuleOptions,
    "max-classes-per-file": RuleOptions<[number]>,
    "no-alert": RuleOptions,
    "no-caller": RuleOptions,
    "no-case-declarations": RuleOptions,
    "no-constructor-return": RuleOptions,
    "no-div-regex": RuleOptions,
    "no-else-return": RuleOptions<[{
        allowElseIf?: boolean,
    }]>,
    "no-empty-function": RuleOptions<[{
        allow?: string[],
    }]>,
    "no-empty-pattern": RuleOptions,
    "no-eq-null": RuleOptions,
    "no-eval": RuleOptions<[{
        allowIndirect?: boolean,
    }]>,
    "no-extend-native": RuleOptions,
    "no-extra-bind": RuleOptions,
    "no-extra-label": RuleOptions,
    "no-fallthrough": RuleOptions<[{
        commentPattern?: string,
    }]>,
    "no-floating-decimal": RuleOptions,
    "no-global-assign": RuleOptions<[{
        exceptions?: string[],
    }]>,
    "no-implicit-coercion": RuleOptions<[{
        boolean?: boolean,
        number?: boolean,
        string?: boolean,
        disallowTemplateShorthand?: boolean,
        allow?: string[],
    }]>,
    "no-implicit-globals": RuleOptions<[{
        lexicalBindings?: boolean,
    }]>,
    "no-implied-eval": RuleOptions,
    "no-invalid-this": RuleOptions<[{
        capIsConstructor?: boolean,
    }]>,
    "no-iterator": RuleOptions,
    "no-labels": RuleOptions<[{
        allowLoop?: boolean,
        allowSwitch?: boolean,
    }]>,
    "no-lone-blocks": RuleOptions,
    "no-loop-func": RuleOptions,
    "no-magic-numbers": RuleOptions<[{
        ignore?: (string | number)[],
        ignoreArrayIndexes?: boolean,
        ignoreDefaultValues?: boolean,
        enforceConst?: boolean,
        detectObjects?: boolean,
    }]>,
    "no-multi-spaces": RuleOptions<[{
        ignoreEOLComments?: boolean,
    }]>,
    "no-multi-str": RuleOptions,
    "no-new": RuleOptions,
    "no-new-func": RuleOptions,
    "no-new-wrappers": RuleOptions,
    "no-nonoctal-decimal-escape": RuleOptions,
    "no-octal": RuleOptions,
    "no-octal-escape": RuleOptions,
    "no-param-reassign": RuleOptions<[{
        props?: boolean,
        ignorePropertyModificationsFor?: string[],
        ignorePropertyModificationsForRegex?: string[],
    }]>,
    "no-proto": RuleOptions,
    "no-redeclare": RuleOptions<[{
        builtinGlobals?: boolean,
    }]>,
    "no-restricted-properties": RuleOptions,
    "no-return-assign": RuleOptions<[
        "except-parens" | "always",
    ]>,
    "no-return-await": RuleOptions,
    "no-script-url": RuleOptions,
    "no-self-assign": RuleOptions<[{
        props?: boolean,
    }]>,
    "no-self-compare": RuleOptions,
    "no-sequences": RuleOptions<[{
        allowInParentheses?: boolean,
    }]>,
    "no-throw-literal": RuleOptions,
    "no-unmodified-loop-condition": RuleOptions,
    "no-unused-expressions": RuleOptions<[{
        allowShortCircuit?: boolean,
        allowTernary?: boolean,
        allowTaggedTemplates?: boolean,
        enforceForJSX?: boolean,
    }]>,
    "no-unused-labels": RuleOptions,
    "no-useless-call": RuleOptions,
    "no-useless-catch": RuleOptions,
    "no-useless-concat": RuleOptions,
    "no-useless-escape": RuleOptions,
    "no-useless-return": RuleOptions,
    "no-void": RuleOptions<[{
        allowAsStatement?: boolean,
    }]>,
    "no-warning-comments": RuleOptions<[{
        terms?: string[],
        location?: "start" | "anywhere",
    }]>,
    "no-with": RuleOptions,
    "prefer-named-capture-group": RuleOptions,
    "prefer-promise-reject-errors": RuleOptions<[{
        allowEmptyReject?: boolean,
    }]>,
    "prefer-regex-literals": RuleOptions<[{
        disallowRedundantWrapping?: boolean,
    }]>,
    "radix": RuleOptions<[
        "always" | "as-needed",
    ]>,
    "require-await": RuleOptions,
    "require-unicode-regexp": RuleOptions,
    "vars-on-top": RuleOptions,
    "wrap-iife": RuleOptions<[
        "outside" | "inside" | "any",
        { functionPrototypeMethods?: boolean },
    ]>,
    "yoda": RuleOptions<[
        "never" | "always",
        { exceptRange?: boolean, onlyEquality?: boolean },
    ]>,

    "strict": RuleOptions<[
        "safe" | "global" | "function" | "never",
    ]>,

    "init-declarations": RuleOptions<[
        "always" | "never",
        { ignoreForLoopInit?: boolean },
    ]>,
    "no-delete-var": RuleOptions,
    "no-label-var": RuleOptions,
    "no-restricted-globals": RuleOptions<string[]>,
    "no-shadow": RuleOptions<[{
        builtinGlobals?: boolean,
        hoist?: "functions" | "all" | "never",
        allow?: string[],
    }]>,
    "no-shadow-restricted-names": RuleOptions,
    "no-undef": RuleOptions<[{
        typeof?: boolean,
    }]>,
    "no-undef-init": RuleOptions,
    "no-undefined": RuleOptions,
    "no-unused-vars": RuleOptions<[{
        vars?: "all" | "local",
        varsIgnorePattern?: string,
        args?: "after-used" | "all" | "none",
        ignoreRestSiblings?: boolean,
        argsIgnorePattern?: string,
        caughtErrors?: "none" | "all",
        caughtErrorsIgnorePattern?: string,
    }]>,
    "no-use-before-define": RuleOptions<[{
        functions?: boolean,
        classes?: boolean,
        variables?: boolean,
    }]>,

    "array-bracket-newline": RuleOptions<[
        "always" | "never" | "consistent" | {
            multiline?: boolean,
            minItems?: null | number,
        },
    ]>,
    "array-bracket-spacing": RuleOptions<["never" | "always", {
        singleValue?: boolean,
        objectsInArrays?: boolean,
        arraysInArrays?: boolean,
    }]>,
    "array-element-newline": RuleOptions<[
        "always" | "never" | "consistent" | {
            multiline?: boolean,
            minItems?: null | number,
            always?: null | boolean,
        },
    ]>,
    "block-spacing": RuleOptions<[
        "always" | "never"
    ]>,
    "brace-style": RuleOptions<[
        "1tbs" | "stroustrup" | "allman",
        { allowSingleLine?: boolean },
    ]>,
    "camelcase": RuleOptions<[
        properties?: "always" | "never",
        ignoreDestructuring?: boolean,
        ignoreImports?: boolean,
        ignoreGlobals?: boolean,
        allow?: string[],
    ]>,
    "capitalized-comments": RuleOptions<[
        ignorePattern?: string,
        ignoreInlineComments?: boolean,
        ignoreConsecutiveComments?: boolean,
    ]>,
    "comma-dangle": RuleOptions<[{
        arrays?: "never" | "always" | "always-multiline" | "only-multiline",
        objects?: "never" | "always" | "always-multiline" | "only-multiline",
        imports?: "never" | "always" | "always-multiline" | "only-multiline",
        exports?: "never" | "always" | "always-multiline" | "only-multiline",
        functions?: "never" | "always" | "always-multiline" | "only-multiline",
    }]>,
    "comma-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
    }]>,
    "comma-style": RuleOptions<[
        "last" | "first",
    ]>,
    "computed-property-spacing": RuleOptions<[
        "always" | "never",
        { enforceForClassMembers?: boolean }
    ]>,
    "consistent-this": RuleOptions,
    "eol-last": RuleOptions<["always" | "never"]>,
    "func-call-spacing": RuleOptions<["never" | "always"]>,
    "func-name-matching": RuleOptions<[{
        considerPropertyDescriptor?: boolean,
        includeCommonJSModuleExports?: boolean,
    }]>,
    "func-names": RuleOptions<["always" | "as-needed" | "never", {
        generators?: "always" | "as-needed" | "never",
    }]>,
    "func-style": RuleOptions<[
        "expression" | "declaration",
        { allowArrowFunctions?: boolean },
    ]>,
    "function-call-argument-newline": RuleOptions<[
        "always" | "never" | "consistent",
    ]>,
    "function-paren-newline": RuleOptions<[
        "always" | "never" | "multiline" | "multiline-arguments" | "consistent",
    ]>,
    // TODO
    "id-denylist": RuleOptions,
    // TODO
    "id-length": RuleOptions,
    // TODO
    "id-match": RuleOptions,
    "implicit-arrow-linebreak": RuleOptions<[
        "beside" | "below",
    ]>,
    "indent": RuleOptions<[
        number | "tab",
        {
            ignoredNodes?: string[],
            SwitchCase?: number,
            VariableDeclarator?: number | "first",
            outerIIFEBody?: number | "off",
            MemberExpression?: number | "off",
            FunctionDeclaration?: {
                parameters?: number | "off",
                body?: number,
            },
            FunctionExpression?: {
                parameters?: number | "off",
                body?: number,
            },
            CallExpression?: {
                arguments: number,
            },
            ArrayExpression?: number | "first" | "off",
            ObjectExpression?: number | "first" | "off",
            ImportDeclaration?: number | "first" | "off",
            flatTernaryExpressions?: boolean,
            offsetTernaryExpressions?: boolean,
            ignoreComments?: boolean,
        },
    ]>,
    "jsx-quotes": RuleOptions<[
        "prefer-single" | "prefer-double",
    ]>,
    "key-spacing": RuleOptions<[{
        beforeColon?: boolean,
        afterColon?: boolean,
        mode?: "strict" | "minimum",
        align?: "value" | "colon",
    }]>,
    "keyword-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
        overrides?: string[],
    }]>,
    "line-comment-position": RuleOptions<[
        "above" | "beside",
    ]>,
    "linebreak-style": RuleOptions<[
        "unix" | "windows",
    ]>,
    "lines-around-comment": RuleOptions<[{
        beforeBlockComment?: boolean,
        afterBlockComment?: boolean,
        beforeLineComment?: boolean,
        afterLineComment?: boolean,
        allowBlockStart?: boolean,
        allowBlockEnd?: boolean,
        allowObjectStart?: boolean,
        allowObjectEnd?: boolean,
        allowArrayStart?: boolean,
        allowArrayEnd?: boolean,
        allowClassStart?: boolean,
        allowClassEnd?: boolean,
        applyDefaultIgnorePatterns?: boolean,
        ignorePattern?: string,
    }]>,
    "lines-between-class-members": RuleOptions<[
        "always" | "never",
        { exceptAfterSingleLine?: boolean },
    ]>,
    "max-depth": RuleOptions<[{ max?: number }]>,
    "max-len": RuleOptions<[{
        code?: number,
        tabWidth?: number,
        comments?: number,
        ignorePattern?: string,
        ignoreComments?: boolean,
        ignoreTrailingComments?: boolean,
        ignoreUrls?: boolean,
        ignoreStrings?: boolean,
        ignoreTemplateLiterals?: boolean,
        ignoreRegExpLiterals?: boolean,
    }]>,
    "max-lines": RuleOptions<[{
        max?: number,
        skipBlankLines?: boolean,
        skipComments?: boolean,
    }]>,
    // TODO
    "max-lines-per-function": RuleOptions,
    "max-nested-callbacks": RuleOptions<[{
        max?: number,
    }]>,
    "max-params": RuleOptions<[{ max?: number }]>,
    // TODO
    "max-statements": RuleOptions,
    "max-statements-per-line": RuleOptions<[{
        max?: number,
    }]>,
    "multiline-comment-style": RuleOptions<[
        "starred-block" | "bare-block" | "separate-lines",
    ]>,
    "multiline-ternary": RuleOptions<[
        "always" | "always-multiline" | "never",
    ]>,
    "new-cap": RuleOptions<[{
        newIsCap?: boolean,
        capIsNew?: boolean,
        newIsCapExceptions?: string[],
        newIsCapExceptionPattern?: string,
        capIsNewExceptions?: string[],
        capIsNewExceptionPattern?: string,
        properties?: boolean,
    }]>,
    "new-parens": RuleOptions<["always" | "never"]>,
    "newline-per-chained-call": RuleOptions<[{
        ignoreChainWithDepth?: number,
    }]>,
    "no-array-constructor": RuleOptions,
    "no-bitwise": RuleOptions<[{
        allow?: string[],
        int32Hint?: boolean,
    }]>,
    "no-continue": RuleOptions,
    "no-inline-comments": RuleOptions,
    "no-lonely-if": RuleOptions,
    // TODO
    "no-mixed-operators": RuleOptions,
    "no-mixed-spaces-and-tabs": RuleOptions<[] | ["smart-tabs"]>,
    "no-multi-assign": RuleOptions<[{
        ignoreNonDeclaration?: boolean,
    }]>,
    "no-multiple-empty-lines": RuleOptions<[{
        max?: number,
        maxEOF?: number,
        maxBOF?: number,
    }]>,
    "no-negated-condition": RuleOptions,
    "no-nested-ternary": RuleOptions,
    "no-new-object": RuleOptions,
    "no-plusplus": RuleOptions<[{
        allowForLoopAfterthoughts?: boolean,
    }]>,
    // TODO
    "no-restricted-syntax": RuleOptions,
    "no-tabs": RuleOptions<[{
        allowIndentationTabs?: boolean,
    }]>,
    "no-ternary": RuleOptions,
    "no-trailing-spaces": RuleOptions<[{
        skipBlankLines?: boolean,
        ignoreComments?: boolean,
    }]>,
    "no-underscore-dangle": RuleOptions<[{
        allow?: boolean,
        allowAfterThis?: boolean,
        allowAfterSuper?: boolean,
        allowAfterThisConstructor?: boolean,
        enforceInMethodNames?: boolean,
        allowFunctionParams?: boolean,
    }]>,
    "no-unneeded-ternary": RuleOptions<[{
        defaultAssignment?: boolean,
    }]>,
    "no-whitespace-before-property": RuleOptions,
    "nonblock-statement-body-position": RuleOptions<[
        "beside" | "below" | "any",
    ]>,
    "object-curly-newline": RuleOptions<[
        "always" | "never" | {
            multiline?: boolean,
            minProperties?: number,
            consistent?: boolean,
        },
    ]>,
    "object-curly-spacing": RuleOptions<[
        "never" | "always",
        {
            arraysInObjects?: boolean,
            objectsInObjects?: boolean,
        },
    ]>,
    "object-property-newline": RuleOptions<[{
        allowAllPropertiesOnSameLine?: boolean,
    }]>,
    "one-var": RuleOptions<[
        "always" | "never" | "consistent" | {
            initialized?: "always" | "never" | "consecutive",
            uninitialized?: "always" | "never" | "consecutive",
        },
    ]>,
    "one-var-declaration-per-line": RuleOptions<[
        "initializations" | "always",
    ]>,
    "operator-assignment": RuleOptions<[
        "always" | "never",
    ]>,
    "operator-linebreak": RuleOptions<[
        "before" | "after" | "none",
    ]>,
    "padded-blocks": RuleOptions<[
        "always" | "never",
        { allowSingleLineBlocks?: boolean },
    ]>,
    // TODO
    "padding-line-between-statements": RuleOptions,
    "prefer-exponentiation-operator": RuleOptions,
    "prefer-object-spread": RuleOptions,
    "quote-props": RuleOptions<[
        "always" | "as-needed" | "consistent" | "consistent-as-needed",
        {
            keywords?: boolean,
            unnecessary?: boolean,
            numbers?: boolean,
        },
    ]>,
    "quotes": RuleOptions<[
        "single" | "double",
        {
            avoidEscape?: boolean,
            allowTemplateLiterals?: boolean,
        },
    ]>,
    "semi": RuleOptions<[
        "always" | "never",
    ]>,
    "semi-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
    }]>,
    "semi-style": RuleOptions<[
        "last" | "first",
    ]>,
    "sort-keys": RuleOptions<[
        "asc" | "desc",
        {
            caseSensitive?: boolean,
            minKeys?: boolean,
            natural?: boolean,
        },
    ]>,
    "sort-vars": RuleOptions<[{
        ignoreCase?: boolean,
    }]>,
    "space-before-blocks": RuleOptions<[{
        functions?: "always" | "never" | "off",
        keywords?: "always" | "never" | "off",
        classes?: "always" | "never" | "off",
    }]>,
    "space-before-function-paren": RuleOptions<[{
        anonymous?: "always" | "never" | "ignore",
        named?: "always" | "never" | "ignore",
        asyncArrow?: "always" | "never" | "ignore",
    }]>,
    "space-in-parens": RuleOptions<[
        "always" | "never",
    ]>,
    "space-infix-ops": RuleOptions<[{
        int32Hint?: boolean,
    }]>,
    "space-unary-ops": RuleOptions<[{
        words?: boolean,
        nonwords?: boolean,
    }]>,
    "spaced-comment": RuleOptions<["always" | "never"]>,
    "switch-colon-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
    }]>,
    "template-tag-spacing": RuleOptions<[
        "never" | "always",
    ]>,
    "unicode-bom": RuleOptions<[
        "never" | "always",
    ]>,
    "wrap-regex": RuleOptions,

    "arrow-body-style": RuleOptions<[
        "always" | "as-needed" | "never",
        { requireReturnForObjectLiteral?: boolean },
    ]>,
    "arrow-parens": RuleOptions<
        ["always"]
        | ["as-needed", { requireForBlockBody?: boolean }]
    >,
    "arrow-spacing": RuleOptions<[
        { before?: boolean, after?: boolean },
    ]>,
    "constructor-super": RuleOptions,
    "generator-star-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
        named?: {
            before?: boolean,
            after?: boolean,
        },
        anonymous?: {
            before?: boolean,
            after?: boolean,
        },
        method?: {
            before?: boolean,
            after?: boolean,
        },
    }]>,
    "no-class-assign": RuleOptions,
    "no-confusing-arrow": RuleOptions<[{
        allowParens?: boolean,
    }]>,
    "no-const-assign": RuleOptions,
    "no-dupe-class-members": RuleOptions,
    "no-duplicate-imports": RuleOptions<[{
        includeExports?: boolean,
    }]>,
    "no-new-symbol": RuleOptions,
    // TODO
    "no-restricted-exports": RuleOptions,
    "no-restricted-imports": RuleOptions<[{
        paths?: { name: string, message?: string }[],
    }]>,
    "no-this-before-super": RuleOptions,
    "no-useless-computed-key": RuleOptions<[{
        enforceForClassMembers?: boolean,
    }]>,
    "no-useless-constructor": RuleOptions,
    "no-useless-rename": RuleOptions<[{
        ignoreImport?: boolean,
        ignoreExport?: boolean,
        ignoreDestructuring?: boolean,
    }]>,
    "no-var": RuleOptions,
    "object-shorthand": RuleOptions<[
        "always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed",
        {
            avoidQuotes?: boolean,
            ignoreConstructors?: boolean,
            avoidExplicitReturnArrows?: boolean,
        },
    ]>,
    "prefer-arrow-callback": RuleOptions<[{
        allowNamedFunctions?: boolean,
        allowUnboundThis?: boolean,
    }]>,
    "prefer-const": RuleOptions<[{
        destructuring?: "any" | "all",
        ignoreReadBeforeAssign?: boolean,
    }]>,
    "prefer-destructuring": RuleOptions<[{
        array?: boolean,
        object?: boolean,
    }, {
        enforceForRenamedProperties?: boolean,
    }]>,
    "prefer-numeric-literals": RuleOptions,
    "prefer-rest-params": RuleOptions,
    "prefer-spread": RuleOptions,
    "prefer-template": RuleOptions,
    "require-yield": RuleOptions,
    "rest-spread-spacing": RuleOptions<[
        "never" | "always",
    ]>,
    "sort-imports": RuleOptions<[{
        ignoreCase?: boolean,
        ignoreDeclarationSort?: boolean,
        ignoreMemberSort?: boolean,
        allowSeparatedGroups?: boolean,
        // TODO: Member sort order
    }]>,
    "symbol-description": RuleOptions,
    "template-curly-spacing": RuleOptions<[
        "never" | "always",
    ]>,
    "yield-star-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
    }]>,

    // TODO
    "import/no-unresolved": RuleOptions,
    // TODO
    "import/named": RuleOptions,
    // TODO
    "import/default": RuleOptions,
    // TODO
    "import/namespace": RuleOptions,
    // TODO
    "import/no-restricted-paths": RuleOptions,
    "import/no-absolute-path": RuleOptions<[{
        esmodule?: boolean,
        commonjs?: boolean,
        amd?: boolean,
    }]>,
    "import/no-dynamic-require": RuleOptions,
    // TODO
    "import/no-internal-modules": RuleOptions,
    "import/no-webpack-loader-syntax": RuleOptions,
    "import/no-self-import": RuleOptions,
    "import/no-cycle": RuleOptions<[{
        maxDepth?: number,
        ignoreExternal?: boolean,
    }]>,
    "import/no-useless-path-segments": RuleOptions<[{
        noUselessIndex?: boolean,
        commonjs?: boolean,
    }]>,
    "import/no-relative-parent-imports": RuleOptions,
    "import/no-relative-packages": RuleOptions,

    "import/export": RuleOptions,
    "import/no-named-as-default": RuleOptions,
    "import/no-named-as-default-member": RuleOptions,
    "import/no-deprecated": RuleOptions,
    "import/no-extraneous-dependencies": RuleOptions<[{
        devDependencies?: boolean,
        optionalDependencies?: boolean,
        peerDependencies?: boolean,
        bundledDependencies?: boolean,
    }]>,
    "import/no-mutable-exports": RuleOptions,
    "import/no-unused-modules": RuleOptions<[{
        missingExports?: boolean,
        unusedExports?: boolean,
        src?: string[],
        ignoreExports?: boolean,
    }]>,
    "import/unambiguous": RuleOptions,
    "import/no-commonjs": RuleOptions<[{
        allowRequire?: boolean,
        allowConditionalRequire?: boolean,
        allowPrimitiveModules?: boolean,
    }]>,
    "import/no-amd": RuleOptions,
    "import/no-nodejs-modules": RuleOptions<[{
        allow?: string[],
    }]>,

    // TODO
    "import/first": RuleOptions,
    "import/exports-last": RuleOptions,
    "import/no-duplicates": RuleOptions<[{
        considerQueryString?: boolean,
    }]>,
    "import/no-namespace": RuleOptions,
    "import/extensions": RuleOptions<[
        "never" | "always" | "ignorePackages",
    ]>,
    "import/order": RuleOptions<[{
        groups?: (string | string[])[],
        pathGroups?: { pattern: string, group: string }[],
        pathGroupsExcludedImportTypes?: string,
        "newlines-between"?:
        | "ignore"
        | "always"
        | "always-and-inside-groups"
        | "never",
        alphabetize?: {
            order: "asc" | "desc" | "ignore",
            caseInsensitive?: boolean,
        },
    }]>,
    "import/newline-after-import": RuleOptions<[{
        count?: number,
    }]>,
    "import/prefer-default-export": RuleOptions,
    // TODO
    "import/max-dependencies": RuleOptions,
    "import/no-unassigned-import": RuleOptions<[{
        allow?: string[],
    }]>,
    "import/no-named-default": RuleOptions,
    "import/no-default-export": RuleOptions,
    "import/no-named-export": RuleOptions,
    "import/no-anonymous-default-export": RuleOptions<[{
        allowArray?: boolean,
        allowArrowFunction?: boolean,
        allowAnonymousClass?: boolean,
        allowAnonymousFunction?: boolean,
        allowCallExpression?: boolean,
        allowLiteral?: boolean,
        allowObject?: boolean,
    }]>,
    "import/group-exports": RuleOptions,
    // TODO
    "import/no-import-module-exports": RuleOptions,

    "@typescript-eslint/adjacent-overload-signatures": RuleOptions,
    "@typescript-eslint/array-type": RuleOptions<[{
        default?: "array" | "generic" | "array-simple",
        readonly?: "array" | "generic" | "array-simple",
    }]>,
    "@typescript-eslint/await-thenable": RuleOptions,
    "@typescript-eslint/ban-ts-comment": RuleOptions<[{
        "ts-expect-error"?: boolean | "allowed-with-description",
        "ts-ignore"?: boolean | "allowed-with-description",
        "ts-nocheck"?: boolean | "allowed-with-description",
        "ts-check"?: boolean | "allowed-with-description",
        minimumDescriptionLength?: number,
    }]>,
    "@typescript-eslint/ban-tslint-comment": RuleOptions,
    "@typescript-eslint/ban-types": RuleOptions<[{
        types?: Record<string, false | string | { message: string, fixWith?: string }>,
        extendDefaults?: boolean,
    }]>,
    "@typescript-eslint/class-literal-property-style": RuleOptions<[
        "fields" | "getters",
    ]>,
    "@typescript-eslint/consistent-indexed-object-style": RuleOptions<[
        "record" | "index-signature",
    ]>,
    "@typescript-eslint/consistent-type-assertions": RuleOptions<[{
        assertionStyle?: "as" | "angle-bracket",
        objectLiteralTypeAssertions?: "allow" | "allow-as-parameter" | "never",
    }]>,
    "@typescript-eslint/consistent-type-definitions": RuleOptions<[
        "interface" | "type",
    ]>,
    "@typescript-eslint/consistent-type-imports": RuleOptions<[{
        prefer?: "type-imports" | "no-type-imports",
        disallowTypeAnnotations?: boolean,
    }]>,
    "@typescript-eslint/explicit-function-return-type": RuleOptions<[{
        allowExpressions?: boolean;
        allowTypedFunctionExpressions?: boolean;
        allowHigherOrderFunctions?: boolean;
        allowDirectConstAssertionInArrowFunctions?: boolean;
        allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
    }]>,
    "@typescript-eslint/explicit-member-accessibility": RuleOptions<[{
        accessibility?: AccessibilityLevel,
        ignoredMethodNames?: string[],
        overrides?: {
            accessors?: AccessibilityLevel,
            constructors?: AccessibilityLevel,
            methods?: AccessibilityLevel,
            properties?: AccessibilityLevel,
            parameterProperties?: AccessibilityLevel,
        },
    }]>,
    "@typescript-eslint/explicit-module-boundary-types": RuleOptions<[{
        allowArgumentsExplicitlyTypedAsAny?: boolean,
        allowDirectConstAssertionInArrowFunctions?: boolean,
        allowedNames?: string[],
        allowHigherOrderFunctions?: boolean,
        allowTypedFunctionExpressions?: boolean,
    }]>,
    "@typescript-eslint/member-delimiter-style": RuleOptions<[{
        multiline?: {
            delimiter?: 'none' | 'semi' | 'comma';
            requireLast?: boolean;
        };
        singleline?: {
            delimiter?: 'semi' | 'comma';
            requireLast?: boolean;
        },
        overrides?: {
            interface?: {
                multiline?: {
                    delimiter?: 'none' | 'semi' | 'comma';
                    requireLast?: boolean;
                };
                singleline?: {
                    delimiter?: 'semi' | 'comma';
                    requireLast?: boolean;
                },
            },
            typeLiteral?: {
                multiline?: {
                    delimiter?: 'none' | 'semi' | 'comma';
                    requireLast?: boolean;
                };
                singleline?: {
                    delimiter?: 'semi' | 'comma';
                    requireLast?: boolean;
                },
            },
        },
        multilineDetection?: 'brackets' | 'last-member',
    }]>,
    // TODO
    "@typescript-eslint/member-ordering": RuleOptions,
    "@typescript-eslint/method-signature-style": RuleOptions<[
        "method" | "property",
    ]>,
    "@typescript-eslint/naming-convention": RuleOptions<Array<{
        // format options
        format:
        | (
            | 'camelCase'
            | 'strictCamelCase'
            | 'PascalCase'
            | 'StrictPascalCase'
            | 'snake_case'
            | 'UPPER_CASE'
        )[]
        | null;
        custom?: {
            regex: string;
            match: boolean;
        };
        leadingUnderscore?:
        | 'forbid'
        | 'require'
        | 'requireDouble'
        | 'allow'
        | 'allowDouble'
        | 'allowSingleOrDouble';

        trailingUnderscore?:
        | 'forbid'
        | 'require'
        | 'requireDouble'
        | 'allow'
        | 'allowDouble'
        | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];

        // selector options
        selector: string | string[];
        filter?:
        | string
        | {
            regex: string;
            match: boolean;
        };
        // the allowed values for these are dependent on the selector - see below
        modifiers?: string[];
        types?: string[];
    }>>,
    "@typescript-eslint/no-base-to-string": RuleOptions<[{
        ignoredTypeNames?: string[],
    }]>,
    "@typescript-eslint/no-confusing-non-null-assertion": RuleOptions,
    "@typescript-eslint/no-confusing-void-expression": RuleOptions<[{
        ignoreArrowShorthand?: boolean,
        ignoreVoidOperator?: boolean,
    }]>,
    "@typescript-eslint/no-dynamic-delete": RuleOptions,
    "@typescript-eslint/no-empty-interface": RuleOptions<[{
        allowSingleExtends?: boolean,
    }]>,
    "@typescript-eslint/no-explicit-any": RuleOptions<[{
        fixToUnknown?: boolean,
        ignoreRestArgs?: boolean,
    }]>,
    "@typescript-eslint/no-extra-non-null-assertion": RuleOptions,
    "@typescript-eslint/no-extraneous-class": RuleOptions<[{
        allowConstructorOnly?: boolean,
        allowEmpty?: boolean,
        allowStaticOnly?: boolean,
        allowWithDecorator?: boolean,
    }]>,
    "@typescript-eslint/no-floating-promises": RuleOptions<[{
        ignoreVoid?: boolean,
        ignoreIIFE?: boolean,
    }]>,
    "@typescript-eslint/no-for-in-array": RuleOptions,
    "@typescript-eslint/no-implicit-any-catch": RuleOptions<[{
        allowExplicitAny?: boolean,
    }]>,
    "@typescript-eslint/no-inferrable-types": RuleOptions<[{
        ignoreParameters?: boolean,
        ignoreProperties?: boolean,
    }]>,
    "@typescript-eslint/no-invalid-void-type": RuleOptions<[{
        allowInGenericTypeArguments?: boolean,
        allowAsThisParameter?: boolean,
    }]>,
    "@typescript-eslint/no-meaningless-void-operator": RuleOptions<[{
        checkNever?: boolean,
    }]>,
    "@typescript-eslint/no-misused-new": RuleOptions,
    "@typescript-eslint/no-misused-promises": RuleOptions<[{
        checksConditionals?: boolean,
        checksVoidReturn?: boolean,
    }]>,
    "@typescript-eslint/no-namespace": RuleOptions<[{
        allowDeclarations?: boolean,
        allowDefinitionFiles?: boolean,
    }]>,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": RuleOptions,
    "@typescript-eslint/no-non-null-asserted-optional-chain": RuleOptions,
    "@typescript-eslint/no-non-null-assertion": RuleOptions,
    // TODO
    "@typescript-eslint/no-parameter-properties": RuleOptions,
    "@typescript-eslint/no-require-imports": RuleOptions,
    "@typescript-eslint/no-this-alias": RuleOptions<[{
        allowDestructuring?: boolean,
        allowedNames?: string[],
    }]>,
    "@typescript-eslint/no-type-alias": RuleOptions<[{
        allowAliases?: "always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections",
        allowCallbacks?: "always" | "never",
        allowConditionalTypes?: "always" | "never",
        allowConstructors?: "always" | "never",
        allowLiterals?: "always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections",
        allowMappedTypes?: "always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections",
        allowTupleTypes?: "always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections",
        allowGenerics?: "always" | "never",
    }]>,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": RuleOptions<[{
        allowComparingNullableBooleansToTrue?: boolean,
        allowComparingNullableBooleansToFalse?: boolean,
    }]>,
    "@typescript-eslint/no-unnecessary-condition": RuleOptions<[{
        allowConstantLoopConditions?: boolean,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean,
    }]>,
    "@typescript-eslint/no-unnecessary-qualifier": RuleOptions,
    "@typescript-eslint/no-unnecessary-type-arguments": RuleOptions,
    "@typescript-eslint/no-unnecessary-type-assertion": RuleOptions<[{
        typesToIgnore: string[],
    }]>,
    "@typescript-eslint/no-unnecessary-type-constraint": RuleOptions,
    "@typescript-eslint/no-unsafe-argument": RuleOptions,
    "@typescript-eslint/no-unsafe-assignment": RuleOptions,
    "@typescript-eslint/no-unsafe-call": RuleOptions,
    "@typescript-eslint/no-unsafe-member-access": RuleOptions,
    "@typescript-eslint/no-unsafe-return": RuleOptions,
    "@typescript-eslint/no-var-requires": RuleOptions,
    "@typescript-eslint/non-nullable-type-assertion-style": RuleOptions,
    "@typescript-eslint/prefer-as-const": RuleOptions,
    "@typescript-eslint/prefer-enum-initializers": RuleOptions,
    "@typescript-eslint/prefer-for-of": RuleOptions,
    "@typescript-eslint/prefer-function-type": RuleOptions,
    "@typescript-eslint/prefer-includes": RuleOptions,
    "@typescript-eslint/prefer-literal-enum-member": RuleOptions<[{
        allowBitwiseExpressions?: boolean,
    }]>,
    "@typescript-eslint/prefer-namespace-keyword": RuleOptions,
    "@typescript-eslint/prefer-nullish-coalescing": RuleOptions<[{
        ignoreConditionalTests?: boolean,
        ignoreMixedLogicalExpressions?: boolean,
    }]>,
    "@typescript-eslint/prefer-optional-chain": RuleOptions,
    "@typescript-eslint/prefer-readonly": RuleOptions<[{
        onlyInlineLambdas?: boolean,
    }]>,
    "@typescript-eslint/prefer-readonly-parameter-types": RuleOptions<[{
        checkParameterProperties?: boolean,
        ignoreInferredTypes?: boolean,
        treatMethodsAsReadonly?: boolean,
    }]>,
    "@typescript-eslint/prefer-reduce-type-parameter": RuleOptions,
    "@typescript-eslint/prefer-regexp-exec": RuleOptions,
    "@typescript-eslint/prefer-return-this-type": RuleOptions,
    "@typescript-eslint/prefer-string-starts-ends-with": RuleOptions,
    "@typescript-eslint/prefer-ts-expect-error": RuleOptions,
    "@typescript-eslint/promise-function-async": RuleOptions<[{
        allowAny?: boolean,
        allowedPromiseNames?: string[],
        checkArrowFunctions?: boolean,
        checkFunctionDeclarations?: boolean,
        checkFunctionExpressions?: boolean,
        checkMethodDeclarations?: boolean,
    }]>,
    "@typescript-eslint/require-array-sort-compare": RuleOptions<[{
        ignoreStringArrays?: boolean,
    }]>,
    "@typescript-eslint/restrict-plus-operands": RuleOptions<[{
        checkCompoundAssignments?: boolean,
    }]>,
    "@typescript-eslint/restrict-template-expressions": RuleOptions<[{
        allowNumber?: boolean,
        allowBoolean?: boolean,
        allowAny?: boolean,
        allowNullish?: boolean,
        allowRegExp?: boolean,
    }]>,
    "@typescript-eslint/sort-type-union-intersection-members": RuleOptions<[{
        checkIntersections?: boolean;
        checkUnions?: boolean;
        groupOrder?: (
            | 'conditional'
            | 'function'
            | 'import'
            | 'intersection'
            | 'keyword'
            | 'literal'
            | 'named'
            | 'object'
            | 'operator'
            | 'tuple'
            | 'union'
            | 'nullish'
        )[];
    }]>,
    "@typescript-eslint/strict-boolean-expressions": RuleOptions<[{
        allowString?: boolean,
        allowNumber?: boolean,
        allowNullableObject?: boolean,
        allowNullableBoolean?: boolean,
        allowNullableString?: boolean,
        allowNullableNumber?: boolean,
        allowAny?: boolean,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean,
    }]>,
    "@typescript-eslint/switch-exhaustiveness-check": RuleOptions,
    "@typescript-eslint/triple-slash-reference": RuleOptions<[{
        paths?: "always" | "never",
        types?: "always" | "never" | "prefer-import",
        lib?: "always" | "never",
    }]>,
    "@typescript-eslint/type-annotation-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
        overrides?: {
            colon?: {
                before?: boolean,
                after?: boolean,
            },
            arrow?: {
                before?: boolean,
                after?: boolean,
            },
        }
    }]>,
    // Not Recommended
    "@typescript-eslint/typedef": RuleOptions,
    "@typescript-eslint/unbound-method": RuleOptions<[{
        ignoreStatic?: boolean,
    }]>,
    "@typescript-eslint/unified-signatures": RuleOptions,

    "@typescript-eslint/brace-style": RuleOptions<[
        "1tbs" | "stroustrup" | "allman",
        { allowSingleLine?: boolean },
    ]>,
    "@typescript-eslint/comma-dangle": RuleOptions<[{
        arrays?: "never" | "always" | "always-multiline" | "only-multiline",
        objects?: "never" | "always" | "always-multiline" | "only-multiline",
        imports?: "never" | "always" | "always-multiline" | "only-multiline",
        exports?: "never" | "always" | "always-multiline" | "only-multiline",
        functions?: "never" | "always" | "always-multiline" | "only-multiline",
        enums?: "never" | "always" | "always-multiline" | "only-multiline",
        generics?: "never" | "always" | "always-multiline" | "only-multiline",
        tuples?: "never" | "always" | "always-multiline" | "only-multiline",
    }]>,
    "@typescript-eslint/comma-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
    }]>,
    "@typescript-eslint/default-param-last": RuleOptions,
    "@typescript-eslint/dot-notation": RuleOptions<[{
        allowKeywords?: boolean,
        allowPattern?: boolean,
        allowPrivateClassPropertyAccess?: boolean,
        allowProtectedClassPropertyAccess?: boolean,
        allowIndexSignaturePropertyAccess?: boolean,
    }]>,
    "@typescript-eslint/func-call-spacing": RuleOptions<["never" | "always"]>,
    "@typescript-eslint/indent": RuleOptions<[
        number | "tab",
        {
            ignoredNodes?: string[],
            SwitchCase?: number,
            VariableDeclarator?: number | "first",
            outerIIFEBody?: number | "off",
            MemberExpression?: number | "off",
            FunctionDeclaration?: {
                parameters?: number | "off",
                body?: number,
            },
            FunctionExpression?: {
                parameters?: number | "off",
                body?: number,
            },
            CallExpression?: {
                arguments: number,
            },
            ArrayExpression?: number | "first" | "off",
            ObjectExpression?: number | "first" | "off",
            ImportDeclaration?: number | "first" | "off",
            flatTernaryExpressions?: boolean,
            offsetTernaryExpressions?: boolean,
            ignoreComments?: boolean,
        },
    ]>,
    "@typescript-eslint/init-declarations": RuleOptions<[
        "always" | "never",
        { ignoreForLoopInit?: boolean },
    ]>,
    "@typescript-eslint/keyword-spacing": RuleOptions<[{
        before?: boolean,
        after?: boolean,
        overrides?: string[],
    }]>,
    "@typescript-eslint/lines-between-class-members": RuleOptions<[
        "always" | "never",
        { 
            exceptAfterSingleLine?: boolean,
            exceptAfterOverload?: boolean,
        },
    ]>,
    "@typescript-eslint/no-array-constructor": RuleOptions,
    "@typescript-eslint/no-dupe-class-members": RuleOptions,
    "@typescript-eslint/no-duplicate-imports": RuleOptions<[{
        includeExports?: boolean,
    }]>,
    "@typescript-eslint/no-empty-function": RuleOptions<[{
        allow?: string[],
    }]>,
    "@typescript-eslint/no-extra-parens": RuleOptions<["all" | "functions", {
        conditionalAssign?: boolean,
        returnAssign?: boolean,
        nestedBinaryExpressions?: boolean,
        ignoreJSX?: boolean,
        enforceForArrowConditionals?: boolean,
        enforceForSequenceExpressions?: boolean,
        enforceForNewInMemberExpressions?: boolean,
        enforceForFunctionPrototypeMethods?: boolean,
    }]>,
    "@typescript-eslint/no-extra-semi": RuleOptions,
    "@typescript-eslint/no-implied-eval": RuleOptions,
    "@typescript-eslint/no-invalid-this": RuleOptions<[{
        capIsConstructor?: boolean,
    }]>,
    "@typescript-eslint/no-loop-func": RuleOptions,
    "@typescript-eslint/no-loss-of-precision": RuleOptions,
    "@typescript-eslint/no-magic-numbers": RuleOptions<[{
        ignore?: (string | number)[],
        ignoreArrayIndexes?: boolean,
        ignoreDefaultValues?: boolean,
        enforceConst?: boolean,
        detectObjects?: boolean,
        ignoreEnums?: boolean,
        ignoreNumericLiteralTypes?: boolean,
        ignoreReadonlyClassProperties?: boolean,
    }]>,
    "@typescript-eslint/no-redeclare": RuleOptions<[{
        builtinGlobals?: boolean,
        ignoreDeclarationMerge?: boolean,
    }]>,
    "@typescript-eslint/no-restricted-imports": RuleOptions<[{
        paths?: { name: string, message?: string }[],
    }]>,
    "@typescript-eslint/no-shadow": RuleOptions<[{
        builtinGlobals?: boolean,
        hoist?: "functions" | "all" | "never",
        allow?: string[],
        ignoreTypeValueShadow?: boolean,
        ignoreFunctionTypeParameterNameValueShadow?: boolean,
    }]>,
    "@typescript-eslint/no-throw-literal": RuleOptions,
    "@typescript-eslint/no-unused-expressions": RuleOptions<[{
        allowShortCircuit?: boolean,
        allowTernary?: boolean,
        allowTaggedTemplates?: boolean,
        enforceForJSX?: boolean,
    }]>,
    "@typescript-eslint/no-unused-vars": RuleOptions<[{
        vars?: "all" | "local",
        varsIgnorePattern?: string,
        args?: "after-used" | "all" | "none",
        ignoreRestSiblings?: boolean,
        argsIgnorePattern?: string,
        caughtErrors?: "none" | "all",
        caughtErrorsIgnorePattern?: string,
    }]>,
    "@typescript-eslint/no-use-before-define": RuleOptions<[{
        functions?: boolean,
        classes?: boolean,
        variables?: boolean,
        enums?: boolean,
        typedefs?: boolean,
        ignoreTypeReferences?: true,
    }]>,
    "@typescript-eslint/no-useless-constructor": RuleOptions,
    "@typescript-eslint/object-curly-spacing": RuleOptions<[
        "never" | "always",
        {
            arraysInObjects?: boolean,
            objectsInObjects?: boolean,
        },
    ]>,
    // TODO
    "@typescript-eslint/padding-line-between-statements": RuleOptions,
    "@typescript-eslint/quotes": RuleOptions<[
        "single" | "double",
        {
            avoidEscape?: boolean,
            allowTemplateLiterals?: boolean,
        },
    ]>,
    "@typescript-eslint/require-await": RuleOptions,
    "@typescript-eslint/return-await": RuleOptions<[
        "in-try-catch" | "always" | "never",
    ]>,
    "@typescript-eslint/semi": RuleOptions<[
        "always" | "never",
    ]>,
    "@typescript-eslint/space-before-function-paren": RuleOptions<[{
        anonymous?: "always" | "never" | "ignore",
        named?: "always" | "never" | "ignore",
        asyncArrow?: "always" | "never" | "ignore",
    }]>,
    "@typescript-eslint/space-infix-ops": RuleOptions<[{
        int32Hint?: boolean,
    }]>,
}

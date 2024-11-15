import type { Linter } from "eslint";

type AccessibilityLevel = "explicit" | "no-public" | "off";

/* todo eslint "@typescript-eslint/member-ordering": ["error", { "default": { "memberTypes": "never", "order": "alphabetically" } }] */

type BaseEslintRules = Partial<{
    "accessor-pairs": Linter.RuleEntry<
        [
            {
                enforceForClassMembers?: boolean;
                getWithoutSet?: boolean;
                setWithoutGet?: boolean;
            },
        ]
    >;
    "array-bracket-newline": Linter.RuleEntry<
        [
            | "always"
            | "consistent"
            | "never"
            | {
                  multiline?: boolean;
                  minItems?: number | null;
              },
        ]
    >;
    "array-bracket-spacing": Linter.RuleEntry<
        [
            "always" | "never",
            {
                singleValue?: boolean;
                objectsInArrays?: boolean;
                arraysInArrays?: boolean;
            },
        ]
    >;
    "array-callback-return": Linter.RuleEntry<
        [
            Readonly<{
                allowImplicit?: boolean;
                checkForEach?: boolean;
            }>,
        ]
    >;
    "array-element-newline": Linter.RuleEntry<
        [
            | "always"
            | "consistent"
            | "never"
            | {
                  multiline?: boolean;
                  minItems?: number | null;
              },
        ]
    >;
    "block-scoped-var": Linter.RuleEntry;
    "block-spacing": Linter.RuleEntry<["always" | "never"]>;
    "brace-style": Linter.RuleEntry<
        ["1tbs" | "allman" | "stroustrup", { allowSingleLine?: boolean }]
    >;

    camelcase: Linter.RuleEntry<
        [
            properties?: "always" | "never",
            ignoreDestructuring?: boolean,
            ignoreImports?: boolean,
            ignoreGlobals?: boolean,
            allow?: ReadonlyArray<string>,
        ]
    >;
    "capitalized-comments": Linter.RuleEntry<
        [
            ignorePattern?: string,
            ignoreInlineComments?: boolean,
            ignoreConsecutiveComments?: boolean,
        ]
    >;
    "class-methods-use-this": Linter.RuleEntry<
        [
            {
                exceptMethods?: ReadonlyArray<string>;
            },
        ]
    >;
    "comma-dangle": Linter.RuleEntry<
        [
            {
                arrays?: "always-multiline" | "always" | "never" | "only-multiline";
                objects?: "always-multiline" | "always" | "never" | "only-multiline";

                imports?: "always-multiline" | "always" | "never" | "only-multiline";

                exports?: "always-multiline" | "always" | "never" | "only-multiline";
                functions?: "always-multiline" | "always" | "never" | "only-multiline";
            },
        ]
    >;
    "comma-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;

                after?: boolean;
            },
        ]
    >;
    "comma-style": Linter.RuleEntry<["first" | "last"]>;
    complexity: Linter.RuleEntry<[{ max?: number }]>;
    "computed-property-spacing": Linter.RuleEntry<
        ["always" | "never", { enforceForClassMembers?: boolean }]
    >;
    "consistent-return": Linter.RuleEntry<
        [
            {
                treatUndefinedAsUnspecified?: boolean;
            },
        ]
    >;
    "consistent-this": Linter.RuleEntry;
    curly: Linter.RuleEntry<["all" | "consistent" | "multi-line" | "multi-or-nest" | "multi"]>;
    "default-case": Linter.RuleEntry<
        [
            {
                commentPattern?: string;
            },
        ]
    >;
    "default-case-last": Linter.RuleEntry;
    "default-param-last": Linter.RuleEntry;
    "dot-location": Linter.RuleEntry<["object" | "property"]>;
    "dot-notation": Linter.RuleEntry<
        [
            {
                allowKeywords?: boolean;
                allowPattern?: boolean;
            },
        ]
    >;
    "eol-last": Linter.RuleEntry<["always" | "never"]>;
    eqeqeq: Linter.RuleEntry<["always" | "smart", { null?: "always" | "ignore" | "never" }]>;
    "for-direction": Linter.RuleEntry;
    "getter-return": Linter.RuleEntry<[Readonly<{ allowImplicit?: boolean }>]>;
    "grouped-accessor-pairs": Linter.RuleEntry<["getBeforeSet" | "setBeforeGet"]>;
    "guard-for-in": Linter.RuleEntry;
    "init-declarations": Linter.RuleEntry<["always" | "never", { ignoreForLoopInit?: boolean }]>;
    "logical-assignment-operators": Linter.RuleEntry<
        [
            "always" | "never",
            Readonly<{
                enforceForIfStatements?: boolean;
            }>,
        ]
    >;
    "max-classes-per-file": Linter.RuleEntry<[number]>;
    "no-alert": Linter.RuleEntry;
    "no-async-promise-executor": Linter.RuleEntry;
    "no-await-in-loop": Linter.RuleEntry;
    "no-caller": Linter.RuleEntry;
    "no-case-declarations": Linter.RuleEntry;
    "no-compare-neg-zero": Linter.RuleEntry;
    "no-cond-assign": Linter.RuleEntry<["always" | "except-parens"]>;
    "no-console": Linter.RuleEntry<[Readonly<{ allow?: ReadonlyArray<string> }>]>;
    "no-constant-binary-expression": Linter.RuleEntry;
    "no-constant-condition": Linter.RuleEntry<[{ checkLoops?: boolean }]>;
    "no-constructor-return": Linter.RuleEntry;
    "no-control-regex": Linter.RuleEntry;
    "no-debugger": Linter.RuleEntry;
    "no-delete-var": Linter.RuleEntry;
    "no-div-regex": Linter.RuleEntry;
    "no-dupe-args": Linter.RuleEntry;
    "no-dupe-else-if": Linter.RuleEntry;
    "no-dupe-keys": Linter.RuleEntry;
    "no-duplicate-case": Linter.RuleEntry;
    "no-else-return": Linter.RuleEntry<
        [
            {
                allowElseIf?: boolean;
            },
        ]
    >;
    "no-empty": Linter.RuleEntry<[Readonly<{ allowEmptyCatch?: boolean }>]>;
    "no-empty-character-class": Linter.RuleEntry;
    "no-empty-function": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<string>;
            },
        ]
    >;
    "no-empty-pattern": Linter.RuleEntry;
    "no-empty-static-block": Linter.RuleEntry;
    "no-eq-null": Linter.RuleEntry;
    "no-eval": Linter.RuleEntry<
        [
            {
                allowIndirect?: boolean;
            },
        ]
    >;
    "no-ex-assign": Linter.RuleEntry;
    "no-extend-native": Linter.RuleEntry;
    "no-extra-bind": Linter.RuleEntry;
    "no-extra-boolean-cast": Linter.RuleEntry<
        [
            Readonly<{
                /**
                 * @deprecated
                 */
                enforceForLogicalOperands?: boolean;
                enforceForInnerExpressions?: boolean;
            }>,
        ]
    >;
    "no-extra-label": Linter.RuleEntry;
    "no-extra-parens": Linter.RuleEntry<
        [
            "all" | "functions",
            Readonly<{
                conditionalAssign?: boolean;
                enforceForArrowConditionals?: boolean;
                enforceForFunctionPrototypeMethods?: boolean;
                enforceForNewInMemberExpressions?: boolean;
                enforceForSequenceExpressions?: boolean;
                ignoreJSX?: boolean;
                nestedBinaryExpressions?: boolean;
                returnAssign?: boolean;
                allowParensAfterCommentPattern?: boolean;
                ternaryOperandBinaryExpressions?: boolean;
            }>,
        ]
    >;
    "no-extra-semi": Linter.RuleEntry;
    "no-fallthrough": Linter.RuleEntry<
        [
            {
                commentPattern?: string;
            },
        ]
    >;
    "no-floating-decimal": Linter.RuleEntry;
    "no-func-assign": Linter.RuleEntry;
    "no-global-assign": Linter.RuleEntry<
        [
            {
                exceptions?: ReadonlyArray<string>;
            },
        ]
    >;
    "no-implicit-coercion": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<string>;
                boolean?: boolean;
                disallowTemplateShorthand?: boolean;
                number?: boolean;
                string?: boolean;
            },
        ]
    >;
    "no-implicit-globals": Linter.RuleEntry<
        [
            {
                lexicalBindings?: boolean;
            },
        ]
    >;
    "no-implied-eval": Linter.RuleEntry;
    "no-import-assign": Linter.RuleEntry;
    "no-inner-declarations": Linter.RuleEntry<["both" | "functions"]>;
    "no-invalid-regexp": Linter.RuleEntry;
    "no-invalid-this": Linter.RuleEntry<
        [
            {
                capIsConstructor?: boolean;
            },
        ]
    >;
    "no-irregular-whitespace": Linter.RuleEntry<
        [
            {
                skipComments?: boolean;
                skipRegExps?: boolean;
                skipStrings?: boolean;
                skipTemplates?: boolean;
            },
        ]
    >;
    "no-iterator": Linter.RuleEntry;
    "no-label-var": Linter.RuleEntry;
    "no-labels": Linter.RuleEntry<
        [
            {
                allowLoop?: boolean;
                allowSwitch?: boolean;
            },
        ]
    >;
    "no-lone-blocks": Linter.RuleEntry;
    "no-loop-func": Linter.RuleEntry;
    "no-loss-of-precision": Linter.RuleEntry;
    "no-magic-numbers": Linter.RuleEntry<
        [
            {
                detectObjects?: boolean;
                enforceConst?: boolean;
                ignore?: ReadonlyArray<number | string>;
                ignoreArrayIndexes?: boolean;
                ignoreDefaultValues?: boolean;
                ignoreClassFieldInitialValues?: boolean;
            },
        ]
    >;
    "no-misleading-character-class": Linter.RuleEntry<
        [
            {
                allowEscape?: boolean;
            },
        ]
    >;
    "no-multi-spaces": Linter.RuleEntry<
        [
            {
                ignoreEOLComments?: boolean;
            },
        ]
    >;
    "no-multi-str": Linter.RuleEntry;
    "no-new": Linter.RuleEntry;
    "no-new-native-nonconstructor": Linter.RuleEntry;
    "no-new-func": Linter.RuleEntry;
    "no-new-wrappers": Linter.RuleEntry;
    "no-nonoctal-decimal-escape": Linter.RuleEntry;
    "no-obj-calls": Linter.RuleEntry;
    "no-octal": Linter.RuleEntry;
    "no-octal-escape": Linter.RuleEntry;
    "no-param-reassign": Linter.RuleEntry<
        [
            {
                ignorePropertyModificationsFor?: ReadonlyArray<string>;
                ignorePropertyModificationsForRegex?: ReadonlyArray<string>;
                props?: boolean;
            },
        ]
    >;
    "no-promise-executor-return": Linter.RuleEntry;
    "no-proto": Linter.RuleEntry;
    "no-prototype-builtins": Linter.RuleEntry;
    "no-redeclare": Linter.RuleEntry<
        [
            {
                builtinGlobals?: boolean;
            },
        ]
    >;
    "no-regex-spaces": Linter.RuleEntry;
    "no-restricted-globals": Linter.RuleEntry<Array<string>>;
    "no-restricted-properties": Linter.RuleEntry;
    "no-return-assign": Linter.RuleEntry<["always" | "except-parens"]>;
    "no-return-await": Linter.RuleEntry;
    "no-script-url": Linter.RuleEntry;
    "no-self-assign": Linter.RuleEntry<
        [
            Readonly<{
                props?: boolean;
            }>,
        ]
    >;
    "no-self-compare": Linter.RuleEntry;
    "no-sequences": Linter.RuleEntry<
        [
            Readonly<{
                allowInParentheses?: boolean;
            }>,
        ]
    >;
    "no-setter-return": Linter.RuleEntry;
    "no-shadow": Linter.RuleEntry<
        [
            {
                builtinGlobals?: boolean;
                hoist?: "all" | "functions" | "never";

                allow?: ReadonlyArray<string>;
                ignoreOnInitialization?: boolean;
            },
        ]
    >;
    "no-shadow-restricted-names": Linter.RuleEntry;
    "no-sparse-arrays": Linter.RuleEntry;
    "no-template-curly-in-string": Linter.RuleEntry;
    "no-throw-literal": Linter.RuleEntry;
    "no-undef": Linter.RuleEntry<
        [
            {
                typeof?: boolean;
            },
        ]
    >;
    "no-undef-init": Linter.RuleEntry;
    "no-undefined": Linter.RuleEntry;
    "no-unexpected-multiline": Linter.RuleEntry;
    "no-unmodified-loop-condition": Linter.RuleEntry;
    "no-unreachable": Linter.RuleEntry;
    "no-unreachable-loop": Linter.RuleEntry<
        [
            Readonly<{
                ignore?: ReadonlyArray<
                    | "DoWhileStatement"
                    | "ForInStatement"
                    | "ForOfStatement"
                    | "ForStatement"
                    | "WhileStatement"
                >;
            }>,
        ]
    >;
    "no-unsafe-finally": Linter.RuleEntry;
    "no-unsafe-negation": Linter.RuleEntry<
        [
            {
                enforceForOrderingRelations?: boolean;
            },
        ]
    >;
    "no-unsafe-optional-chaining": Linter.RuleEntry<
        [
            {
                disallowArithmeticOperators?: boolean;
            },
        ]
    >;
    "no-unused-expressions": Linter.RuleEntry<
        [
            {
                allowShortCircuit?: boolean;
                allowTaggedTemplates?: boolean;
                allowTernary?: boolean;
                enforceForJSX?: boolean;
            },
        ]
    >;
    "no-unused-labels": Linter.RuleEntry;
    "no-unused-vars": Linter.RuleEntry<
        [
            {
                vars?: "all" | "local";
                varsIgnorePattern?: string;

                args?: "after-used" | "all" | "none";
                ignoreRestSiblings?: boolean;

                argsIgnorePattern?: string;
                caughtErrors?: "all" | "none";
                caughtErrorsIgnorePattern?: string;
                destructuredArrayIgnorePattern?: string;
            },
        ]
    >;
    "no-use-before-define": Linter.RuleEntry<
        [
            Readonly<{
                classes?: boolean;
                functions?: boolean;
                variables?: boolean;
            }>,
        ]
    >;
    "no-useless-backreference": Linter.RuleEntry;
    "no-useless-call": Linter.RuleEntry;
    "no-useless-catch": Linter.RuleEntry;
    "no-useless-concat": Linter.RuleEntry;
    "no-useless-escape": Linter.RuleEntry;
    "no-useless-return": Linter.RuleEntry;
    "no-void": Linter.RuleEntry<
        [
            Readonly<{
                allowAsStatement?: boolean;
            }>,
        ]
    >;
    "no-warning-comments": Linter.RuleEntry<
        [
            Readonly<{
                location?: "anywhere" | "start";
                terms?: ReadonlyArray<string>;
            }>,
        ]
    >;
    "no-with": Linter.RuleEntry;
    "prefer-named-capture-group": Linter.RuleEntry;
    "prefer-promise-reject-errors": Linter.RuleEntry<
        [
            {
                allowEmptyReject?: boolean;
            },
        ]
    >;
    "prefer-regex-literals": Linter.RuleEntry<
        [
            {
                disallowRedundantWrapping?: boolean;
            },
        ]
    >;
    radix: Linter.RuleEntry<["always" | "as-needed"]>;
    "require-atomic-updates": Linter.RuleEntry;
    "require-await": Linter.RuleEntry;
    "require-unicode-regexp": Linter.RuleEntry<[{ requireFlag?: "u" | "v" }]>;
    strict: Linter.RuleEntry<["function" | "global" | "never" | "safe"]>;
    "use-isnan": Linter.RuleEntry;
    "valid-typeof": Linter.RuleEntry;
    "vars-on-top": Linter.RuleEntry;
    "wrap-iife": Linter.RuleEntry<
        ["any" | "inside" | "outside", { functionPrototypeMethods?: boolean }]
    >;
    yoda: Linter.RuleEntry<["always" | "never", { exceptRange?: boolean; onlyEquality?: boolean }]>;

    "func-call-spacing": Linter.RuleEntry<["always" | "never"]>;
    "func-name-matching": Linter.RuleEntry<
        [
            {
                considerPropertyDescriptor?: boolean;
                includeCommonJSModuleExports?: boolean;
            },
        ]
    >;
    "func-names": Linter.RuleEntry<
        [
            "always" | "as-needed" | "never",
            {
                generators?: "always" | "as-needed" | "never";
            },
        ]
    >;
    "func-style": Linter.RuleEntry<
        [
            "declaration" | "expression",
            {
                allowArrowFunctions?: boolean;
                overrides?: {
                    namedExports?: "declaration" | "expression" | "ignore";
                };
            },
        ]
    >;
    "function-call-argument-newline": Linter.RuleEntry<["always" | "consistent" | "never"]>;
    "function-paren-newline": Linter.RuleEntry<
        ["always" | "consistent" | "multiline-arguments" | "multiline" | "never"]
    >;
    // TODO
    "id-denylist": Linter.RuleEntry;
    // TODO
    "id-length": Linter.RuleEntry;
    // TODO
    "id-match": Linter.RuleEntry;
    "implicit-arrow-linebreak": Linter.RuleEntry<["below" | "beside"]>;
    indent: Linter.RuleEntry<
        [
            number | "tab",
            {
                ignoredNodes?: ReadonlyArray<string>;
                SwitchCase?: number;
                VariableDeclarator?: number | "first";
                outerIIFEBody?: number | "off";
                MemberExpression?: number | "off";
                FunctionDeclaration?: {
                    parameters?: number | "off";
                    body?: number;
                };
                FunctionExpression?: {
                    parameters?: number | "off";
                    body?: number;
                };
                CallExpression?: {
                    arguments: number;
                };
                ArrayExpression?: number | "first" | "off";
                ObjectExpression?: number | "first" | "off";
                ImportDeclaration?: number | "first" | "off";
                flatTernaryExpressions?: boolean;
                offsetTernaryExpressions?: boolean;
                ignoreComments?: boolean;
            },
        ]
    >;
    "jsx-quotes": Linter.RuleEntry<["prefer-double" | "prefer-single"]>;
    "key-spacing": Linter.RuleEntry<
        [
            {
                beforeColon?: boolean;
                afterColon?: boolean;
                mode?: "minimum" | "strict";
                align?: "colon" | "value";
            },
        ]
    >;
    "keyword-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;
                after?: boolean;
                overrides?: ReadonlyArray<string>;
            },
        ]
    >;
    "line-comment-position": Linter.RuleEntry<["above" | "beside"]>;
    "linebreak-style": Linter.RuleEntry<["unix" | "windows"]>;
    "lines-around-comment": Linter.RuleEntry<
        [
            {
                beforeBlockComment?: boolean;
                afterBlockComment?: boolean;
                beforeLineComment?: boolean;
                afterLineComment?: boolean;
                allowBlockStart?: boolean;
                allowBlockEnd?: boolean;
                allowObjectStart?: boolean;
                allowObjectEnd?: boolean;
                allowArrayStart?: boolean;
                allowArrayEnd?: boolean;
                allowClassStart?: boolean;
                allowClassEnd?: boolean;
                applyDefaultIgnorePatterns?: boolean;
                ignorePattern?: string;
            },
        ]
    >;
    "lines-between-class-members": Linter.RuleEntry<
        ["always" | "never", { exceptAfterSingleLine?: boolean }]
    >;
    "max-depth": Linter.RuleEntry<[{ max?: number }]>;
    "max-len": Linter.RuleEntry<
        [
            {
                code?: number;
                tabWidth?: number;
                comments?: number;
                ignorePattern?: string;
                ignoreComments?: boolean;
                ignoreTrailingComments?: boolean;
                ignoreUrls?: boolean;
                ignoreStrings?: boolean;
                ignoreTemplateLiterals?: boolean;
                ignoreRegExpLiterals?: boolean;
            },
        ]
    >;
    "max-lines": Linter.RuleEntry<
        [
            {
                max?: number;
                skipBlankLines?: boolean;
                skipComments?: boolean;
            },
        ]
    >;
    // TODO
    "max-lines-per-function": Linter.RuleEntry;
    "max-nested-callbacks": Linter.RuleEntry<
        [
            {
                max?: number;
            },
        ]
    >;
    "max-params": Linter.RuleEntry<[{ max?: number }]>;
    // TODO
    "max-statements": Linter.RuleEntry;
    "max-statements-per-line": Linter.RuleEntry<
        [
            {
                max?: number;
            },
        ]
    >;
    "multiline-comment-style": Linter.RuleEntry<
        ["bare-block" | "separate-lines" | "starred-block"]
    >;
    "multiline-ternary": Linter.RuleEntry<["always-multiline" | "always" | "never"]>;
    "new-cap": Linter.RuleEntry<
        [
            {
                newIsCap?: boolean;
                capIsNew?: boolean;
                newIsCapExceptions?: ReadonlyArray<string>;
                newIsCapExceptionPattern?: string;
                capIsNewExceptions?: ReadonlyArray<string>;
                capIsNewExceptionPattern?: string;
                properties?: boolean;
            },
        ]
    >;
    "new-parens": Linter.RuleEntry<["always" | "never"]>;
    "newline-per-chained-call": Linter.RuleEntry<
        [
            {
                ignoreChainWithDepth?: number;
            },
        ]
    >;
    "no-array-constructor": Linter.RuleEntry;
    "no-bitwise": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<string>;
                int32Hint?: boolean;
            },
        ]
    >;
    "no-continue": Linter.RuleEntry;
    "no-inline-comments": Linter.RuleEntry;
    "no-lonely-if": Linter.RuleEntry;
    // TODO
    "no-mixed-operators": Linter.RuleEntry;
    "no-mixed-spaces-and-tabs": Linter.RuleEntry<["smart-tabs"] | []>;
    "no-multi-assign": Linter.RuleEntry<
        [
            {
                ignoreNonDeclaration?: boolean;
            },
        ]
    >;
    "no-multiple-empty-lines": Linter.RuleEntry<
        [
            {
                max?: number;
                maxEOF?: number;
                maxBOF?: number;
            },
        ]
    >;
    "no-negated-condition": Linter.RuleEntry;
    "no-nested-ternary": Linter.RuleEntry;
    "no-new-object": Linter.RuleEntry;
    "no-plusplus": Linter.RuleEntry<
        [
            {
                allowForLoopAfterthoughts?: boolean;
            },
        ]
    >;
    // TODO
    "no-restricted-syntax": Linter.RuleEntry;
    "no-tabs": Linter.RuleEntry<
        [
            {
                allowIndentationTabs?: boolean;
            },
        ]
    >;
    "no-ternary": Linter.RuleEntry;
    "no-trailing-spaces": Linter.RuleEntry<
        [
            {
                skipBlankLines?: boolean;
                ignoreComments?: boolean;
            },
        ]
    >;
    "no-underscore-dangle": Linter.RuleEntry<
        [
            {
                allow?: boolean;
                allowAfterThis?: boolean;
                allowAfterSuper?: boolean;
                allowAfterThisConstructor?: boolean;
                enforceInMethodNames?: boolean;
                allowFunctionParams?: boolean;
                enforceInClassFields?: boolean;
                allowInArrayDestructuring?: boolean;
                allowInObjectDestructuring?: boolean;
            },
        ]
    >;
    "no-unneeded-ternary": Linter.RuleEntry<
        [
            {
                defaultAssignment?: boolean;
            },
        ]
    >;
    "no-whitespace-before-property": Linter.RuleEntry;
    "nonblock-statement-body-position": Linter.RuleEntry<["any" | "below" | "beside"]>;
    "object-curly-newline": Linter.RuleEntry<
        [
            | "always"
            | "never"
            | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
              },
        ]
    >;
    "object-curly-spacing": Linter.RuleEntry<
        [
            "always" | "never",
            {
                arraysInObjects?: boolean;
                objectsInObjects?: boolean;
            },
        ]
    >;
    "object-property-newline": Linter.RuleEntry<
        [
            {
                allowAllPropertiesOnSameLine?: boolean;
            },
        ]
    >;
    "one-var": Linter.RuleEntry<
        [
            | "always"
            | "consistent"
            | "never"
            | {
                  initialized?: "always" | "consecutive" | "never";
                  uninitialized?: "always" | "consecutive" | "never";
              },
        ]
    >;
    "one-var-declaration-per-line": Linter.RuleEntry<["always" | "initializations"]>;
    "operator-assignment": Linter.RuleEntry<["always" | "never"]>;
    "operator-linebreak": Linter.RuleEntry<["after" | "before" | "none"]>;
    "padded-blocks": Linter.RuleEntry<["always" | "never", { allowSingleLineBlocks?: boolean }]>;
    // TODO
    "padding-line-between-statements": Linter.RuleEntry;
    "prefer-exponentiation-operator": Linter.RuleEntry;
    "prefer-object-spread": Linter.RuleEntry;
    "quote-props": Linter.RuleEntry<
        [
            "always" | "as-needed" | "consistent-as-needed" | "consistent",
            {
                keywords?: boolean;
                unnecessary?: boolean;
                numbers?: boolean;
            },
        ]
    >;
    quotes: Linter.RuleEntry<
        [
            "double" | "single",
            {
                avoidEscape?: boolean;
                allowTemplateLiterals?: boolean;
            },
        ]
    >;
    semi: Linter.RuleEntry<["always" | "never"]>;
    "semi-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;
                after?: boolean;
            },
        ]
    >;
    "semi-style": Linter.RuleEntry<["first" | "last"]>;
    "sort-keys": Linter.RuleEntry<
        [
            "asc" | "desc",
            {
                caseSensitive?: boolean;
                minKeys?: boolean;
                natural?: boolean;
            },
        ]
    >;
    "sort-vars": Linter.RuleEntry<
        [
            {
                ignoreCase?: boolean;
            },
        ]
    >;
    "space-before-blocks": Linter.RuleEntry<
        [
            {
                functions?: "always" | "never" | "off";
                keywords?: "always" | "never" | "off";
                classes?: "always" | "never" | "off";
            },
        ]
    >;
    "space-before-function-paren": Linter.RuleEntry<
        [
            {
                anonymous?: "always" | "ignore" | "never";
                named?: "always" | "ignore" | "never";
                asyncArrow?: "always" | "ignore" | "never";
            },
        ]
    >;
    "space-in-parens": Linter.RuleEntry<["always" | "never"]>;
    "space-infix-ops": Linter.RuleEntry<
        [
            {
                int32Hint?: boolean;
            },
        ]
    >;
    "space-unary-ops": Linter.RuleEntry<
        [
            {
                words?: boolean;
                nonwords?: boolean;
            },
        ]
    >;
    "spaced-comment": Linter.RuleEntry<
        [
            "always" | "never",
            {
                markers?: ReadonlyArray<string>;
                exceptions?: ReadonlyArray<string>;
                line?: {
                    markers?: ReadonlyArray<string>;
                    exceptions?: ReadonlyArray<string>;
                };
                block?: {
                    markers?: ReadonlyArray<string>;
                    exceptions?: ReadonlyArray<string>;
                    balanced?: boolean;
                };
            },
        ]
    >;
    "switch-colon-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;
                after?: boolean;
            },
        ]
    >;
    "template-tag-spacing": Linter.RuleEntry<["always" | "never"]>;
    "unicode-bom": Linter.RuleEntry<["always" | "never"]>;
    "wrap-regex": Linter.RuleEntry;

    "arrow-body-style": Linter.RuleEntry<
        ["always" | "as-needed" | "never", { requireReturnForObjectLiteral?: boolean }]
    >;
    "arrow-parens": Linter.RuleEntry<["always"] | ["as-needed", { requireForBlockBody?: boolean }]>;
    "arrow-spacing": Linter.RuleEntry<[{ before?: boolean; after?: boolean }]>;
    "constructor-super": Linter.RuleEntry;
    "generator-star-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;
                after?: boolean;
                named?: {
                    before?: boolean;
                    after?: boolean;
                };
                anonymous?: {
                    before?: boolean;
                    after?: boolean;
                };
                method?: {
                    before?: boolean;
                    after?: boolean;
                };
            },
        ]
    >;
    "no-class-assign": Linter.RuleEntry;
    "no-confusing-arrow": Linter.RuleEntry<
        [
            {
                allowParens?: boolean;
                onlyOneSimpleParam?: boolean;
            },
        ]
    >;
    "no-const-assign": Linter.RuleEntry;
    "no-dupe-class-members": Linter.RuleEntry;
    "no-duplicate-imports": Linter.RuleEntry<
        [
            {
                includeExports?: boolean;
            },
        ]
    >;
    "no-new-symbol": Linter.RuleEntry;
    // TODO
    "no-restricted-exports": Linter.RuleEntry<
        [
            {
                restrictedNamedExportsPattern?: string;
                restrictedNamedExports?: boolean;
                restrictDefaultExports?: {
                    direct?: boolean;
                    named?: boolean;
                    defaultFrom?: boolean;
                    namedFrom?: boolean;
                    namespaceFrom?: boolean;
                };
            },
        ]
    >;
    // TODO: Better types
    "no-restricted-imports": Linter.RuleEntry<
        [
            {
                paths?: ReadonlyArray<{ name: string; message?: string }>;
            },
        ]
    >;
    "no-this-before-super": Linter.RuleEntry;
    "no-useless-computed-key": Linter.RuleEntry<
        [
            {
                enforceForClassMembers?: boolean;
            },
        ]
    >;
    "no-useless-constructor": Linter.RuleEntry;
    "no-useless-rename": Linter.RuleEntry<
        [
            {
                ignoreImport?: boolean;
                ignoreExport?: boolean;
                ignoreDestructuring?: boolean;
            },
        ]
    >;
    "no-var": Linter.RuleEntry;
    "object-shorthand": Linter.RuleEntry<
        [
            "always" | "consistent-as-needed" | "consistent" | "methods" | "never" | "properties",
            {
                avoidQuotes?: boolean;
                ignoreConstructors?: boolean;
                avoidExplicitReturnArrows?: boolean;
            },
        ]
    >;
    "prefer-arrow-callback": Linter.RuleEntry<
        [
            {
                allowNamedFunctions?: boolean;
                allowUnboundThis?: boolean;
            },
        ]
    >;
    "prefer-const": Linter.RuleEntry<
        [
            {
                destructuring?: "all" | "any";
                ignoreReadBeforeAssign?: boolean;
            },
        ]
    >;
    "prefer-destructuring": Linter.RuleEntry<
        [
            {
                array?: boolean;
                object?: boolean;
            },
            {
                enforceForRenamedProperties?: boolean;
            },
        ]
    >;
    "prefer-numeric-literals": Linter.RuleEntry;
    "prefer-rest-params": Linter.RuleEntry;
    "prefer-spread": Linter.RuleEntry;
    "prefer-template": Linter.RuleEntry;
    "require-yield": Linter.RuleEntry;
    "rest-spread-spacing": Linter.RuleEntry<["always" | "never"]>;
    "sort-imports": Linter.RuleEntry<
        [
            {
                ignoreCase?: boolean;
                ignoreDeclarationSort?: boolean;
                ignoreMemberSort?: boolean;
                allowSeparatedGroups?: boolean;
                // TODO: Member sort order
            },
        ]
    >;
    "symbol-description": Linter.RuleEntry;
    "template-curly-spacing": Linter.RuleEntry<["always" | "never"]>;
    "yield-star-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;
                after?: boolean;
            },
        ]
    >;
}>;

type ImportPluginEslintRules = {
    // TODO
    "import/no-unresolved": Linter.RuleEntry;
    // TODO
    "import/named": Linter.RuleEntry;
    // TODO
    "import/default": Linter.RuleEntry;
    // TODO
    "import/namespace": Linter.RuleEntry;
    // TODO
    "import/no-restricted-paths": Linter.RuleEntry;
    "import/no-empty-named-blocks": Linter.RuleEntry;
    "import/no-absolute-path": Linter.RuleEntry<
        [
            {
                esmodule?: boolean;
                commonjs?: boolean;
                amd?: boolean;
            },
        ]
    >;
    "import/no-dynamic-require": Linter.RuleEntry;
    // TODO
    "import/no-internal-modules": Linter.RuleEntry;
    "import/no-webpack-loader-syntax": Linter.RuleEntry;
    "import/no-self-import": Linter.RuleEntry;
    "import/no-cycle": Linter.RuleEntry<
        [
            {
                maxDepth?: number;
                ignoreExternal?: boolean;
                allowUnsafeDynamicCyclicDependency?: boolean;
            },
        ]
    >;
    "import/no-useless-path-segments": Linter.RuleEntry<
        [
            {
                noUselessIndex?: boolean;
                commonjs?: boolean;
            },
        ]
    >;
    "import/no-relative-parent-imports": Linter.RuleEntry;
    "import/no-relative-packages": Linter.RuleEntry;
    "import/consistent-type-specifier-style": Linter.RuleEntry<
        ["prefer-inline" | "prefer-top-level"]
    >;
    "import/export": Linter.RuleEntry;
    "import/no-named-as-default": Linter.RuleEntry;
    "import/no-named-as-default-member": Linter.RuleEntry;
    "import/no-deprecated": Linter.RuleEntry;
    "import/no-extraneous-dependencies": Linter.RuleEntry<
        [
            {
                devDependencies?: boolean;
                optionalDependencies?: boolean;
                peerDependencies?: boolean;
                bundledDependencies?: boolean;
                includeInternal?: boolean;
                includeTypes?: boolean;
            },
        ]
    >;
    "import/no-mutable-exports": Linter.RuleEntry;
    "import/no-unused-modules": Linter.RuleEntry<
        [
            {
                missingExports?: boolean;
                unusedExports?: boolean;
                src?: ReadonlyArray<string>;
                ignoreExports?: boolean;
            },
        ]
    >;
    "import/unambiguous": Linter.RuleEntry;
    "import/no-commonjs": Linter.RuleEntry<
        [
            {
                allowRequire?: boolean;
                allowConditionalRequire?: boolean;
                allowPrimitiveModules?: boolean;
            },
        ]
    >;
    "import/no-amd": Linter.RuleEntry;
    "import/no-nodejs-modules": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<string>;
            },
        ]
    >;

    // TODO
    "import/first": Linter.RuleEntry;
    "import/exports-last": Linter.RuleEntry;
    "import/no-duplicates": Linter.RuleEntry<
        [
            {
                considerQueryString?: boolean;
                "prefer-inline"?: boolean;
            },
        ]
    >;
    "import/no-namespace": Linter.RuleEntry;
    "import/extensions": Linter.RuleEntry<["always" | "ignorePackages" | "never"]>;
    "import/order": Linter.RuleEntry<
        [
            {
                groups?: ReadonlyArray<ReadonlyArray<string> | string>;
                pathGroups?: ReadonlyArray<{ pattern: string; group: string }>;
                pathGroupsExcludedImportTypes?: string;
                "newlines-between"?: "always-and-inside-groups" | "always" | "ignore" | "never";
                alphabetize?: {
                    order?: "asc" | "desc" | "ignore";
                    orderImportKind?: "asc" | "desc" | "ignore";
                    caseInsensitive?: boolean;
                };
                distinctGroup?: boolean;
            },
        ]
    >;
    "import/newline-after-import": Linter.RuleEntry<
        [
            {
                count?: number;
                considerComments?: boolean;
            },
        ]
    >;
    "import/prefer-default-export": Linter.RuleEntry;
    // TODO
    "import/max-dependencies": Linter.RuleEntry;
    "import/no-unassigned-import": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<string>;
            },
        ]
    >;
    "import/no-named-default": Linter.RuleEntry;
    "import/no-default-export": Linter.RuleEntry;
    "import/no-named-export": Linter.RuleEntry;
    "import/no-anonymous-default-export": Linter.RuleEntry<
        [
            {
                allowArray?: boolean;
                allowArrowFunction?: boolean;
                allowAnonymousClass?: boolean;
                allowAnonymousFunction?: boolean;
                allowCallExpression?: boolean;
                allowLiteral?: boolean;
                allowObject?: boolean;
                allowNew?: boolean;
            },
        ]
    >;
    "import/group-exports": Linter.RuleEntry;
    // TODO
    "import/no-import-module-exports": Linter.RuleEntry;
    // TODO
    "import/dynamic-import-chunkname": Linter.RuleEntry;
};

type TypescriptEslintPluginRules = Partial<{
    "@typescript-eslint/adjacent-overload-signatures": Linter.RuleEntry;
    "@typescript-eslint/array-type": Linter.RuleEntry<
        [
            {
                default?: "array-simple" | "array" | "generic";
                readonly?: "array-simple" | "array" | "generic";
            },
        ]
    >;
    "@typescript-eslint/await-thenable": Linter.RuleEntry;
    "@typescript-eslint/ban-ts-comment": Linter.RuleEntry<
        [
            {
                "ts-expect-error"?: boolean | "allowed-with-description";
                "ts-ignore"?: boolean | "allowed-with-description";
                "ts-nocheck"?: boolean | "allowed-with-description";
                "ts-check"?: boolean | "allowed-with-description";
                minimumDescriptionLength?: number;
            },
        ]
    >;
    "@typescript-eslint/ban-tslint-comment": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-function-type": Linter.RuleEntry;
    "@typescript-eslint/no-wrapper-object-types": Linter.RuleEntry;
    "@typescript-eslint/no-restricted-types": Linter.RuleEntry<
        [
            {
                types?: Record<
                    string,
                    | string
                    | true
                    | {
                          fixWith?: string;
                          message?: string;
                          suggest?: ReadonlyArray<string>;
                      }
                >;
            },
        ]
    >;

    "@typescript-eslint/class-literal-property-style": Linter.RuleEntry<["fields" | "getters"]>;
    "@typescript-eslint/class-methods-use-this": Linter.RuleEntry<
        [
            {
                exceptMethods?: ReadonlyArray<string>;
            },
        ]
    >;
    "@typescript-eslint/consistent-indexed-object-style": Linter.RuleEntry<
        ["index-signature" | "record"]
    >;
    "@typescript-eslint/consistent-return": Linter.RuleEntry;
    "@typescript-eslint/consistent-type-assertions": Linter.RuleEntry<
        [
            {
                assertionStyle?: "angle-bracket" | "as";
                objectLiteralTypeAssertions?: "allow-as-parameter" | "allow" | "never";
            },
        ]
    >;
    "@typescript-eslint/consistent-type-definitions": Linter.RuleEntry<["interface" | "type"]>;
    "@typescript-eslint/consistent-type-imports": Linter.RuleEntry<
        [
            {
                prefer?: "no-type-imports" | "type-imports";
                disallowTypeAnnotations?: boolean;
                fixStyle?: "inline-type-imports" | "separate-type-imports";
            },
        ]
    >;
    "@typescript-eslint/explicit-function-return-type": Linter.RuleEntry<
        [
            {
                allowExpressions?: boolean;
                allowTypedFunctionExpressions?: boolean;
                allowHigherOrderFunctions?: boolean;
                allowDirectConstAssertionInArrowFunctions?: boolean;
                allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
            },
        ]
    >;
    "@typescript-eslint/explicit-member-accessibility": Linter.RuleEntry<
        [
            {
                accessibility?: AccessibilityLevel;
                ignoredMethodNames?: ReadonlyArray<string>;
                overrides?: {
                    accessors?: AccessibilityLevel;
                    constructors?: AccessibilityLevel;
                    methods?: AccessibilityLevel;
                    properties?: AccessibilityLevel;
                    parameterProperties?: AccessibilityLevel;
                };
            },
        ]
    >;
    "@typescript-eslint/explicit-module-boundary-types": Linter.RuleEntry<
        [
            {
                allowArgumentsExplicitlyTypedAsAny?: boolean;
                allowDirectConstAssertionInArrowFunctions?: boolean;
                allowedNames?: ReadonlyArray<string>;
                allowHigherOrderFunctions?: boolean;
                allowTypedFunctionExpressions?: boolean;
            },
        ]
    >;
    "@typescript-eslint/member-delimiter-style": Linter.RuleEntry<
        [
            {
                multiline?: {
                    delimiter?: "comma" | "none" | "semi";
                    requireLast?: boolean;
                };
                singleline?: {
                    delimiter?: "comma" | "semi";
                    requireLast?: boolean;
                };
                overrides?: {
                    interface?: {
                        multiline?: {
                            delimiter?: "comma" | "none" | "semi";
                            requireLast?: boolean;
                        };
                        singleline?: {
                            delimiter?: "comma" | "semi";
                            requireLast?: boolean;
                        };
                    };
                    typeLiteral?: {
                        multiline?: {
                            delimiter?: "comma" | "none" | "semi";
                            requireLast?: boolean;
                        };
                        singleline?: {
                            delimiter?: "comma" | "semi";
                            requireLast?: boolean;
                        };
                    };
                };
                multilineDetection?: "brackets" | "last-member";
            },
        ]
    >;
    // TODO: member-ordering
    "@typescript-eslint/member-ordering": Linter.RuleEntry;
    "@typescript-eslint/method-signature-style": Linter.RuleEntry<["method" | "property"]>;
    "@typescript-eslint/naming-convention": Linter.RuleEntry<
        Array<{
            // format options
            format: ReadonlyArray<
                | "camelCase"
                | "PascalCase"
                | "snake_case"
                | "strictCamelCase"
                | "StrictPascalCase"
                | "UPPER_CASE"
            > | null;
            custom?: Readonly<{
                regex: string;
                match: boolean;
            }>;
            leadingUnderscore?:
                | "allow"
                | "allowDouble"
                | "allowSingleOrDouble"
                | "forbid"
                | "require"
                | "requireDouble";

            trailingUnderscore?:
                | "allow"
                | "allowDouble"
                | "allowSingleOrDouble"
                | "forbid"
                | "require"
                | "requireDouble";
            prefix?: ReadonlyArray<string>;
            suffix?: ReadonlyArray<string>;

            // selector options
            selector: ReadonlyArray<string> | string;
            filter?:
                | string
                | {
                      regex: string;
                      match: boolean;
                  };
            // the allowed values for these are dependent on the selector - see below
            modifiers?: ReadonlyArray<string>;
            types?: ReadonlyArray<string>;
        }>
    >;
    "@typescript-eslint/no-array-delete": Linter.RuleEntry;
    "@typescript-eslint/no-base-to-string": Linter.RuleEntry<
        [
            {
                ignoredTypeNames?: ReadonlyArray<string>;
            },
        ]
    >;
    "@typescript-eslint/no-confusing-non-null-assertion": Linter.RuleEntry;
    "@typescript-eslint/no-confusing-void-expression": Linter.RuleEntry<
        [
            {
                ignoreArrowShorthand?: boolean;
                ignoreVoidOperator?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-duplicate-type-constituents": Linter.RuleEntry<
        [
            {
                ignoreIntersections?: boolean;
                ignoreUnions?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-dynamic-delete": Linter.RuleEntry;
    "@typescript-eslint/no-empty-interface": Linter.RuleEntry<
        [
            {
                allowSingleExtends?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-explicit-any": Linter.RuleEntry<
        [
            {
                fixToUnknown?: boolean;
                ignoreRestArgs?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-extra-non-null-assertion": Linter.RuleEntry;
    "@typescript-eslint/no-extraneous-class": Linter.RuleEntry<
        [
            {
                allowConstructorOnly?: boolean;
                allowEmpty?: boolean;
                allowStaticOnly?: boolean;
                allowWithDecorator?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-floating-promises": Linter.RuleEntry<
        [
            {
                allowForKnownSafeCalls?: boolean;
                checkThenables?: boolean;
                ignoreVoid?: boolean;
                ignoreIIFE?: boolean;
                allowForKnownSafePromises?: ReadonlyArray<
                    | string
                    | {
                          from: "file";
                          name: string | [string, ...Array<string>];
                          path?: string;
                      }
                    | {
                          from: "lib";
                          name: string | [string, ...Array<string>];
                      }
                    | {
                          from: "package";
                          name: string | [string, ...Array<string>];
                          package: string;
                      }
                >;
            },
        ]
    >;
    "@typescript-eslint/no-for-in-array": Linter.RuleEntry;
    "@typescript-eslint/no-import-type-side-effects": Linter.RuleEntry;
    "@typescript-eslint/no-inferrable-types": Linter.RuleEntry<
        [
            {
                ignoreParameters?: boolean;
                ignoreProperties?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-invalid-void-type": Linter.RuleEntry<
        [
            {
                allowInGenericTypeArguments?: boolean;
                allowAsThisParameter?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-meaningless-void-operator": Linter.RuleEntry<
        [
            {
                checkNever?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-misused-new": Linter.RuleEntry;
    "@typescript-eslint/no-misused-promises": Linter.RuleEntry<
        [
            {
                checksConditionals?: boolean;
                checksVoidReturn?:
                    | boolean
                    | {
                          arguments?: boolean;
                          attributes?: boolean;
                          properties?: boolean;
                          returns?: boolean;
                          variables?: boolean;
                      };
            },
        ]
    >;
    "@typescript-eslint/no-mixed-enums": Linter.RuleEntry;
    "@typescript-eslint/no-namespace": Linter.RuleEntry<
        [
            {
                allowDeclarations?: boolean;
                allowDefinitionFiles?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": Linter.RuleEntry;
    "@typescript-eslint/no-non-null-asserted-optional-chain": Linter.RuleEntry;
    "@typescript-eslint/no-non-null-assertion": Linter.RuleEntry;
    "@typescript-eslint/parameter-properties": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<
                    | "private readonly"
                    | "private"
                    | "protected readonly "
                    | "protected"
                    | "public readonly"
                    | "public"
                    | "readonly"
                >;
                prefer?: "class-property" | "parameter-property";
            },
        ]
    >;
    "@typescript-eslint/no-require-imports": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<string>;
            },
        ]
    >;
    "@typescript-eslint/no-this-alias": Linter.RuleEntry<
        [
            {
                allowDestructuring?: boolean;
                allowedNames?: ReadonlyArray<string>;
            },
        ]
    >;
    "@typescript-eslint/no-type-alias": Linter.RuleEntry<
        [
            {
                allowAliases?:
                    | "always"
                    | "in-intersections"
                    | "in-unions-and-intersections"
                    | "in-unions"
                    | "never";
                allowCallbacks?: "always" | "never";
                allowConditionalTypes?: "always" | "never";
                allowConstructors?: "always" | "never";
                allowLiterals?:
                    | "always"
                    | "in-intersections"
                    | "in-unions-and-intersections"
                    | "in-unions"
                    | "never";
                allowMappedTypes?:
                    | "always"
                    | "in-intersections"
                    | "in-unions-and-intersections"
                    | "in-unions"
                    | "never";
                allowTupleTypes?:
                    | "always"
                    | "in-intersections"
                    | "in-unions-and-intersections"
                    | "in-unions"
                    | "never";
                allowGenerics?: "always" | "never";
            },
        ]
    >;
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": Linter.RuleEntry<
        [
            {
                allowComparingNullableBooleansToTrue?: boolean;
                allowComparingNullableBooleansToFalse?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-unnecessary-condition": Linter.RuleEntry<
        [
            {
                allowConstantLoopConditions?: boolean;
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-unnecessary-parameter-property-assignment": Linter.RuleEntry;
    "@typescript-eslint/no-unnecessary-qualifier": Linter.RuleEntry;
    "@typescript-eslint/no-unnecessary-template-expression": Linter.RuleEntry;
    "@typescript-eslint/no-unnecessary-type-arguments": Linter.RuleEntry;
    "@typescript-eslint/no-unnecessary-type-assertion": Linter.RuleEntry<
        [
            {
                typesToIgnore: ReadonlyArray<string>;
            },
        ]
    >;
    "@typescript-eslint/no-unnecessary-type-constraint": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-argument": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-assignment": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-call": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-enum-comparison": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-member-access": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-return": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-unary-minus": Linter.RuleEntry;
    "@typescript-eslint/no-var-requires": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<string>;
            },
        ]
    >;
    "@typescript-eslint/non-nullable-type-assertion-style": Linter.RuleEntry;
    "@typescript-eslint/prefer-as-const": Linter.RuleEntry;
    "@typescript-eslint/prefer-enum-initializers": Linter.RuleEntry;
    "@typescript-eslint/prefer-for-of": Linter.RuleEntry;
    "@typescript-eslint/prefer-function-type": Linter.RuleEntry;
    "@typescript-eslint/prefer-includes": Linter.RuleEntry;
    "@typescript-eslint/prefer-literal-enum-member": Linter.RuleEntry<
        [
            {
                allowBitwiseExpressions?: boolean;
            },
        ]
    >;
    "@typescript-eslint/prefer-namespace-keyword": Linter.RuleEntry;
    "@typescript-eslint/prefer-nullish-coalescing": Linter.RuleEntry<
        [
            {
                ignoreBooleanCoercion?: boolean;
                ignoreTernaryTests?: boolean;
                ignoreConditionalTests?: boolean;
                ignoreMixedLogicalExpressions?: boolean;
                ignorePrimitives?:
                    | true
                    | {
                          bigint?: boolean;
                          boolean?: boolean;
                          number?: boolean;
                          string?: boolean;
                      };
            },
        ]
    >;
    "@typescript-eslint/prefer-optional-chain": Linter.RuleEntry;
    "@typescript-eslint/prefer-promise-reject-errors": Linter.RuleEntry<
        [
            {
                allowEmptyReject?: boolean;
            },
        ]
    >;
    "@typescript-eslint/prefer-readonly": Linter.RuleEntry<
        [
            {
                onlyInlineLambdas?: boolean;
            },
        ]
    >;
    "@typescript-eslint/prefer-readonly-parameter-types": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<
                    | string
                    | {
                          from: "file";
                          name: string | [string, ...ReadonlyArray<string>];
                          path?: string;
                      }
                    | {
                          from: "lib";
                          name: string | [string, ...ReadonlyArray<string>];
                      }
                    | {
                          from: "package";
                          name: string | [string, ...ReadonlyArray<string>];
                          package: string;
                      }
                >;
                checkParameterProperties?: boolean;
                ignoreInferredTypes?: boolean;
                treatMethodsAsReadonly?: boolean;
            },
        ]
    >;
    "@typescript-eslint/prefer-reduce-type-parameter": Linter.RuleEntry;
    "@typescript-eslint/prefer-regexp-exec": Linter.RuleEntry;
    "@typescript-eslint/prefer-return-this-type": Linter.RuleEntry;
    "@typescript-eslint/prefer-string-starts-ends-with": Linter.RuleEntry<
        [
            {
                allowSingleElementEquality?: "always" | "never";
            },
        ]
    >;
    "@typescript-eslint/prefer-ts-expect-error": Linter.RuleEntry;
    "@typescript-eslint/promise-function-async": Linter.RuleEntry<
        [
            {
                allowAny?: boolean;
                allowedPromiseNames?: ReadonlyArray<string>;
                checkArrowFunctions?: boolean;
                checkFunctionDeclarations?: boolean;
                checkFunctionExpressions?: boolean;
                checkMethodDeclarations?: boolean;
            },
        ]
    >;
    "@typescript-eslint/require-array-sort-compare": Linter.RuleEntry<
        [
            {
                ignoreStringArrays?: boolean;
            },
        ]
    >;
    "@typescript-eslint/restrict-plus-operands": Linter.RuleEntry<
        [
            {
                allowAny?: boolean;
                allowBoolean?: boolean;
                allowNullish?: boolean;
                allowNumberAndString?: boolean;
                allowRegExp?: boolean;
                skipCompoundAssignments?: boolean;
            },
        ]
    >;
    "@typescript-eslint/restrict-template-expressions": Linter.RuleEntry<
        [
            {
                allowArray?: boolean;
                allowNumber?: boolean;
                allowBoolean?: boolean;
                allowAny?: boolean;
                allowNullish?: boolean;
                allowRegExp?: boolean;
            },
        ]
    >;
    "@typescript-eslint/sort-type-constituents": Linter.RuleEntry<
        [
            {
                checkIntersections?: boolean;
                checkUnions?: boolean;
                groupOrder?: ReadonlyArray<
                    | "conditional"
                    | "function"
                    | "import"
                    | "intersection"
                    | "keyword"
                    | "literal"
                    | "named"
                    | "nullish"
                    | "object"
                    | "operator"
                    | "tuple"
                    | "union"
                >;
            },
        ]
    >;
    "@typescript-eslint/strict-boolean-expressions": Linter.RuleEntry<
        [
            {
                allowString?: boolean;
                allowNumber?: boolean;
                allowNullableObject?: boolean;
                allowNullableBoolean?: boolean;
                allowNullableString?: boolean;
                allowNullableNumber?: boolean;
                allowAny?: boolean;
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
            },
        ]
    >;
    "@typescript-eslint/switch-exhaustiveness-check": Linter.RuleEntry<
        [
            {
                allowDefaultCaseForExhaustiveSwitch?: boolean;
                requireDefaultForNonUnion?: boolean;
            },
        ]
    >;
    "@typescript-eslint/triple-slash-reference": Linter.RuleEntry<
        [
            {
                path?: "always" | "never";
                types?: "always" | "never" | "prefer-import";
                lib?: "always" | "never";
            },
        ]
    >;
    "@typescript-eslint/type-annotation-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;
                after?: boolean;
                overrides?: {
                    colon?: {
                        before?: boolean;
                        after?: boolean;
                    };
                    arrow?: {
                        before?: boolean;
                        after?: boolean;
                    };
                };
            },
        ]
    >;
    "@typescript-eslint/typedef": Linter.RuleEntry;
    "@typescript-eslint/unbound-method": Linter.RuleEntry<
        [
            {
                ignoreStatic?: boolean;
            },
        ]
    >;
    "@typescript-eslint/unified-signatures": Linter.RuleEntry<
        [
            {
                ignoreDifferentlyNamedParameters?: boolean;
            },
        ]
    >;
    "@typescript-eslint/consistent-type-exports": Linter.RuleEntry;
    "@typescript-eslint/brace-style": Linter.RuleEntry<
        ["1tbs" | "allman" | "stroustrup", { allowSingleLine?: boolean }]
    >;
    "@typescript-eslint/comma-dangle": Linter.RuleEntry<
        [
            {
                arrays?: "always-multiline" | "always" | "never" | "only-multiline";
                objects?: "always-multiline" | "always" | "never" | "only-multiline";
                imports?: "always-multiline" | "always" | "never" | "only-multiline";
                exports?: "always-multiline" | "always" | "never" | "only-multiline";
                functions?: "always-multiline" | "always" | "never" | "only-multiline";
                enums?: "always-multiline" | "always" | "never" | "only-multiline";
                generics?: "always-multiline" | "always" | "never" | "only-multiline";
                tuples?: "always-multiline" | "always" | "never" | "only-multiline";
            },
        ]
    >;
    "@typescript-eslint/comma-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;
                after?: boolean;
            },
        ]
    >;
    "@typescript-eslint/default-param-last": Linter.RuleEntry;
    "@typescript-eslint/dot-notation": Linter.RuleEntry<
        [
            {
                allowKeywords?: boolean;
                allowPattern?: boolean;
                allowPrivateClassPropertyAccess?: boolean;
                allowProtectedClassPropertyAccess?: boolean;
                allowIndexSignaturePropertyAccess?: boolean;
            },
        ]
    >;
    "@typescript-eslint/func-call-spacing": Linter.RuleEntry<["always" | "never"]>;
    "@typescript-eslint/indent": Linter.RuleEntry<
        [
            number | "tab",
            {
                ignoredNodes?: ReadonlyArray<string>;
                SwitchCase?: number;
                VariableDeclarator?: number | "first";
                outerIIFEBody?: number | "off";
                MemberExpression?: number | "off";
                FunctionDeclaration?: {
                    parameters?: number | "off";
                    body?: number;
                };
                FunctionExpression?: {
                    parameters?: number | "off";
                    body?: number;
                };
                CallExpression?: {
                    arguments: number;
                };
                ArrayExpression?: number | "first" | "off";
                ObjectExpression?: number | "first" | "off";
                ImportDeclaration?: number | "first" | "off";
                flatTernaryExpressions?: boolean;
                offsetTernaryExpressions?: boolean;
                ignoreComments?: boolean;
            },
        ]
    >;
    "@typescript-eslint/init-declarations": Linter.RuleEntry<
        ["always" | "never", { ignoreForLoopInit?: boolean }]
    >;
    "@typescript-eslint/keyword-spacing": Linter.RuleEntry<
        [
            {
                before?: boolean;
                after?: boolean;
                overrides?: ReadonlyArray<string>;
            },
        ]
    >;
    "@typescript-eslint/lines-between-class-members": Linter.RuleEntry<
        [
            "always" | "never",
            {
                exceptAfterSingleLine?: boolean;
                exceptAfterOverload?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-array-constructor": Linter.RuleEntry;
    "@typescript-eslint/no-dupe-class-members": Linter.RuleEntry;
    "@typescript-eslint/no-duplicate-enum-values": Linter.RuleEntry;
    "@typescript-eslint/no-empty-function": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<string>;
            },
        ]
    >;
    "@typescript-eslint/no-extra-parens": Linter.RuleEntry<
        [
            "all" | "functions",
            {
                conditionalAssign?: boolean;
                returnAssign?: boolean;
                nestedBinaryExpressions?: boolean;
                ignoreJSX?: boolean;
                enforceForArrowConditionals?: boolean;
                enforceForSequenceExpressions?: boolean;
                enforceForNewInMemberExpressions?: boolean;
                enforceForFunctionPrototypeMethods?: boolean;
                allowParensAfterCommentPattern?: boolean;
                ternaryOperandBinaryExpressions?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-implied-eval": Linter.RuleEntry;
    "@typescript-eslint/no-invalid-this": Linter.RuleEntry<
        [
            {
                capIsConstructor?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-loop-func": Linter.RuleEntry;
    "@typescript-eslint/no-magic-numbers": Linter.RuleEntry<
        [
            {
                ignore?: ReadonlyArray<number | string>;
                ignoreArrayIndexes?: boolean;
                ignoreDefaultValues?: boolean;
                enforceConst?: boolean;
                detectObjects?: boolean;
                ignoreEnums?: boolean;
                ignoreNumericLiteralTypes?: boolean;
                ignoreReadonlyClassProperties?: boolean;
                ignoreTypeIndexes?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-redeclare": Linter.RuleEntry<
        [
            {
                builtinGlobals?: boolean;
                ignoreDeclarationMerge?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-restricted-imports": Linter.RuleEntry<
        [
            {
                paths?: ReadonlyArray<{ name: string; message?: string }>;
            },
        ]
    >;
    "@typescript-eslint/no-shadow": Linter.RuleEntry<
        [
            {
                builtinGlobals?: boolean;
                hoist?: "all" | "functions" | "never";
                allow?: ReadonlyArray<string>;
                ignoreTypeValueShadow?: boolean;
                ignoreFunctionTypeParameterNameValueShadow?: boolean;
                ignoreOnInitialization?: boolean;
            },
        ]
    >;
    "@typescript-eslint/only-throw-error": Linter.RuleEntry<
        [
            {
                allowThrowingAny?: boolean;
                allowThrowingUnknown?: boolean;
                allow?: Array<
                    | string
                    | {
                          from: "file";
                          name: string | readonly [string, ...ReadonlyArray<string>];
                          path?: string;
                      }
                    | {
                          from: "lib";
                          name: string | readonly [string, ...ReadonlyArray<string>];
                      }
                    | {
                          from: "package";
                          name: string | readonly [string, ...ReadonlyArray<string>];
                          package: string;
                      }
                >;
            },
        ]
    >;
    "@typescript-eslint/no-unused-expressions": Linter.RuleEntry<
        [
            {
                allowShortCircuit?: boolean;
                allowTernary?: boolean;
                allowTaggedTemplates?: boolean;
                enforceForJSX?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-unused-vars": Linter.RuleEntry<
        [
            {
                vars?: "all" | "local";
                varsIgnorePattern?: string;
                args?: "after-used" | "all" | "none";
                ignoreRestSiblings?: boolean;
                argsIgnorePattern?: string;
                caughtErrors?: "all" | "none";
                caughtErrorsIgnorePattern?: string;
                destructuredArrayIgnorePattern?: string;
                reportUsedIgnorePattern?: boolean;
                ignoreClassWithStaticInitBlock?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-use-before-define": Linter.RuleEntry<
        [
            {
                functions?: boolean;
                classes?: boolean;
                variables?: boolean;
                enums?: boolean;
                typedefs?: boolean;
                ignoreTypeReferences?: true;
            },
        ]
    >;
    "@typescript-eslint/no-useless-constructor": Linter.RuleEntry;
    // TODO
    "@typescript-eslint/padding-line-between-statements": Linter.RuleEntry;
    "@typescript-eslint/prefer-find": Linter.RuleEntry;
    "@typescript-eslint/quotes": Linter.RuleEntry<
        [
            "double" | "single",
            {
                avoidEscape?: boolean;
                allowTemplateLiterals?: boolean;
            },
        ]
    >;
    "@typescript-eslint/require-await": Linter.RuleEntry;
    "@typescript-eslint/return-await": Linter.RuleEntry<["always" | "in-try-catch" | "never"]>;
    "@typescript-eslint/semi": Linter.RuleEntry<["always" | "never"]>;
    "@typescript-eslint/space-before-function-paren": Linter.RuleEntry<
        [
            {
                anonymous?: "always" | "ignore" | "never";
                named?: "always" | "ignore" | "never";
                asyncArrow?: "always" | "ignore" | "never";
            },
        ]
    >;
    "@typescript-eslint/space-infix-ops": Linter.RuleEntry<
        [
            {
                int32Hint?: boolean;
            },
        ]
    >;
    "@typescript-eslint/no-redundant-type-constituents": Linter.RuleEntry;
    "@typescript-eslint/no-useless-empty-export": Linter.RuleEntry;
    "@typescript-eslint/space-before-blocks": Linter.RuleEntry<
        [
            {
                functions?: "always" | "never" | "off";
                keywords?: "always" | "never" | "off";
                classes?: "always" | "never" | "off";
            },
        ]
    >;
    "@typescript-eslint/consistent-generic-constructors": Linter.RuleEntry<
        ["constructor" | "type-annotation"]
    >;
    "@typescript-eslint/prefer-destructuring": Linter.RuleEntry<
        [
            {
                array?: boolean;
                object?: boolean;
            },
            {
                enforceForRenamedProperties?: boolean;
            },
        ]
    >;
    "@typescript-eslint/use-unknown-in-catch-callback-variable": Linter.RuleEntry;
}>;

declare module "eslint" {
    export namespace Linter {
        export interface RulesRecord
            extends BaseEslintRules,
                ImportPluginEslintRules,
                TypescriptEslintPluginRules {}
    }
}

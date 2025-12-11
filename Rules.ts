import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

type AccessibilityLevel = "explicit" | "no-public" | "off";

type ArrayOption = "array-simple" | "array" | "generic";

type DirectiveConfigSchema =
    | boolean
    | "allow-with-description"
    | {
          descriptionFormat?: string;
      };

type FileSpecifier = { from: "file"; name: Array<string> | string; path?: string };
type LibSpecifier = { from: "lib"; name: Array<string> | string };
type PackageSpecifier = { from: "package"; name: Array<string> | string; package: string };

type TypeOrValueSpecifier = FileSpecifier | LibSpecifier | PackageSpecifier;

// eslint "@typescript-eslint/member-ordering": ["error", { "default": { "memberTypes": "never", "order": "alphabetically" } }]

export type ImportPluginRules = {
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
    "import/no-deprecated": Linter.RuleEntry<
        [
            {
                /** Type specifiers that can be allowed. */
                allow?: Array<
                    | string
                    | {
                          from: "file";
                          name: Array<string> | string;
                          path?: string;
                      }
                    | {
                          from: "lib";
                          name: Array<string> | string;
                      }
                    | {
                          from: "package";
                          name: Array<string> | string;
                          package: string;
                      }
                >;
            },
        ]
    >;
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

export type TypescriptEslintRules = Partial<{
    "@typescript-eslint/adjacent-overload-signatures": Linter.RuleEntry;
    "@typescript-eslint/array-type": Linter.RuleEntry<
        [
            {
                /** The array type expected for mutable cases. */
                default?: ArrayOption;
                /** The array type expected for readonly cases. If omitted, the value for `default` will be used. */
                readonly?: ArrayOption;
            },
        ]
    >;
    "@typescript-eslint/await-thenable": Linter.RuleEntry;
    "@typescript-eslint/ban-ts-comment": Linter.RuleEntry<
        [
            {
                /** Whether allow ts-check directives, and with which restrictions. */
                "ts-check"?: DirectiveConfigSchema;
                /** Whether and when expect-error directives, and with which restrictions. */
                "ts-expect-error"?: DirectiveConfigSchema;
                /** Whether allow ts-ignore directives, and with which restrictions. */
                "ts-ignore"?: DirectiveConfigSchema;
                /** Whether allow ts-nocheck directives, and with which restrictions. */
                "ts-nocheck"?: DirectiveConfigSchema;
                /** A minimum character length for descriptions when `allow-with-description` is enabled. */
                minimumDescriptionLength?: number;
            },
        ]
    >;
    "@typescript-eslint/ban-tslint-comment": Linter.RuleEntry;
    "@typescript-eslint/no-misused-spread": Linter.RuleEntry<
        [
            {
                /** An array of type specifiers that are known to be safe to spread. */
                allow?: Array<
                    | {
                          from: "file";
                          name: string | Array<string>;
                          path?: string;
                      }
                    | {
                          from: "lib";
                          name: string | Array<string>;
                      }
                    | {
                          from: "package";
                          name: string | Array<string>;
                          package: string;
                      }
                    | string
                >;
            },
        ]
    >;
    "@typescript-eslint/no-unsafe-function-type": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-type-assertion": Linter.RuleEntry;
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
                exceptMethods?: Array<string>;
                /**
                 * @default true
                 */
                enforceForClassFields?: boolean;
                /**
                 * @default false
                 */
                ignoreOverrideMethods?: boolean;
                ignoreClassesWithImplements?: "all" | "public-fields";
                ignoreClassesThatImplementAnInterface?: boolean | "public-fields";
            },
        ]
    >;
    "@typescript-eslint/consistent-indexed-object-style": Linter.RuleEntry<
        ["index-signature" | "record"]
    >;
    "@typescript-eslint/consistent-return": Linter.RuleEntry;
    "@typescript-eslint/consistent-type-assertions": Linter.RuleEntry<
        [
            | {
                  /** The expected assertion style to enforce. */
                  assertionStyle: /** The expected assertion style to enforce. */ "never";
              }
            | {
                  /** Whether to always prefer type declarations for array literals used as variable initializers, rather than type assertions. */
                  arrayLiteralTypeAssertions?:
                      | "allow-as-parameter"
                      | "never"
                      /** Whether to always prefer type declarations for array literals used as variable initializers, rather than type assertions. */
                      | "allow";
                  /** The expected assertion style to enforce. */
                  assertionStyle?:
                      | "angle-bracket"
                      /** The expected assertion style to enforce. */
                      | "as";
                  /** Whether to always prefer type declarations for object literals used as variable initializers, rather than type assertions. */
                  objectLiteralTypeAssertions?:
                      | "allow-as-parameter"
                      | "never"
                      /** Whether to always prefer type declarations for object literals used as variable initializers, rather than type assertions. */
                      | "allow";
              },
        ]
    >;
    "@typescript-eslint/consistent-type-definitions": Linter.RuleEntry<["interface" | "type"]>;
    "@typescript-eslint/consistent-type-imports": Linter.RuleEntry<
        [
            {
                /** Whether to disallow type imports in type annotations (`import()`). */
                disallowTypeAnnotations?: boolean;
                /** The expected type modifier to be added when an import is detected as used only in the type position. */
                fixStyle?:
                    | "inline-type-imports"
                    /** The expected type modifier to be added when an import is detected as used only in the type position. */
                    | "separate-type-imports";
                /** The expected import kind for type-only imports. */
                prefer?:
                    | "no-type-imports"
                    /** The expected import kind for type-only imports. */
                    | "type-imports";
            },
        ]
    >;
    "@typescript-eslint/explicit-function-return-type": Linter.RuleEntry<
        [
            {
                /** Whether to allow arrow functions that start with the `void` keyword. */
                allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
                /** Whether to ignore arrow functions immediately returning a `as const` value. */
                allowDirectConstAssertionInArrowFunctions?: boolean;
                /** Whether to ignore function expressions (functions which are not part of a declaration). */
                allowExpressions?: boolean;
                /** Whether to ignore functions that don't have generic type parameters. */
                allowFunctionsWithoutTypeParameters?: boolean;
                /** Whether to ignore functions immediately returning another function expression. */
                allowHigherOrderFunctions?: boolean;
                /** Whether to ignore immediately invoked function expressions (IIFEs). */
                allowIIFEs?: boolean;
                /** Whether to ignore type annotations on the variable of function expressions. */
                allowTypedFunctionExpressions?: boolean;
                /** An array of function/method names that will not have their arguments or return values checked. */
                allowedNames?: Array<string>;
            },
        ]
    >;
    "@typescript-eslint/explicit-member-accessibility": Linter.RuleEntry<
        [
            {
                /** Which accessibility modifier is required to exist or not exist. */
                accessibility?: AccessibilityLevel;
                /** Specific method names that may be ignored. */
                ignoredMethodNames?: Array<string>;
                /** Changes to required accessibility modifiers for specific kinds of class members. */
                overrides?: {
                    /** Which member accessibility modifier requirements to apply for accessors. */
                    accessors?: AccessibilityLevel;
                    /** Which member accessibility modifier requirements to apply for constructors. */
                    constructors?: AccessibilityLevel;
                    /** Which member accessibility modifier requirements to apply for methods. */
                    methods?: AccessibilityLevel;
                    /** Which member accessibility modifier requirements to apply for parameterProperties. */
                    parameterProperties?: AccessibilityLevel;
                    /** Which member accessibility modifier requirements to apply for properties. */
                    properties?: AccessibilityLevel;
                };
            },
        ]
    >;
    "@typescript-eslint/explicit-module-boundary-types": Linter.RuleEntry<
        [
            {
                /** Whether to ignore arguments that are explicitly typed as `any`. */
                allowArgumentsExplicitlyTypedAsAny?: boolean;
                /**
                 * Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.
                 * You must still type the parameters of the function.
                 */
                allowDirectConstAssertionInArrowFunctions?: boolean;
                /**
                 * Whether to ignore return type annotations on functions immediately returning another function expression.
                 * You must still type the parameters of the function.
                 */
                allowHigherOrderFunctions?: boolean;
                /** Whether to ignore return type annotations on functions with overload signatures. */
                allowOverloadFunctions?: boolean;
                /** Whether to ignore type annotations on the variable of a function expression. */
                allowTypedFunctionExpressions?: boolean;
                /** An array of function/method names that will not have their arguments or return values checked. */
                allowedNames?: Array<string>;
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
                /** Whether to also check values of type `unknown` */
                checkUnknown?: boolean;
                /** Stringified type names to ignore. */
                ignoredTypeNames?: Array<string>;
            },
        ]
    >;
    "@typescript-eslint/no-confusing-non-null-assertion": Linter.RuleEntry;
    "@typescript-eslint/no-confusing-void-expression": Linter.RuleEntry<
        [
            {
                /** Whether to ignore "shorthand" `() =>` arrow functions: those without `{ ... }` braces. */
                ignoreArrowShorthand?: boolean;
                /** Whether to ignore returns that start with the `void` operator. */
                ignoreVoidOperator?: boolean;
                /** Whether to ignore returns from functions with explicit `void` return types and functions with contextual `void` return types. */
                ignoreVoidReturningFunctions?: boolean;
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
    /**
     * @deprecated
     */
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
                /** Type specifiers of functions whose calls are safe to float. */
                allowForKnownSafeCalls?: Array<
                    | {
                          from: "file";
                          name: string | Array<string>;
                          path?: string;
                      }
                    | {
                          from: "lib";
                          name: string | Array<string>;
                      }
                    | {
                          from: "package";
                          name: string | Array<string>;
                          package: string;
                      }
                    | string
                >;
                /** Type specifiers that are known to be safe to float. */
                allowForKnownSafePromises?: Array<
                    | {
                          from: "file";
                          name: string | Array<string>;
                          path?: string;
                      }
                    | {
                          from: "lib";
                          name: string | Array<string>;
                      }
                    | {
                          from: "package";
                          name: string | Array<string>;
                          package: string;
                      }
                    | string
                >;
                /** Whether to check all "Thenable"s, not just the built-in Promise type. */
                checkThenables?: boolean;
                /** Whether to ignore async IIFEs (Immediately Invoked Function Expressions). */
                ignoreIIFE?: boolean;
                /** Whether to ignore `void` expressions. */
                ignoreVoid?: boolean;
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
                /** Whether a `this` parameter of a function may be `void`. */
                allowAsThisParameter?: boolean;
                /** Whether `void` can be used as a valid value for generic type parameters. */
                allowInGenericTypeArguments?: /**
                 * Whether `void` can be used as a valid value for generic type parameters.
                 * Whether `void` can be used as a valid value for all generic type parameters.
                 */
                | boolean
                    /** Allowlist of types that may accept `void` as a generic type parameter. */
                    | Array<string>;
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
                /** Whether to warn when a Promise is provided to conditional statements. */
                checksConditionals?: boolean;
                /** Whether to warn when `...` spreading a `Promise`. */
                checksSpreads?: boolean;
                /** Whether to warn when a Promise is returned from a function typed as returning `void`. */
                checksVoidReturn?: /**
                 * Whether to warn when a Promise is returned from a function typed as returning `void`.
                 * Whether to disable checking all asynchronous functions.
                 */
                | boolean
                    /** Which forms of functions may have checking disabled. */
                    | {
                          /** Disables checking an asynchronous function passed as argument where the parameter type expects a function that returns `void`. */
                          arguments?: boolean;
                          /** Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns `void`. */
                          attributes?: boolean;
                          /** Disables checking an asynchronous method in a type that extends or implements another type expecting that method to return `void`. */
                          inheritedMethods?: boolean;
                          /** Disables checking an asynchronous function passed as an object property expected to be a function that returns `void`. */
                          properties?: boolean;
                          /** Disables checking an asynchronous function returned in a function whose return type is a function that returns `void`. */
                          returns?: boolean;
                          /** Disables checking an asynchronous function used as a variable whose return type is a function that returns `void`. */
                          variables?: boolean;
                      };
            },
        ]
    >;
    "@typescript-eslint/no-mixed-enums": Linter.RuleEntry;
    "@typescript-eslint/no-namespace": Linter.RuleEntry<
        [
            {
                /** Whether to allow `declare` with custom TypeScript namespaces. */
                allowDeclarations?: boolean;
                /** Whether to allow `declare` with custom TypeScript namespaces inside definition files. */
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
                /** Whether to ignore constant loop conditions, such as `while (true)`. */
                allowConstantLoopConditions?:
                    | "never"
                    | "only-allowed-literals"
                    /**
                     * Whether to ignore constant loop conditions, such as `while (true)`.
                     * Always ignore or not ignore the loop conditions
                     */
                    | boolean
                    /** Which situations to ignore constant conditions in. */
                    | "always";
                /** Whether to not error when running with a tsconfig that has strictNullChecks turned. */
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
                /** Whether to check the asserted argument of a type predicate function for unnecessary conditions */
                checkTypePredicates?: boolean;
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
    "@typescript-eslint/no-unnecessary-type-parameters": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-argument": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-assignment": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-call": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-declaration-merging": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-enum-comparison": Linter.RuleEntry;
    "@typescript-eslint/no-unsafe-member-access": Linter.RuleEntry<
        [
            {
                /** Whether to allow `?.` optional chains on `any` values. */
                allowOptionalChaining?: boolean;
            },
        ]
    >;
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
                /** Whether to ignore arguments to the `Boolean` constructor */
                ignoreBooleanCoercion?: boolean;
                /** Whether to ignore cases that are located within a conditional test. */
                ignoreConditionalTests?: boolean;
                /** Whether to ignore any if statements that could be simplified by using the nullish coalescing operator. */
                ignoreIfStatements?: boolean;
                /** Whether to ignore any logical or expressions that are part of a mixed logical expression (with `&&`). */
                ignoreMixedLogicalExpressions?: boolean;
                /** Whether to ignore all (`true`) or some (an object with properties) primitive types. */
                ignorePrimitives?: /**
                 * Whether to ignore all (`true`) or some (an object with properties) primitive types.
                 * Which primitives types may be ignored.
                 */
                | {
                          /** Ignore bigint primitive types. */
                          bigint?: boolean;
                          /** Ignore boolean primitive types. */
                          boolean?: boolean;
                          /** Ignore number primitive types. */
                          number?: boolean;
                          /** Ignore string primitive types. */
                          string?: boolean;
                      }
                    /** Ignore all primitive types. */
                    | true;
                /** Whether to ignore any ternary expressions that could be simplified by using the nullish coalescing operator. */
                ignoreTernaryTests?: boolean;
            },
        ]
    >;
    "@typescript-eslint/prefer-optional-chain": Linter.RuleEntry<
        [
            {
                /** Allow autofixers that will change the return type of the expression. This option is considered unsafe as it may break the build. */
                allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean;
                /** Check operands that are typed as `any` when inspecting "loose boolean" operands. */
                checkAny?: boolean;
                /** Check operands that are typed as `bigint` when inspecting "loose boolean" operands. */
                checkBigInt?: boolean;
                /** Check operands that are typed as `boolean` when inspecting "loose boolean" operands. */
                checkBoolean?: boolean;
                /** Check operands that are typed as `number` when inspecting "loose boolean" operands. */
                checkNumber?: boolean;
                /** Check operands that are typed as `string` when inspecting "loose boolean" operands. */
                checkString?: boolean;
                /** Check operands that are typed as `unknown` when inspecting "loose boolean" operands. */
                checkUnknown?: boolean;
                /** Skip operands that are not typed with `null` and/or `undefined` when inspecting "loose boolean" operands. */
                requireNullish?: boolean;
            },
        ]
    >;
    "@typescript-eslint/prefer-promise-reject-errors": Linter.RuleEntry<
        [
            {
                allowEmptyReject?: boolean;
                /**
                 * Whether to always allow throwing values typed as `any`.
                 */
                allowThrowingAny?: boolean;

                /**
                 * Whether to always allow throwing values typed as `unknown`.
                 */
                allowThrowingUnknown?: boolean;
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
    "@typescript-eslint/related-getter-setter-pairs": Linter.RuleEntry;
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
                /** If 'true', allow 'default' cases on switch statements with exhaustive cases. */
                allowDefaultCaseForExhaustiveSwitch?: boolean;
                /** If 'true', the 'default' clause is used to determine whether the switch statement is exhaustive for union type */
                considerDefaultExhaustiveForUnions?: boolean;
                /** Regular expression for a comment that can indicate an intentionally omitted default case. */
                defaultCaseCommentPattern?: string;
                /** If 'true', require a 'default' clause for switches on non-union types. */
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
    "@typescript-eslint/consistent-type-exports": Linter.RuleEntry<
        [
            {
                /** Whether the rule will autofix "mixed" export cases using TS inline type specifiers. */
                fixMixedExportsWithInlineTypeSpecifier?: boolean;
            },
        ]
    >;
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
    "@typescript-eslint/no-empty-object-type": Linter.RuleEntry<
        [
            {
                /** Whether to allow empty interfaces. */
                allowInterfaces?:
                    | "never"
                    | "with-single-extends"
                    /** Whether to allow empty interfaces. */
                    | "always";
                /** Whether to allow empty object type literals. */
                allowObjectTypes?:
                    | "never"
                    /** Whether to allow empty object type literals. */
                    | "always";
                /** A stringified regular expression to allow interfaces and object type aliases with the configured name. */
                allowWithName?: string;
            },
        ]
    >;
    "@typescript-eslint/no-empty-function": Linter.RuleEntry<
        [
            {
                allow?: ReadonlyArray<
                    | "functions"
                    | "arrowFunctions"
                    | "generatorFunctions"
                    | "methods"
                    | "generatorMethods"
                    | "getters"
                    | "setters"
                    | "constructors"
                    | "asyncFunctions"
                    | "asyncMethods"
                    | "privateConstructors"
                    | "protectedConstructors"
                    | "decoratedFunctions"
                    | "overrideMethods"
                >;
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
                allowRethrowing?: boolean;
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
    "@typescript-eslint/no-unnecessary-type-conversion": Linter.RuleEntry;
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
    "@typescript-eslint/no-unused-private-class-members": Linter.RuleEntry;
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

export type PerfectionistPluginRules = Partial<{
    "sort-array-includes": Linter.RuleEntry<[]>;
}>;

export type Rules = ESLintRules & ImportPluginRules & TypescriptEslintRules;

import type { CommonOptions } from "./common/CommonOptions.ts";
import type { PartitionByComment } from "./common/PartitionByComment.ts";
import type { PartitionByNewline } from "./common/PartitionByNewLine.ts";

export interface CustomGroupDefinition {
    groupName: string;
    type?: "alphabetical" | "line-length" | "natural" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: { type: string; order?: "asc" | "desc" };
    newlinesInside?: number;
    selector?: string;
    modifiers?: Array<string>;
    elementNamePattern?:
        | string
        | Array<string>
        | Array<{ pattern: string; flags?: string }>
        | { pattern: string; flags?: string };
    elementValuePattern?:
        | string
        | Array<string>
        | Array<{ pattern: string; flags?: string }>
        | { pattern: string; flags?: string };
}

export interface CustomGroupAnyOfDefinition {
    groupName: string;
    type?: "alphabetical" | "line-length" | "natural" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: { type: string; order?: "asc" | "desc" };
    newlinesInside?: number;
    anyOf: Array<{
        selector?: string;
        modifiers?: Array<string>;
        elementNamePattern?:
            | string
            | Array<string>
            | Array<{ pattern: string; flags?: string }>
            | { pattern: string; flags?: string };
        elementValuePattern?:
            | string
            | Array<string>
            | Array<{ pattern: string; flags?: string }>
            | { pattern: string; flags?: string };
    }>;
}

export type PerfectionistSortObjects = CommonOptions &
    PartitionByComment &
    PartitionByNewline & {
        styledComponents?: boolean;
        objectDeclarations?: boolean;
        destructuredObjects?: boolean | { groups: boolean };
        useConfigurationIf?: {
            allNamesMatchPattern?:
                | string
                | Array<string>
                | Array<{ pattern: string; flags: string }>
                | { pattern: string; flags: string };
            callingFunctionNamePattern?:
                | string
                | Array<string>
                | Array<{ pattern: string; flags: string }>
                | { pattern: string; flags: string };
        };
        groups?: Array<string | Array<string>>;
        customGroups?: Array<CustomGroupAnyOfDefinition | CustomGroupDefinition>;
    };

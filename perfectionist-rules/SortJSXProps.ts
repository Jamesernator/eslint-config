import type { CommonOptions } from "./common/CommonOptions.ts";
import type { PartitionByNewline } from "./common/PartitionByNewLine.ts";

export interface CustomGroupDefinition {
    groupName: string;
    type?: "alphabetical" | "natural" | "line-length" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: { type: string; order?: "asc" | "desc"; sortBy?: "name" | "value" };
    newlinesInside?: number;
    selector?: string;
    modifiers?: string[];
    elementNamePattern?:
        | string
        | string[]
        | { pattern: string; flags?: string }
        | { pattern: string; flags?: string }[];
    elementValuePattern?:
        | string
        | string[]
        | { pattern: string; flags?: string }
        | { pattern: string; flags?: string }[];
}

export interface CustomGroupAnyOfDefinition {
    groupName: string;
    type?: "alphabetical" | "natural" | "line-length" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: { type: string; order?: "asc" | "desc"; sortBy?: "name" | "value" };
    newlinesInside?: number;
    anyOf: Array<{
        selector?: string;
        modifiers?: string[];
        elementNamePattern?:
            | string
            | string[]
            | { pattern: string; flags?: string }
            | { pattern: string; flags?: string }[];
        elementValuePattern?:
            | string
            | string[]
            | { pattern: string; flags?: string }
            | { pattern: string; flags?: string }[];
    }>;
}

export type PerfectionistSortJSXPropsOptions = CommonOptions &
    PartitionByNewline & {
        useConfigurationIf?: {
            allNamesMatchPattern?:
                | string
                | string[]
                | { pattern: string; flags: string }
                | { pattern: string; flags: string }[];
            tagMatchesPattern?:
                | string
                | string[]
                | { pattern: string; flags: string }
                | { pattern: string; flags: string }[];
        };
        groups?: (string | string[])[];
        customGroups?: Array<CustomGroupDefinition | CustomGroupAnyOfDefinition>;
    };

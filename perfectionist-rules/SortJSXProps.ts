import type { CommonOptions } from "./common/CommonOptions.ts";
import type { PartitionByNewline } from "./common/PartitionByNewLine.ts";

export interface CustomGroupDefinition {
    groupName: string;
    type?: "alphabetical" | "line-length" | "natural" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: { type: string; order?: "asc" | "desc"; sortBy?: "name" | "value" };
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
    fallbackSort?: { type: string; order?: "asc" | "desc"; sortBy?: "name" | "value" };
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

export type PerfectionistSortJSXProps = CommonOptions &
    PartitionByNewline & {
        useConfigurationIf?: {
            allNamesMatchPattern?:
                | string
                | Array<string>
                | Array<{ pattern: string; flags: string }>
                | { pattern: string; flags: string };
            tagMatchesPattern?:
                | string
                | Array<string>
                | Array<{ pattern: string; flags: string }>
                | { pattern: string; flags: string };
        };
        groups?: Array<string | Array<string>>;
        customGroups?: Array<CustomGroupAnyOfDefinition | CustomGroupDefinition>;
    };

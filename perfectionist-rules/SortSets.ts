import type { CommonOptions } from "./common/CommonOptions.ts";
import type { PartitionByComment } from "./common/PartitionByComment.ts";
import type { PartitionByNewline } from "./common/PartitionByNewLine.ts";

export interface CustomGroupDefinition {
    groupName: string;
    type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: { type: string; order?: "asc" | "desc" };
    newlinesInside?: number;
    selector?: string;
    elementNamePattern?:
        | string
        | string[]
        | { pattern: string; flags?: string }
        | { pattern: string; flags?: string }[];
}

export interface CustomGroupAnyOfDefinition {
    groupName: string;
    type?: "alphabetical" | "natural" | "line-length" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: { type: string; order?: "asc" | "desc" };
    newlinesInside?: number;
    anyOf: Array<{
        selector?: string;
        elementNamePattern?:
            | string
            | string[]
            | { pattern: string; flags?: string }
            | { pattern: string; flags?: string }[];
    }>;
}

export type PerfectionistSortSets = CommonOptions &
    PartitionByComment &
    PartitionByNewline & {
        useConfigurationIf?: {
            allNamesMatchPattern?:
                | string
                | Array<string>
                | { pattern: string; flags: string }
                | Array<{ pattern: string; flags: string }>;
        };
        groups?: Array<string | Array<string>>;
        customGroups?: Array<CustomGroupDefinition | CustomGroupAnyOfDefinition>;
    };

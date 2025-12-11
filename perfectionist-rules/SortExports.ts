import type { CommonOptions } from "./common/CommonOptions.ts";
import type { PartitionByComment } from "./common/PartitionByComment.ts";

export interface CustomGroupDefinition {
    groupName: string;
    type?: "alphabetical" | "natural" | "line-length" | "unsorted";
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

export type PerfectionistSortExportsOptions = CommonOptions &
    PartitionByComment &
    PartitionByComment & {
        groups?: Array<string | Array<string>>;
        customGroups?: Array<CustomGroupDefinition | CustomGroupAnyOfDefinition>;
    };

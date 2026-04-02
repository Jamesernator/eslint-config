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
    elementNamePattern?:
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
        elementNamePattern?:
            | string
            | Array<string>
            | Array<{ pattern: string; flags?: string }>
            | { pattern: string; flags?: string };
    }>;
}

export type PerfectionistSortNamedExports = CommonOptions &
    PartitionByComment &
    PartitionByNewline & {
        groups?: Array<string | Array<string>>;
        customGroups?: Array<CustomGroupAnyOfDefinition | CustomGroupDefinition>;
    };

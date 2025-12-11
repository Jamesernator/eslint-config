import type { CommonOptions } from "./common/CommonOptions.ts";
import type { PartitionByComment } from "./common/PartitionByComment.ts";
import type { PartitionByNewline } from "./common/PartitionByNewLine.ts";

export interface CustomGroupDefinition {
    groupName: string;
    type?: "alphabetical" | "line-length" | "natural" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: { type: string; order?: "asc" | "desc" };
    newlinesInside?: number;
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
        elementNamePattern?:
            | string
            | Array<string>
            | Array<{ pattern: string; flags?: string }>
            | { pattern: string; flags?: string };
    }>;
}

export type PerfectionistSortEnums = CommonOptions &
    PartitionByComment &
    PartitionByNewline & {
        sortByValue?: boolean;
        forceNumericSort?: boolean;
        groups?: Array<string | Array<string>>;
        customGroups?: Array<CustomGroupAnyOfDefinition | CustomGroupDefinition>;
    };

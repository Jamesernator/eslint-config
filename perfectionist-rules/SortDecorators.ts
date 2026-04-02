import type { CommonOptions } from "./common/CommonOptions.ts";
import type { PartitionByComment } from "./common/PartitionByComment.ts";

export type PerfectionistSortDecorators = CommonOptions &
    PartitionByComment & {
        sortOnClasses?: boolean;
        sortOnMethods?: boolean;
        sortOnProperties?: boolean;
        sortOnAccessors?: boolean;
        sortOnParameters?: boolean;
        groups?: Array<string | Array<string>>;
        customGroups?: Record<string, string | Array<string>>;
    };

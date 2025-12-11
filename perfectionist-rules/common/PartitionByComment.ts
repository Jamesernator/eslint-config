import type { RegExpPattern } from "./RegexpPattern.ts";

export type PartitionByComment = {
    partitionByComment?:
        | boolean
        | Array<RegExpPattern>
        | RegExpPattern
        | {
              block: boolean | Array<RegExpPattern> | RegExpPattern;
              line: boolean | Array<RegExpPattern> | RegExpPattern;
          };
};

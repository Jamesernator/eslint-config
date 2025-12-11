import type { RegExpPattern } from "./RegexpPattern.ts";

export type PartitionByComment = {
    partitionByComment?:
        | boolean
        | RegExpPattern
        | RegExpPattern[]
        | {
              block: boolean | RegExpPattern | RegExpPattern[];
              line: boolean | RegExpPattern | RegExpPattern[];
          };
};

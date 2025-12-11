export type CommonOptions = {
    type?: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: {
        type: "alphabetical" | "natural" | "line-length" | "custom" | "unsorted";
        order?: "asc" | "desc";
    };
    alphabet?: string;
    ignoreCase?: boolean;
    specialCharacters?: "keep" | "trim" | "remove";
    locales?: string | Array<string>;
};

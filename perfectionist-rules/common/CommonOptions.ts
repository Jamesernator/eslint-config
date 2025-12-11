export type CommonOptions = {
    type?: "alphabetical" | "custom" | "line-length" | "natural" | "unsorted";
    order?: "asc" | "desc";
    fallbackSort?: {
        type: "alphabetical" | "custom" | "line-length" | "natural" | "unsorted";
        order?: "asc" | "desc";
    };
    alphabet?: string;
    ignoreCase?: boolean;
    specialCharacters?: "keep" | "remove" | "trim";
    locales?: string | Array<string>;
};

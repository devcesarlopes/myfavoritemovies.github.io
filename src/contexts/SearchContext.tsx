import { createContext } from "react";
import { OmdbApiSearchResult } from "../types/OmdbApiTypes";

export type SearchContextType = {
    searchMap: Map<string, OmdbApiSearchResult>;
    search: (key: string, page: number) => Promise<OmdbApiSearchResult>;
};

export const SearchContext = createContext<SearchContextType>(null!);

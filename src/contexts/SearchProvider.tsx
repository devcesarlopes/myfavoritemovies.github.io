import { useState } from "react";
import { omdbapi } from "../api/OmdbApi";
import { OmdbApiSearchResult } from "../types/OmdbApiTypes";
import { SearchContext } from "./SearchContext";

export const SearchProvider = ({ children }: { children: JSX.Element }) => {
    const [searchMap] = useState<Map<string, OmdbApiSearchResult>>(new Map());
    const api = omdbapi();

    const search = async (key: string, page: number) => {
        if (searchMap.get(key.toLowerCase() + page) !== undefined) {
            return new Promise<OmdbApiSearchResult>((resolve, reject) => {
                resolve(searchMap.get(key.toLowerCase() + page)!);
            });
        } else {
            const response: OmdbApiSearchResult = await api.search(key, page);
            searchMap.set(key.toLowerCase() + page, response);
            return response;
        }
    };
    return (
        <SearchContext.Provider value={{ searchMap, search }}>
            {children}
        </SearchContext.Provider>
    );
};

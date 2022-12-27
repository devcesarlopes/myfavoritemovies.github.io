import axios from "axios";
import { OmdbApiSearchResult } from "../types/OmdbApiTypes";

const api = axios.create({
    baseURL: "https://www.omdbapi.com",
});

type TypeOmdbapi = () => {
    search: (key: string, page: number) => Promise<OmdbApiSearchResult>;
};

export const omdbapi: TypeOmdbapi = () => ({
    search: async (key: string, page: number) => {
        const apiKey = process.env.REACT_APP_OMDB_API_KEY;
        const response = await api.get("/", {
            params: {
                apikey: apiKey,
                s: key,
                page: page.toString(),
            },
        });
        return response.data;
    },
});

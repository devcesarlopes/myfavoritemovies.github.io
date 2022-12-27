export type OmdbMovie = {
    Title: string;
    Year: number;
    imdbID: string;
    Type: "movie" | "series" | "episode";
    Poster: string;
};

export type OmdbApiSearchResult = {
    Search?: OmdbMovie[];
    totalResults?: string;
    Response: "True" | "False";
    Error?: string;
};

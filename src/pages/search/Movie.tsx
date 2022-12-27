import { OmdbMovie } from "../../types/OmdbApiTypes";
import styled from "styled-components";

interface params {
    movie: OmdbMovie;
}

export const Movie = ({ movie }: params) => {
    return (
        <DivMovie>
            <DivOverlay>
                <MovieInfo>{movie.Title}</MovieInfo>
                <MovieInfo>{movie.Type}</MovieInfo>
                <MovieInfo>{movie.Year}</MovieInfo>
            </DivOverlay>
            {movie.Poster === "N/A" ? (
                <ImgMovieNotFound>no_photography</ImgMovieNotFound>
            ) : (
                <ImgMovie src={movie.Poster} />
            )}

            {movie.Poster === "N/A" ? (
                <ImgMovieNotFoundTitle>{movie.Title}</ImgMovieNotFoundTitle>
            ) : (
                <></>
            )}
        </DivMovie>
    );
};

/* background: ${(props) => props.background}; */

const DivMovie = styled.div`
    margin-top: 20px;
    position: relative;
    width: 90%;
    height: auto;

    &:hover {
        .overlay {
            height: 100%;
        }

        .overlay-title {
            display: none;
        }

        .movie-info {
            display: block;
        }
    }
`;

const ImgMovie = styled.img`
    width: 100%;
    height: auto;
`;

const ImgMovieNotFound = styled.span.attrs({
    className: "material-symbols-outlined",
})`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    line-height: 5;
    text-align: center;
    font-size: 500%;
    cursor: default;
`;

const ImgMovieNotFoundTitle = styled.div.attrs({
    className: "overlay-title",
})`
    font-family: "MuseoModerno", "sans-serif";
    bottom: 5%;
    left: 10%;
    position: absolute;
    text-align: center;
    width: 80%;
    font-size: 1.2rem !important;
    height: fit-content;
    color: white;
    z-index: 1;
`;

const DivOverlay = styled.span.attrs({
    className: "overlay",
})`
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 2;
`;

const MovieInfo = styled.span.attrs({
    className: "movie-info",
})`
    font-family: "MuseoModerno", "sans-serif";

    display: none;
    color: white;
    width: 80%;
    padding-left: 10%;
    margin: 3% 0;
    text-align: center;
`;

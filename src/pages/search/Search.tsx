import {
    Container,
    ArrowLeft,
    Title,
    PaginationStyled,
    PaginationStyledBottom,
    MovieContainer,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate, useParams } from "react-router-dom";
import { OmdbMovie } from "../../types/OmdbApiTypes";
import { Movie } from "./Movie";

export const Search = () => {
    const { t } = useTranslation("common");
    const apiContext = useContext(SearchContext);
    const navigate = useNavigate();
    const [totalResults, setTotalResults] = useState(1);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState<OmdbMovie[]>([]);

    const searchParams = useParams().key;
    const searchInput: string = searchParams === undefined ? "" : searchParams;

    const goToHome = () => {
        navigate("/");
    };

    useEffect(() => {
        apiContext.search(searchInput, 1).then((response) => {
            console.log(response);
            const resultTotalResults = parseInt(response.totalResults!);
            setTotalResults(
                Math.max(
                    1,
                    Math.round(resultTotalResults / 10) +
                        (resultTotalResults % 10 > 0 ? 1 : 0)
                )
            );
            setContent(response.Search!);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log(changePage);

    const changePage = (_event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
        apiContext.search(searchInput, page).then((response) => {
            setContent(response.Search!);
        });
    };

    return (
        <Container>
            <ArrowLeft title="Voltar" onClick={goToHome}>
                arrow_circle_left
            </ArrowLeft>
            <Title>{t("result.title")}</Title>
            <PaginationStyled
                count={totalResults}
                page={page}
                onChange={changePage}
            />
            <MovieContainer>
                {content.map((movie: OmdbMovie, i: number) => {
                    return <Movie key={i} movie={movie} />;
                })}
            </MovieContainer>
            <PaginationStyledBottom
                count={totalResults}
                page={page}
                onChange={changePage}
            />
        </Container>
    );
};

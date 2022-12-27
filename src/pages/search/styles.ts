import styled from "styled-components";
import { Pagination } from "@mui/material";

export const Container = styled.div`
    align-items: center;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
`;

export const Title = styled.p`
    @media screen and (max-width: 500px) {
        font-size: 1.8rem;
    }

    @media screen and (min-width: 501px) and (max-width: 701px) {
        font-size: 2.2rem;
    }

    width: 100%;
    text-align: center;
    color: white;
    margin-bottom: 20px;
    text-shadow: 2px 2px 2px black;
    margin: 0 !important;
    font-size: 2.4rem;
    font-weight: 300;
    font-family: "MuseoModerno", "sans-serif";
`;

export const ArrowLeft = styled.span.attrs({
    className: "material-symbols-outlined",
})`
    font-size: 3em;
    width: 90%;
    padding: 5vh 0 0 0;
    color: white;
    text-align: start;
    cursor: pointer;
`;

export const PaginationStyled = styled(Pagination)`
    ul li button {
        color: white;

        &:hover {
            color: black;
            background: white;
        }
    }
    ul li svg {
        color: white;

        &:hover {
            color: black;
        }
    }

    .Mui-selected {
        background: #10557c !important;

        &:hover {
            color: white !important;
        }
    }
`;

export const PaginationStyledBottom = styled(PaginationStyled)`
    margin-bottom: 20px;
`;

export const MovieContainer = styled.div`
    margin: 20px 0;
    width: 80%;
    display: grid;
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
`;

import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
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

export const Form = styled.form`
    @media screen and (max-width: 600px) {
        width: 100%;
    }

    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding: 20px 0;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
`;

export const SearchBarContainer = styled.div`
    margin-top: 20px;
    background: #10557c;
    width: 80%;
    height: 50px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const SearchBarIcon = styled.span.attrs({
    className: "material-symbols-outlined",
})`
    padding-left: 5px;
    width: 50px;
    font-size: 1.6em;
    text-align: center;
    color: white;
    cursor: default;
`;

export const Input = styled.input`
    width: calc(100% - 100px);
    font-size: 20px;
    height: 100%;
    outline: none;
    border-width: 0px;
    border: none;
    padding: 0;
    padding-left: 10px;

    &:focus {
        outline: none;
        border-width: 0px;
        border: none;
    }

    &::placeholder {
        text-align: center;
        font-size: 16px;
    }
`;

export const SearchBarEraseIcon = styled.div`
    height: 100%;
    width: 50px;
    font-size: 1.6em;
    text-align: center;
    color: #10557c;
    background: white;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    @media screen and (max-width: 500px) {
        font-size: 1.3em;
    }

    @media screen and (min-width: 501px) and (max-width: 701px) {
        font-size: 1.45rem;
    }

    font-family: "MuseoModerno", "sans-serif";
    margin-top: 20px;
    height: 100%;
    width: 200px;
    font-size: 1.6em;
    text-align: center;
    border: 0;
    background: #10557c;
    color: white;
    border-radius: 30px;
`;

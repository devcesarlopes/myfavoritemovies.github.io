import styled from "styled-components";
import { Logo } from "../../assets/imgs";

export const Container = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    position: fixed;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.6);
`;

export const Img = styled.img.attrs({
    src: Logo,
})`
    @media screen and (max-width: 400px) {
        height: 30px;
        width: auto;
    }

    @media screen and (min-width: 401px) {
        height: 40px;
        width: auto;
    }

    margin-left: 10px;
    padding: 10px 0;
`;

export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin-right: 10px;
`;

export const SwitchLang = styled.div`
    color: white;
    font-weight: bold;
    margin-right: 10px;
`;

export const Button = styled.button`
    background: #1a89c9;
    color: black;
    margin-right: 5px;
    margin-left: 20px;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #10557c;
        color: white;
    }
`;

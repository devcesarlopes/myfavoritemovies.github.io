import styled from "styled-components";
import { ImageBackground } from "../../assets/imgs";

export const Background = styled.div`
    @media screen and (min-width: 1081px) {
        background-size: 100% 100%;
    }

    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -1;
    background: url(${ImageBackground});
    background-size: auto 100%;
`;

export const Container = styled.div`
    margin-top: 10vh;
`;

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

export const DivMarginTop = styled.div`
    margin-top: 10vh;
`;

export const ContentContainer = styled.div`
    @media screen and (max-width: 980px) {
        min-height: 70vh;
    }

    position: relative;
    min-height: calc(85vh - 120px);
`;

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
    padding-top: 10vh;
    flex: 1 1 auto;
    position: relative;
`;

export const ContentContainer = styled.div`
    @media screen and (max-width: 980px) {
        /* min-height: 80vh; */
    }

    position: relative;
    /* min-height: calc(85vh - 120px); */
    /* min-height: -webkit-fill-available; */
`;

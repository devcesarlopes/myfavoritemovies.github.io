import styled from "styled-components";

export const Container = styled.div<{ theme: string }>`
    @media screen and (max-width: 980px) {
        height: 15vh;
    }
    width: 100%;
    height: 20vh;
    padding: 2.5vh 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    justify-content: space-evenly;
    box-shadow: 0px 0 5px 2px #888;
    color: white;
    z-index: 3;
`;

export const Text = styled.div<{ theme: string }>`
    @media screen and (max-width: 680px) {
        h3 {
            font-size: 2.5vw !important;
        }
    }

    @media screen and (min-width: 681px) and (max-width: 980px) {
        h3 {
            font-size: 2vw !important;
        }
    }

    text-align: center;
    color: white;

    h3 {
        margin-top: 0 !important;
        font-size: 18px;
    }

    h3:last-child {
        margin-top: 5px !important;
        margin-bottom: 0 !important;
    }
`;

export const DivFlexRow = styled.div`
    margin-top: 20px;
    height: 6vh;
    display: flex;
    justify-content: center;
`;

export const IconImageMargin = styled.img`
    @media screen and (max-width: 980px) {
        width: 4vh;
        height: 4vh;

        &:hover {
            width: 4.5vh !important;
            height: 4.5vh !important;
        }
    }

    width: 5vh;
    height: 5vh;
    margin: 0 10px;
    cursor: pointer;
    filter: invert(46%) sepia(63%) saturate(851%) hue-rotate(163deg)
        brightness(86%) contrast(91%);

    &:hover {
        width: 6vh;
        height: 6vh;
    }
`;

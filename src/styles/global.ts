import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        transition: all 0.4s ease-in-out;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
    }

`;

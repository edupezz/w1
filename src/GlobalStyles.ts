import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        font-size: 62.5%;
    }

    html, body {
        width: 100%;
        height: 100%;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: "Public Sans", sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }
`
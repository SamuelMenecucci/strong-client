import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        @media (max-width: 1080px){
            font-size:93.75% ;
        }

        @media (max-width: 720px){
            font-size:87.5% ;
        }

        * {
            margin:0;
            padding:0;
            box-sizing:border-box;
        }

        body {
        -webkit-font-smoothing: antialiased;
        }
        
        body, input, textarea, button {
            font-weight:400 ;
        }

    }
    `;

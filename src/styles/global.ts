import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #1b1c37;
    }



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
            font-weight:400;
            font-family: 'Poppins', sans-serif ;
            font-weight: 400 ;
        }

        h1, h2, h3, h4, h5, h6, strong {
            font-family: 'Poppins', sans-serif ;
            font-weight:600;
        
        }

        button {
            cursor: pointer;
        }

    }
    `;

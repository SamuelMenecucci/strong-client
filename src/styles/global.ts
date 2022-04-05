import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #1b1c37;
        --purple-color: #b224b2;
        --blue-color: #7579FF;
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

    .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width:  900px;
    background-color: #fff;

    padding:  30px 77px ;

    border-radius:16px ;
    border: 2px solid var(--blue-color);

    position: relative ;
  }
   
    `;

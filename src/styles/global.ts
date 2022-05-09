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

        input {
            border: 2px solid var(--purple-color);
            border-radius: 16px;

            padding: 10px 10px;

            width: 100%;

            margin-bottom: 33px;

            font-size: 22px;


        ::placeholder {
        color: rgba(0, 0, 0, 0.3);
        font-size: 18px;
    }
        }

        h1, h2, h3, h4, h5, h6, strong {
            font-family: 'Poppins', sans-serif ;
            font-weight:600;
        
        }

        h1 {
            font-size: 24px;
            font-weight: 600;
            background: -webkit-linear-gradient(var(--purple-color), var(--blue-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 17px;
        }

        button {
            cursor: pointer;
            background:transparent ;
            border: none ;
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

  .react-registerModal-content {
    width: 100%;
    max-width:  900px;
    background-color: #fff;

    padding:  30px 77px ;

    border-radius:16px ;
    border: 2px solid var(--blue-color);

    position: relative ;
  }

  .react-profileModal-content {
    width: 100%;
    max-width:  950px;
    background-color: #fff;

    padding:  30px 77px ;

    border-radius:16px ;
    border: 2px solid var(--purple-color);

    position: relative ;

  }

  .react-VacancyDetailsModal{
    width: 100%;
    max-width:  950px;
    background-color: #fff;

    padding:  30px 77px ;

    border-radius:16px ;
    border: 2px solid var(--purple-color);

    position: relative ;
  }

  .react-NewVacancyModal{
    width: 100%;
    max-width:  950px;
    background-color: #fff;

    padding:  30px 77px ;

    border-radius:16px ;
    border: 2px solid var(--purple-color);

    position: relative ;
  }

  .react-newFeedbackModal{
    width: 100%;
    max-width:  950px;
    background-color: #fff;

    padding:  30px 77px ;

    border-radius:16px ;
    border: 2px solid var(--purple-color);

    position: relative ;
  }

  .react-login-modal {
    width: 700px;
    max-width: 100%;
    max-width:  950px;
    background: linear-gradient(to right, #b224ef, #7579ff, #7579ff);

    padding:  30px 77px ;

    border-radius:16px ;
    position: relative ;
  }
`;

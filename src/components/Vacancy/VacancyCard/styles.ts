import styled from "styled-components";

export const Content = styled.div`
  width: 375px;
  height: 190px;
  background-color: rgba(117, 121, 255, 0.2);
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 20px;

  cursor: pointer;

  span {
    width: 109px;
    height: 109px;
    margin-right: 14px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .info {
    h1 {
      font-size: 24px;
      background: -webkit-linear-gradient(
        var(--purple-color),
        var(--blue-color)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      border-width: 0 0 1px 0;
      border-style: solid;
      border-image: linear-gradient(to right, #b224ef, #7579ff) 1;

      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }
`;

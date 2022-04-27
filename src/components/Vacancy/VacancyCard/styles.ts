import styled from "styled-components";

interface ContentProps {
  sizeType: string;
}

export const Content = styled.div<ContentProps>`
  width: ${({ sizeType }) => (sizeType === "profileModal" ? "246px" : "375px")};
  height: ${({ sizeType }) =>
    sizeType === "profileModal" ? "125px" : "190px"};
  background: linear-gradient(
    to right,
    rgba(178, 36, 239, 0.1),
    rgba(117, 121, 255, 0.1),
    rgba(117, 121, 255, 0.1)
  );
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: left;

  padding: 20px 20px;

  cursor: pointer;

  span {
    width: ${(props) => (props.sizeType === "profileModal" ? "70px" : "109px")};
    height: ${(props) =>
      props.sizeType === "profileModal" ? "80px" : "109px"};
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
      font-size: ${({ sizeType }) =>
        sizeType === "profileModal" ? "16px" : "24px"};
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
      font-size: ${({ sizeType }) =>
        sizeType === "profileModal" ? "9px" : "14px"};
    }
  }
`;

export const Cards = styled.div<ContentProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ sizeType }) =>
    sizeType === "profileModal" ? "20px 10px" : "50px 50px"};
`;

import styled from "styled-components";
import searchImg from "../../assets/search.svg";

export const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 90px;

  align-items: center;
`;

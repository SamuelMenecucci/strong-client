import styled from "styled-components";

export const VacancyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;

  @media (max-width: 780px) {
    display: initial;
  }

  input {
    margin-bottom: initial;
    border-radius: 40px;
  }
`;

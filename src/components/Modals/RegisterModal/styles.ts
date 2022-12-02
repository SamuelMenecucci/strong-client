import styled from "styled-components";

export const RegisterForm = styled.form`
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 33px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;

  .modalButtons {
    width: 260px;
    padding: 6px 10px;

    @media (max-width: 780px) {
      padding: 3px 5px;
    }
  }
`;

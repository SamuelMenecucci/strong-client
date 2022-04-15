import styled from "styled-components";

export const ProfileForm = styled.form`
  .name-picture {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    span {
      display: flex;
      align-items: center;
    }

    #profileTag {
      margin-right: 15px;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--purple-color);
    }
  }

  input[type="file"] {
    display: none;
  }

  input[name="nomeOng"] {
    width: 350px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 33px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;

  .modalButtons {
    width: 260px;
    padding: 6px 10px;
  }
`;

export const MyVacancies = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin-bottom: initial;
    }
  }
`;

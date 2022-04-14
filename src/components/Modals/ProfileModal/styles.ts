import styled from "styled-components";

export const ProfileForm = styled.form`
  button.closeButton {
    background: transparent;
    border: none;
    position: absolute;
    right: 15px;
    top: 15px;
  }

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

  input {
    /* border-radius: 16px;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to right, #b224ef, #7579ff) 1;
    padding: 10px 10px; */

    border: 2px solid var(--purple-color);
    border-radius: 16px;

    padding: 10px 10px;

    width: 100%;

    margin-bottom: 20px;
    font-size: 22px;

    ::placeholder {
      color: rgba(0, 0, 0, 0.3);
      font-size: 18px;
    }
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
  h1 {
    font-size: 24px;
    font-weight: 600;
    background: -webkit-linear-gradient(var(--purple-color), var(--blue-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 17px;
  }
`;

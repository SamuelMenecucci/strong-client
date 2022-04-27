import styled from "styled-components";

export const VacancyForm = styled.form`
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  select {
    border: 2px solid var(--purple-color);
    padding: 2px;
    border-radius: 6px;
    color: var(--purple-color);
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;

    option {
      color: #000000;
      font-size: 14px;
      font-weight: bold;
      line-height: 24px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OngInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 15px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--purple-color);
  }

  h1 {
    margin-left: 17px;
    word-break: break-all;
  }
`;

export const OngContacts = styled.div`
  width: 340px;

  span {
    justify-content: left;
    word-break: break-all;
    img {
      width: 45px;
      height: 45px;
      margin-right: 20px;
    }
  }

  h1 {
  }
`;

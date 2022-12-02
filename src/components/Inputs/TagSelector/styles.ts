import styled from "styled-components";

export const TagSelectorStyle = styled.div`
  details {
    width: 231px;

    @media (max-width: 780px) {
      width: 100%;

      margin: 12px auto;
    }

    summary {
      background: linear-gradient(to right, #b224ef, #7579ff, #7579ff);
      border-radius: 16px;
      list-style: none;
      color: #fff;
      font-size: 22px;
      text-align: center;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        margin-left: 5px;
      }
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    padding: 9px 13px;

    border: 1px solid red;
    background-color: #fff;
    width: auto;
    position: fixed;
    border: 1px solid var(--purple-color);
    border-radius: 5px 5px 16px 16px;
    width: 231px;

    label {
      padding: 1px 0;
      input[type="checkbox"] {
        width: auto;
        margin-right: 8px;
      }
    }
  }
`;

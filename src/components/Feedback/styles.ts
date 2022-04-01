import styled from "styled-components";

export const Container = styled.div`
  width: 292.19px;
  height: 555.4px;
  padding: 34px 32px;
  background: rgba(117, 121, 255, 0.2);
  border-radius: 40px;
  position: relative;
  margin-top: 87px;
  box-shadow: 0 4px 24px 0 #434343;
`;

export const Text = styled.div``;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 43px;
  /* background: red; */
  word-break: break-all;

  img {
    width: 42.94px;
    height: 42.94px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12.19px;
  }

  span {
    color: #b224ef;
    font-size: 22px;
    font-weight: 600;
  }
`;

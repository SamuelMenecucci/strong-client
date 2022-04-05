import styled from "styled-components";

export const Feedbacks = styled.div`
  display: flex;
  min-width: 900px;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Container = styled.div`
  width: 300px;
  height: 550px;
  margin: auto;
  /* height: 500px; */
  padding: 27px 21px;
  background: rgba(117, 121, 255, 0.2);
  border-radius: 40px;
  margin-top: 87px;
  box-shadow: 0 4px 24px 0 #434343;
  position: relative;
  margin-bottom: 40px;
`;

export const Text = styled.div`
  font-size: 20px;
  word-break: normal;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  /* position: fixed; */
  position: absolute;
  bottom: 20px;
  left: 13px;
  width: 90%;
  border-width: 4px 0 0 0;
  border-style: solid;
  border-image: linear-gradient(to right, #b224ef, #7579ff) 1;
  padding-top: 17px;

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 18px;
  }

  span {
    color: #b224ef;
    font-size: 22px;
    font-weight: 600;
  }
`;

import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 1500px;
  margin: auto;

  @media (max-width: 780px) {
    width: 100vw;
  }
`;

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 550px;
  padding: 27px 21px;
  background: rgba(117, 121, 255, 0.2);
  border-radius: 40px;
  margin-top: 87px;
  position: relative;
  margin-bottom: 40px;

  @media (max-width: 780px) {
    margin-bottom: 0;
    margin-top: 30px;
  }
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

import { Container, Info, Text } from "./styles";
import userImg from "../../assets/user.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

export function Feedback({ feedback }: any) {
  console.log(feedback);
  return (
    // <Feedbacks>
    <Container>
      <Text>{feedback.feedback}</Text>
      <Info>
        <img src={userImg} alt="" />
        <span>{feedback.name}</span>
      </Info>
    </Container>
    // </Feedbacks>
  );
}

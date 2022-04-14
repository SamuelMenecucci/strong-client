import { Container, Info, Text } from "./styles";
import userImg from "../../assets/user.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Feedback({ feedback }: any) {
  return (
    <Container>
      <Text>{feedback.feedback}</Text>
      <Info>
        <img src={userImg} alt="" />
        <span>{feedback.name}</span>
      </Info>
    </Container>
  );
}

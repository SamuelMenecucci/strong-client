import { Container, Info, Text } from "./styles";
import userImg from "../../assets/user.jpg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Feedback() {
  const [feedbacks, setFeedbacks] = useState<any>([]);

  useEffect(() => {
    api.get("/feedbacks").then((res) => {
      setFeedbacks(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      {feedbacks.map((element: any) => {
        return (
          <Container>
            <Text>{element.feedback}</Text>
            <Info>
              <img src={userImg} alt="" />
              <span>Mundo Gentileza</span>
            </Info>
          </Container>
        );
      })}
    </>
  );
}

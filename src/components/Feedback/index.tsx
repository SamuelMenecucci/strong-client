import { Container, Feedbacks, Info, Text } from "./styles";
import userImg from "../../assets/user.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function Feedback() {
  const [feedbacks, setFeedbacks] = useState<any>([]);

  useEffect(() => {
    api.get("/feedbacks").then((res) => {
      setFeedbacks(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    // <Carousel>
    <Feedbacks>
      {feedbacks.map((element: any) => {
        return (
          <Container>
            <Text>{element.feedback}</Text>
            <Info>
              <img src={userImg} alt="" />
              <span>Social Mídia</span>
            </Info>
          </Container>
        );
      })}
    </Feedbacks>
    // {/* </Carousel> */}
  );
}

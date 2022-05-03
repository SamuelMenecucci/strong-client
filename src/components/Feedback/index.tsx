import { Container, Info, Text } from "./styles";
import { jsonServer } from "../../services/api";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import setaDireitaImg from "../../assets/setaDireita.svg";
import setaEsquerdaImg from "../../assets/setaEsquerda.svg";

export function Feedback({ feedback }: any) {
  const [feedbacks, setFeedbacks] = useState<any>([]);

  useEffect(() => {
    jsonServer.get("/feedbacks").then((res) => setFeedbacks(res.data));
  }, []);

  let settings = {
    infinite: true,
    slidesToScroll: 4,
    slidesToShow: 4,
    // accessibility: true,
    dots: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div style={{ width: "1500px", margin: "auto" }}>
      <Slider {...settings}>
        {feedbacks.map((element: any) => {
          return (
            <div style={{ margin: "0 20px " }}>
              <Container>
                <Text>{element.feedback}</Text>
                <Info>
                  <img src={element.imagem} alt="" />
                  <span>{element.name}</span>
                </Info>
              </Container>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

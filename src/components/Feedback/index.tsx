import { Container, Info, Text } from "./styles";
import { api } from "../../services/api";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import setaDireitaImg from "../../assets/setaDireita.svg";
import setaEsquerdaImg from "../../assets/setaEsquerda.svg";

export function Feedback() {
  const [feedbacks, setFeedbacks] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get("/getFeedbacks").then((res) => {
      setFeedbacks(res.data);
      setIsLoading(false);
    });
  }, []);

  let settings = {
    infinite: true,
    slidesToScroll: 4,
    slidesToShow: feedbacks.length < 4 ? feedbacks.length : 4,
    // accessibility: true,
    dots: true,
    autoplay: true,
    speed: 500,
  };

  if (isLoading)
    return (
      <h1 style={{ textAlign: "center", fontSize: "32px", padding: "50px" }}>
        Carregando...
      </h1>
    );

  if (!feedbacks.length)
    return (
      <h1 style={{ textAlign: "center", fontSize: "32px", padding: "50px" }}>
        Não possuímos nenhum feedback
      </h1>
    );

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
                  <span>{element.nome}</span>
                </Info>
              </Container>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

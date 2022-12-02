import { Container, Info, SliderContainer, Text } from "./styles";
import { api } from "../../services/api";

import { useEffect, useState } from "react";
import Slider from "react-slick";

export function Feedback() {
  const [feedbacks, setFeedbacks] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get("/getFeedbacks")
      .then((res) => {
        setFeedbacks(res.data);
        setIsLoading(false);
      })
      .catch((err) => alert(err.message));
  }, []);

  const screenWidth = window.screen.width;
  let settings = {
    infinite: true,
    slidesToScroll: screenWidth > 780 ? 4 : 1,
    slidesToShow:
      screenWidth > 780 ? (feedbacks.length < 4 ? feedbacks.length : 4) : 1,
    // accessibility: true,
    dots: screenWidth > 780 ? true : false,
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
    <SliderContainer>
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
    </SliderContainer>
  );
}

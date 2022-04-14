import { Feedback } from "../../components/Feedback";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useRequests } from "../../contexts/useRequests";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-width: 900px;
  margin: 0 auto;
  max-width: 1200px;
`;

export function Feedbacks() {
  const { feedbacks } = useRequests();

  return (
    <>
      <Header />
      <Container>
        {/* <Carousel> */}
        {feedbacks.map((element: any) => (
          <Feedback feedback={element} />
        ))}
      </Container>
      {/* </Carousel> */}
      <Footer />
    </>
  );
}

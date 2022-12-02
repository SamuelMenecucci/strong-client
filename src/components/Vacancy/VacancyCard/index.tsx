import { useState } from "react";
import { VacancyModal } from "../../Modals/VacancyModal";
import { Container, Content } from "./styles";
import Slider from "react-slick";

type VacancyCardProps = {
  vagas: any;
  sizeType?: string;
};

export function VacancyCard({ vagas, sizeType }: VacancyCardProps) {
  const [isVacancyDetailsModalOpen, setIsVacancyDetailsModalOpen] =
    useState(false);

  const [vacancyDetails, setVacancyDetails] = useState([]);

  function handleOpenVacancyDetailsModal(element: any) {
    setVacancyDetails(element);
    setIsVacancyDetailsModalOpen(true);
  }

  function handleCloseVacancyDetailsModal() {
    setIsVacancyDetailsModalOpen(false);
  }

  const screenWidth = window.screen.width;

  let settings = {
    infinite: true,
    slidesToScroll: screenWidth > 780 ? 3 : 1,
    slidesToShow: screenWidth > 780 ? (vagas.length < 3 ? 1 : 3) : 1,
    // accessibility: true,
    dots: screenWidth > 780 ? true : false,
    autoplay: true,
    speed: 500,
  };

  return (
    <Container>
      <Slider {...settings}>
        {vagas.map((element: any) => {
          return (
            <>
              <Content
                sizeType={sizeType || ""}
                onClick={() => handleOpenVacancyDetailsModal(element)}
              >
                <div className="info">
                  <h1>{element.titulo}</h1>
                  <p>{element.tag}</p>
                </div>
              </Content>
            </>
          );
        })}
      </Slider>

      <VacancyModal
        isOpen={isVacancyDetailsModalOpen}
        onRequestClose={handleCloseVacancyDetailsModal}
        vaga={vacancyDetails}
      />
    </Container>
  );
}

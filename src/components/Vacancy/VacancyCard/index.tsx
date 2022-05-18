import { useState } from "react";
import { VacancyModal } from "../../Modals/VacancyModal";
import { Cards, Content } from "./styles";

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

  return (
    <Cards sizeType={sizeType || ""}>
      {vagas.map((element: any) => {
        return (
          <Content
            sizeType={sizeType || ""}
            onClick={() => handleOpenVacancyDetailsModal(element)}
          >
            <div className="info">
              <h1>{element.titulo}</h1>
              <p>{element.tag}</p>
            </div>
          </Content>
        );
      })}

      <VacancyModal
        isOpen={isVacancyDetailsModalOpen}
        onRequestClose={handleCloseVacancyDetailsModal}
        vaga={vacancyDetails}
      />
    </Cards>
  );
}

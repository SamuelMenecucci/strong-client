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

  function handleOpenVacancyDetailsModal() {
    setIsVacancyDetailsModalOpen(true);
  }

  function handleCloseVacancyDetailsModal() {
    setIsVacancyDetailsModalOpen(false);
  }

  console.log(vagas);

  return (
    <Cards sizeType={sizeType || ""}>
      {vagas.map((element: any) => {
        return (
          <>
            <Content
              sizeType={sizeType || ""}
              onClick={handleOpenVacancyDetailsModal}
            >
              <span>
                <img src={require("../../../assets/user.png")} alt="" />
              </span>

              <div className="info">
                <h1>{element.titulo}</h1>
                <p>{element.tag}</p>
              </div>
            </Content>

            <VacancyModal
              isOpen={isVacancyDetailsModalOpen}
              onRequestClose={handleCloseVacancyDetailsModal}
              vaga={element}
            />
          </>
        );
      })}
    </Cards>
  );
}

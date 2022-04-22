import { useState } from "react";
import { VacancyModal } from "../../Modals/VacancyModal";
import { Cards, Content } from "./styles";

export function VacancyCard({ vagas }: any) {
  const [isVacancyDetailsModalOpen, setIsVacancyDetailsModalOpen] =
    useState(false);

  function handleOpenVacancyDetailsModal() {
    setIsVacancyDetailsModalOpen(true);
  }

  function handleCloseVacancyDetailsModal() {
    setIsVacancyDetailsModalOpen(false);
  }

  return (
    <Cards>
      {vagas.map((element: any) => {
        return (
          <>
            <Content onClick={handleOpenVacancyDetailsModal}>
              <span>
                <img src={require("../../../assets/user.png")} alt="" />
              </span>

              <div className="info">
                <h1>{element.nomeOng}</h1>
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

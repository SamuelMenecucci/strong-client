import { useState } from "react";
import { VacancyModal } from "../../Modals/VacancyModal";
import { Content } from "./styles";

export function VacancyCard({ vaga }: any) {
  const [isVacancyDetailsModalOpen, setIsVacancyDetailsModalOpen] =
    useState(false);

  function handleOpenVacancyDetailsModal() {
    setIsVacancyDetailsModalOpen(true);
  }

  function handleCloseVacancyDetailsModal() {
    setIsVacancyDetailsModalOpen(false);
  }

  return (
    <>
      <Content onClick={handleOpenVacancyDetailsModal}>
        <span>
          <img src={require("../../../assets/user.png")} alt="" />
        </span>

        <div className="info">
          <h1>{vaga.nomeOng}</h1>
          <p>{vaga.tag}</p>
        </div>
      </Content>

      <VacancyModal
        isOpen={isVacancyDetailsModalOpen}
        onRequestClose={handleCloseVacancyDetailsModal}
        vaga={vaga}
      />
    </>
  );
}

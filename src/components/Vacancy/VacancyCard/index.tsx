import { useState } from "react";
import { VacancyDetailsModal } from "../../Modals/VacancyDetailsModal";
import { Content } from "./styles";

export function VacancyCard() {
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
          <h1>Social Mídia</h1>
          <p>Nível Fácil - Social - Designe</p>
        </div>
      </Content>

      <VacancyDetailsModal
        isOpen={isVacancyDetailsModalOpen}
        onRequestClose={handleCloseVacancyDetailsModal}
      />
    </>
  );
}

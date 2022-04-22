import ReactModal from "react-modal";
import { Button } from "../../Buttons/Button";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { TagSelector } from "../../Inputs/TagSelector";
import { Textarea } from "../../Inputs/Textarea";
import { VacancyHeader } from "./styles";

export function NewVacancyModal() {
  return (
    <ReactModal
      isOpen={true}
      className="react-NewVacancyModal"
      overlayClassName="react-modal-overlay"
    >
      <CloseModalButton />
      <h1 style={{ textAlign: "center" }}>Criar Vaga</h1>
      <VacancyHeader>
        <input type="text" placeholder="Título da vaga" />
        <TagSelector style={{ marginBottom: "initial" }} />
      </VacancyHeader>

      <Textarea placeholder="Conte mais sobre a vaga que está oferecendo"></Textarea>
    </ReactModal>
  );
}

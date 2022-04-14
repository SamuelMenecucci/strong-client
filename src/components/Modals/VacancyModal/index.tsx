import Modal from "react-modal";
import { ModalProps } from "../../../shared/models";
import { VacancyForm } from "./styles";
import { TextareaInput } from "../../Inputs/Textarea/styles";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { useState } from "react";
import editImg from "../../../assets/editarIcon.svg";

export function VacancyModal({ isOpen, onRequestClose }: ModalProps) {
  const [isDisabled, setIsDisabled] = useState(true);

  function handleSetDisabled(e: any) {
    e.preventDefault();

    !isDisabled ? setIsDisabled(true) : setIsDisabled(false);
    console.log(isDisabled);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-VacancyDetailsModal"
      overlayClassName="react-modal-overlay"
    >
      <VacancyForm>
        <CloseModalButton onClick={onRequestClose} />

        <span>
          <h1> HTML - CSS - Javascript </h1>{" "}
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={handleSetDisabled}
          >
            <img src={editImg} alt="" />
          </button>
        </span>

        <TextareaInput placeholder="" value={text} disabled />
      </VacancyForm>
    </Modal>
  );
}

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ";

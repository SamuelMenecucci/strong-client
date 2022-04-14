import Modal from "react-modal";
import { ModalProps } from "../../../shared/models";
import { Container } from "./styles";
import closeImg from "../../../assets/close.svg";
import { TextareaInput } from "../../Inputs/Textarea/styles";

export function VacancyDetailsModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-VacancyDetailsModal"
      overlayClassName="react-modal-overlay"
    >
      <Container>
        <button className="closeButton" onClick={onRequestClose}>
          <img src={closeImg} alt="" />
        </button>
        <h1>Titulo vaga</h1>
        HTML - CSS - Javascript
        <TextareaInput />
      </Container>
    </Modal>
  );
}

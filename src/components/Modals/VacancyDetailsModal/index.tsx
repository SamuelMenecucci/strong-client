import Modal from "react-modal";
import { ModalProps } from "../../../shared/models";
import { Container } from "./styles";
import closeImg from "../../../assets/close.svg";
import { TextareaInput } from "../../Inputs/Textarea/styles";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { TelInput } from "../../Inputs/TelInput";

export function VacancyDetailsModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-VacancyDetailsModal"
      overlayClassName="react-modal-overlay"
    >
      <Container>
        <CloseModalButton onClick={onRequestClose} />
        <h1>Titulo vaga</h1>
        HTML - CSS - Javascript
        <TelInput />
        <TextareaInput placeholder="" value={text} />
      </Container>
    </Modal>
  );
}

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ";

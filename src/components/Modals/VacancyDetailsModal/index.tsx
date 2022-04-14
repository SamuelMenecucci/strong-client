import Modal from "react-modal";
import { ModalProps } from "../../../shared/models";

export function VacancyDetailsModal({ isOpen, onRequestClose }: ModalProps) {
  return <Modal isOpen={isOpen} onRequestClose={onRequestClose}></Modal>;
}

import Modal from "react-modal";
import { RegisterForm } from "./styles";
import closeImg from "../../assets/close.svg";

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function RegisterModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <RegisterForm>
        <button onClick={onRequestClose}>
          <img src={closeImg} alt="" />
        </button>

        <h1>Cadastro</h1>

        <input type="text" placeholder="Nome da ONG" />

        <div className="left">
          <input type="number" placeholder="CNPJ" />
          <input type="email" placeholder="E-mail" />
        </div>

        <div className="right">
          <input type="password" placeholder="Digite a sua senha" />
        </div>

        <textarea
          name=""
          id=""
          placeholder="Conte mais sobre a sua instituição"
        ></textarea>
      </RegisterForm>
    </Modal>
  );
}

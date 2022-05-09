import { FormEvent } from "react";
import Modal from "react-modal";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { Container } from "./styles";

export function LoginModal({ isOpen, onRequestClose }: any) {
  function handleLogin(e: FormEvent) {}
  return (
    <Modal
      isOpen={isOpen}
      className="react-login-modal"
      overlayClassName="react-modal-overlay"
    >
      <CloseModalButton onClick={onRequestClose} />
      <Container onSubmit={handleLogin}>
        <label htmlFor="Login">Login</label>
        <input type="text" placeholder="Digite o seu email " />

        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite a sua senha " />

        <button type="submit">Fazer Login</button>
      </Container>
    </Modal>
  );
}

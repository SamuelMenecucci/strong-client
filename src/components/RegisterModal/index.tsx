import Modal from "react-modal";
import { Actions, Grid, RegisterForm } from "./styles";
import closeImg from "../../assets/close.svg";
import { Button } from "../Button";
import InputMask from "react-input-mask";
import { FormEvent, useState } from "react";
import { ModalProps } from "../../shared/models";

export function RegisterModal({ isOpen, onRequestClose }: ModalProps) {
  const [ong, setOng] = useState({});

  function handleCreateOng(event: FormEvent) {
    event.preventDefault();

    console.log(ong);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-registerModal-content"
    >
      <RegisterForm onSubmit={handleCreateOng}>
        <button className="closeButton" onClick={onRequestClose}>
          <img src={closeImg} alt="" />
        </button>

        <h1>Cadastro</h1>

        <input type="text" placeholder="Nome da ONG" name="NomeOng" />

        <Grid>
          <InputMask
            mask="99.999.999./9999-99"
            type="text"
            placeholder="CNPJ"
          />

          <InputMask
            mask="(99) 99999-9999"
            type="tel"
            placeholder="Seu telefone"
            onChange={(e) => setOng(e.target.value)}
          />
          <input type="email" placeholder="E-mail" />

          <input type="password" placeholder="Digite a sua senha" />
        </Grid>

        <textarea
          name=""
          id=""
          placeholder="Conte mais sobre a sua instituição"
          onChange={(e) => setOng(e.target.value)}
          maxLength={300}
        ></textarea>
        <Actions>
          <Button className="modalButtons" type="submit">
            Salvar e criar vaga
          </Button>
          <Button className="modalButtons" onClick={onRequestClose}>
            Voltar a navegar
          </Button>
        </Actions>
      </RegisterForm>
    </Modal>
  );
}

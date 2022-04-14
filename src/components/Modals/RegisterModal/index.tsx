import Modal from "react-modal";
import { Actions, Grid, RegisterForm } from "./styles";
import closeImg from "../../../assets/close.svg";
import { Button } from "../../Button";
import InputMask from "react-input-mask";
import { FormEvent, useState } from "react";
import { ModalProps, OngType } from "../../../shared/models";
import { useRequests } from "../../../contexts/useRequests";
import { TextareaInput } from "../../Inputs/Textarea/styles";

export function RegisterModal({ isOpen, onRequestClose }: ModalProps) {
  const [registerOng, setRegisterOng] = useState<OngType>({} as OngType);

  const { createOng } = useRequests();

  async function handleCreateOng(event: FormEvent) {
    createOng(registerOng);
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

        <input
          type="text"
          placeholder="Nome da ONG"
          name="NomeOng"
          onChange={(e) =>
            setRegisterOng({ ...registerOng, nomeOng: e.target.value })
          }
        />

        <Grid>
          <InputMask
            mask="99.999.999./9999-99"
            type="text"
            placeholder="CNPJ"
            onChange={(e) =>
              setRegisterOng({ ...registerOng, cnpj: e.target.value })
            }
          />

          <InputMask
            mask="(99) 99999-9999"
            type="tel"
            placeholder="Seu telefone"
            onChange={(e) =>
              setRegisterOng({ ...registerOng, tel: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) =>
              setRegisterOng({ ...registerOng, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Digite a sua senha"
            onChange={(e) =>
              setRegisterOng({ ...registerOng, senha: e.target.value })
            }
          />
        </Grid>

        <TextareaInput
          name=""
          id=""
          placeholder="Conte mais sobre a sua instituição"
          onChange={(e) =>
            setRegisterOng({ ...registerOng, description: e.target.value })
          }
          maxLength={300}
        />
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

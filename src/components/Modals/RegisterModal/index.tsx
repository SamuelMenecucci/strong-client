import Modal from "react-modal";
import { Actions, Grid, RegisterForm } from "./styles";
import { Button } from "../../Buttons/Button";
import { FormEvent, useState } from "react";
import { ModalProps, OngType } from "../../../shared/models";
import { useRequests } from "../../../contexts/useRequests";
import { TextareaInput } from "../../Inputs/Textarea/styles";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { TelInput } from "../../Inputs/TelInput";
import { CNPJInput } from "../../Inputs/CNPJInput";
import { EmailInput } from "../../Inputs/EmailInput";
import { SenhaInput } from "../../Inputs/SenhaInput";
import { InputMasks } from "../../../Helper";
import toast from "react-hot-toast";

export function RegisterModal({ isOpen, onRequestClose }: ModalProps) {
  const [registerOng, setRegisterOng] = useState<OngType>({
    nomeOng: "",
    cnpj: "",
    tel: "",
    email: "",
    senha: "",
    description: "",
  } as OngType);

  const { createOng } = useRequests();

  async function handleCreateOng(event: FormEvent) {
    event.preventDefault();

    if (registerOng.cnpj.replace(/\D/g, "").length < 14) {
      return toast.error("CNPJ Inválido");
    }

    if (registerOng.tel.replace(/\D/g, "").length < 11) {
      return toast.error("Telefone Inválido");
    }

    await createOng(registerOng);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-registerModal-content"
    >
      <RegisterForm onSubmit={handleCreateOng}>
        <CloseModalButton onClick={onRequestClose} />

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
          <CNPJInput
            value={registerOng.cnpj}
            onChange={(e) =>
              setRegisterOng({ ...registerOng, cnpj: e.target.value })
            }
            onKeyDown={(e) => InputMasks.apply(e.target, "CNPJMask")}
          />

          <TelInput
            value={registerOng.tel}
            onChange={(e) =>
              setRegisterOng({ ...registerOng, tel: e.target.value })
            }
            // onKeyDown={(e) => InputMasks.apply(e.target, "TelMask")}
          />
          <EmailInput
            value={registerOng.email}
            onChange={(e) =>
              setRegisterOng({ ...registerOng, email: e.target.value })
            }
          />

          <SenhaInput
            value={registerOng.senha}
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

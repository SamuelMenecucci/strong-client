import Modal from "react-modal";
import addImg from "../../../assets/add.svg";
import profileImg from "../../../assets/profileInput.svg";
import editImg from "../../../assets/user-edit.svg";

import { Actions, Grid, MyVacancies, ProfileForm } from "./styles";
import { Button } from "../../Buttons/Button";
import { PhotosUpload } from "../../../Helper";
import { ModalProps } from "../../../shared/models";
import { useRequests } from "../../../contexts/useRequests";
import { FormEvent, useState } from "react";
import { VacancyCard } from "../../Vacancy/VacancyCard";
import { Textarea } from "../../Inputs/Textarea";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { TelInput } from "../../Inputs/TelInput";
import { CNPJInput } from "../../Inputs/CNPJInput";
import { EmailInput } from "../../Inputs/EmailInput";
import { SenhaInput } from "../../Inputs/SenhaInput";

export function ProfileModal({ isOpen, onRequestClose }: ModalProps) {
  const { ong, setOng, vagas, loggedOng, setLoggedOng } = useRequests();
  const [isDisabled, setIsDisabled] = useState(true);

  function handleSetDisabled(e: any) {
    e.preventDefault();

    !isDisabled ? setIsDisabled(true) : setIsDisabled(false);
    console.log(isDisabled);
  }

  function handleEditOng(event: any) {
    event.preventDefault();

    const { nome, cnpj, tel, email, senha, descricao }: any =
      document.forms["profile"];

    console.log(nome, cnpj, tel, email, senha, descricao.value);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-profileModal-content"
      overlayClassName="react-modal-overlay"
    >
      <ProfileForm onSubmit={handleEditOng} id="profile">
        <CloseModalButton onClick={onRequestClose} />

        <div className="name-picture">
          <span>
            <label htmlFor="profileInputImg">
              <img
                style={{ cursor: "pointer" }}
                src={profileImg}
                alt=""
                id="profileTag"
              />
            </label>
            <input
              type="file"
              id="profileInputImg"
              name="profilePicture"
              onChange={(e) => PhotosUpload.handleProfilePicture(e)}
              accept="image/*"
            />
            {isDisabled ? (
              <h1>{loggedOng.nome}</h1>
            ) : (
              <input
                id="nome"
                type="text"
                name="nomeOng"
                placeholder="Nome da ONG"
                defaultValue={loggedOng.nome}
              />
            )}
          </span>

          <button
            style={{ background: "transparent", border: "none" }}
            onClick={handleSetDisabled}
          >
            <img src={editImg} alt="" />
          </button>
        </div>

        <Grid>
          <CNPJInput disabled={isDisabled} defaultValue={loggedOng.cnpj} />

          <TelInput disabled={isDisabled} defaultValue={loggedOng.tel} />
          <EmailInput disabled={isDisabled} defaultValue={loggedOng.email} />

          <SenhaInput disabled={isDisabled} defaultValue={loggedOng.senha} />
        </Grid>

        <Textarea disabled={isDisabled} defaultValue={loggedOng.descricao} />
        <Actions>
          {!isDisabled && (
            <Button className="modalButtons" type="submit">
              Salvar
            </Button>
          )}
        </Actions>
      </ProfileForm>

      <MyVacancies>
        <span>
          <h1>Suas Vagas</h1>

          <button>
            <img src={addImg} alt="" />{" "}
          </button>
        </span>

        {vagas.map((element: any) => {
          return <VacancyCard vagas={element} />;
        })}
      </MyVacancies>
    </Modal>
  );
}

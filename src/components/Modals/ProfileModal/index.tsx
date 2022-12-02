import Modal from "react-modal";
import addImg from "../../../assets/add.svg";
import profileImg from "../../../assets/profileInput.svg";
import editImg from "../../../assets/user-edit.svg";

import { Actions, Grid, MyVacancies, ProfileForm } from "./styles";
import { Button } from "../../Buttons/Button";
import { PhotosUpload } from "../../../Helper";
import { ModalProps } from "../../../shared/models";
import { useRequests } from "../../../contexts/useRequests";
import { useEffect, useState } from "react";
import { VacancyCard } from "../../Vacancy/VacancyCard";
import { Textarea } from "../../Inputs/Textarea";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { TelInput } from "../../Inputs/TelInput";
import { CNPJInput } from "../../Inputs/CNPJInput";
import { EmailInput } from "../../Inputs/EmailInput";
import { SenhaInput } from "../../Inputs/SenhaInput";
import { api } from "../../../services/api";
import { NewVacancyModal } from "../NewVacancyModal";
import toast from "react-hot-toast";

export function ProfileModal({ isOpen, onRequestClose }: ModalProps) {
  const { loggedOng, editOng } = useRequests();
  const [isDisabled, setIsDisabled] = useState(true);
  const [photo, setPhoto] = useState<any>({});
  const [isNewVacancyModalOpen, setIsNewVacancyModalOpen] = useState(false);

  function handleOpenNewVacancyModal() {
    setIsNewVacancyModalOpen(true);
  }
  function handleCloseNewVacancyModal() {
    setIsNewVacancyModalOpen(false);
  }

  function handleSetDisabled(e: any) {
    e.preventDefault();

    !isDisabled ? setIsDisabled(true) : setIsDisabled(false);
  }

  async function handleEditOng(event: any) {
    event.preventDefault();

    const { nome, cnpj, tel, email, senha, descricao } =
      document.forms["profile"];

    const data = {
      id: loggedOng.id,
      nome: nome.value,
      cnpj: cnpj.value,
      tel: tel.value,
      email: email.value,
      senha: senha.value,
      descricao: descricao.value,
    };

    let formData = new FormData();

    formData.append("file", photo[0]);
    formData.append("ong", JSON.stringify(data));

    await editOng(formData);
  }

  const [vagasLoggedOng, setVagasLoggedOng] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get(`/ongVacancies`).then((res) => {
      setVagasLoggedOng(res.data);
    });
  }, []);

  function handleLogout() {
    toast.promise(api.get("ongs/logout"), {
      loading: "Saindo...",
      success: (res) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return "Logout feito!";
      },
      error: "Erro ",
    });
  }
  // if (isLoading) {
  //   return <p>carregando</p>;
  // }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-profileModal-content"
      overlayClassName="react-modal-overlay"
    >
      <ProfileForm
        id="profile"
        onSubmit={handleEditOng}
        encType="multipart/form-data"
      >
        <CloseModalButton onClick={onRequestClose} />

        <div className="name-picture">
          <span>
            <label
              htmlFor="profileInputImg"
              style={
                !isDisabled ? { cursor: "pointer" } : { cursor: "initial" }
              }
            >
              {loggedOng.imagem ? (
                <img src={loggedOng.imagem} alt="" id="profileTag" />
              ) : (
                <img src={profileImg} alt="" id="profileTag" />
              )}
            </label>
            <input
              type="file"
              id="profileInputImg"
              name="profilePicture"
              onChange={(e) => {
                setPhoto(e.target.files);
                PhotosUpload.handleProfilePicture(e);
              }}
              accept="image/*"
              disabled={isDisabled}
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
                disabled={isDisabled}
              />
            )}
          </span>

          <span className="actions">
            <button
              style={{ background: "transparent", border: "none" }}
              onClick={handleSetDisabled}
            >
              <img src={editImg} alt="" />
            </button>

            <Button
              onClick={handleLogout}
              style={{ padding: " 0 10px", fontSize: "20px" }}
            >
              Sair
            </Button>
          </span>
        </div>

        <Grid>
          <CNPJInput disabled={true} defaultValue={loggedOng.cnpj} />

          <TelInput disabled={isDisabled} defaultValue={loggedOng.tel} />
          <EmailInput disabled={isDisabled} defaultValue={loggedOng.email} />
          {!isDisabled && (
            <SenhaInput
              disabled={isDisabled}
              defaultValue={""}
              placeholder="Digite a sua senha para salvar"
            />
          )}
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

          <button onClick={handleOpenNewVacancyModal}>
            <img src={addImg} alt="" />{" "}
          </button>
        </span>

        <VacancyCard vagas={vagasLoggedOng} sizeType="profileModal" />
        <NewVacancyModal
          isOpen={isNewVacancyModalOpen}
          onRequestClose={handleCloseNewVacancyModal}
        />
      </MyVacancies>
    </Modal>
  );
}

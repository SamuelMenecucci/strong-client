import Modal from "react-modal";
import addImg from "../../../assets/add.svg";
import profileImg from "../../../assets/profileInput.svg";
import editImg from "../../../assets/user-edit.svg";
import InputMask from "react-input-mask";

import { Actions, Grid, MyVacancies, ProfileForm } from "./styles";
import { Button } from "../../Buttons/Button";
import { PhotosUpload } from "../../../Helper";
import { ModalProps } from "../../../shared/models";
import { useRequests } from "../../../contexts/useRequests";
import { FormEvent, useState } from "react";
import { VacancyCard } from "../../Vacancy/VacancyCard";
import { TextareaInput } from "../../Inputs/Textarea/styles";
import { CloseModalButton } from "../../Buttons/CloseModalButton";

export function ProfileModal({ isOpen, onRequestClose }: ModalProps) {
  const { ong, setOng, vagas, loggedOng, setLoggedOng } = useRequests();
  const [isDisabled, setIsDisabled] = useState(true);

  function handleSetDisabled(e: any) {
    e.preventDefault();

    !isDisabled ? setIsDisabled(true) : setIsDisabled(false);
    console.log(isDisabled);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-profileModal-content"
      overlayClassName="react-modal-overlay"
    >
      <ProfileForm>
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
                type="text"
                name="nomeOng"
                id="nome"
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
          <InputMask
            mask="99.999.999./9999-99"
            id="cnpj"
            type="text"
            placeholder="CNPJ"
            disabled={isDisabled}
            value={loggedOng.cnpj}
            onChange={(e) =>
              setLoggedOng({ ...loggedOng, cnpj: e.target.value })
            }
          />

          <InputMask
            mask="(99) 99999-9999"
            type="tel"
            disabled={isDisabled}
            value={loggedOng.tel}
            onChange={(e) =>
              setLoggedOng({ ...loggedOng, tel: e.target.value })
            }
            placeholder="Seu telefone"
          />
          <input
            type="email"
            placeholder="E-mail"
            disabled={isDisabled}
            value={loggedOng.email}
            onChange={(e) =>
              setLoggedOng({ ...loggedOng, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Digite a sua senha"
            disabled={isDisabled}
            value={loggedOng.senha}
            onChange={(e) =>
              setLoggedOng({ ...loggedOng, senha: e.target.value })
            }
          />
        </Grid>

        <TextareaInput
          name=""
          id=""
          placeholder="Conte mais sobre a sua instituição"
          disabled={isDisabled}
          value={loggedOng.descricao}
          onChange={(e) =>
            setLoggedOng({ ...loggedOng, descricao: e.target.value })
          }
          maxLength={300}
        />
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

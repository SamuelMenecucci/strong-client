import Modal from "react-modal";
import { Flex, OngContacts, OngInfo, VacancyForm } from "./styles";
import { TextareaInput } from "../../Inputs/Textarea/styles";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { useState } from "react";
import editImg from "../../../assets/editarIcon.svg";
import userPicture from "../../../assets/profileInput.svg";
import { TelInput } from "../../Inputs/TelInput";
import { EmailInput } from "../../Inputs/EmailInput";
import emailImg from "../../../assets/email.svg";
import callImg from "../../../assets/call.svg";
import { TagSelector } from "../../Inputs/TagSelector";
import { useRequests } from "../../../contexts/useRequests";

export function VacancyModal({ isOpen, onRequestClose, vaga }: any) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { loggedOng } = useRequests();

  function handleSetDisabled(e: any) {
    e.preventDefault();

    !isDisabled ? setIsDisabled(true) : setIsDisabled(false);
  }

  console.log(vaga);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-VacancyDetailsModal"
      overlayClassName="react-modal-overlay"
    >
      <VacancyForm>
        <CloseModalButton onClick={onRequestClose} />
        {isDisabled ? (
          <h1 style={{ textAlign: "center", fontSize: "32px" }}>
            {vaga.titulo}
          </h1>
        ) : (
          <input
            type="text"
            style={{ height: "50px" }}
            defaultValue={vaga.titulo}
            placeholder="Título da vaga"
          />
        )}

        <span>
          {isDisabled ? (
            <h1> {vaga.tag}</h1>
          ) : (
            <select name="" id="">
              <option value="">HTML</option>
              <option value="">CSS</option>
              <option value="">Javascript</option>
              <option value="">Java</option>
            </select>
          )}

          {vaga.id == loggedOng.id && (
            <button
              style={{ background: "transparent", border: "none" }}
              onClick={handleSetDisabled}
            >
              <img src={editImg} alt="" />
            </button>
          )}
        </span>

        <TextareaInput
          placeholder=""
          defaultValue={vaga.descricao}
          disabled={isDisabled}
        />

        <Flex>
          <OngInfo>
            <img style={{ background: "red" }} src={vaga.imagem} alt="" />
            <h1 style={{ fontSize: "32px" }}>{vaga.nome}</h1>
          </OngInfo>

          <OngContacts>
            {isDisabled ? (
              <>
                <span className="tel">
                  <img src={callImg} alt="" />
                  <h1>{vaga.tel}</h1>
                </span>
                <span className="email">
                  <img src={emailImg} alt="" />
                  <h1>{vaga.email}</h1>
                </span>
              </>
            ) : (
              <>
                <TelInput
                  style={{
                    width: "200px",
                    height: "37px",
                    marginBottom: "28px",
                  }}
                  defaultValue={vaga.tel}
                />
                <EmailInput
                  style={{ height: "37px" }}
                  defaultValue={vaga.email}
                />
                ,
              </>
            )}
          </OngContacts>
        </Flex>

        <button></button>
      </VacancyForm>
    </Modal>
  );
}

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ";

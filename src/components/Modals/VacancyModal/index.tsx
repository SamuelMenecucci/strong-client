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

export function VacancyModal({ isOpen, onRequestClose, vaga }: any) {
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
      className="react-VacancyDetailsModal"
      overlayClassName="react-modal-overlay"
    >
      <VacancyForm>
        <CloseModalButton onClick={onRequestClose} />
        {isDisabled ? (
          <h1 style={{ textAlign: "center", fontSize: "32px" }}>
            Título da vaga
          </h1>
        ) : (
          <input
            type="text"
            style={{ height: "50px" }}
            placeholder="Título da vaga"
          />
        )}

        <span>
          {isDisabled ? <h1> HTML - CSS - Javascript </h1> : <TagSelector />}

          <button
            style={{ background: "transparent", border: "none" }}
            onClick={handleSetDisabled}
          >
            <img src={editImg} alt="" />
          </button>
        </span>

        <TextareaInput placeholder="" value={text} disabled={isDisabled} />

        <Flex>
          <OngInfo>
            <img style={{ background: "red" }} src={userPicture} alt="" />
            <h1 style={{ fontSize: "32px" }}>Nome da ong</h1>
          </OngInfo>

          <OngContacts>
            {isDisabled ? (
              <>
                <span className="tel">
                  <img src={callImg} alt="" />
                  <h1>(19) 99438-2900</h1>
                </span>
                <span className="email">
                  <img src={emailImg} alt="" />
                  <h1>samuelmenecucci@gmail.com</h1>
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
                />
                <EmailInput style={{ height: "37px" }} />,
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

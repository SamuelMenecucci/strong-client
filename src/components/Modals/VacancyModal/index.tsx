import Modal from "react-modal";
import { Flex, OngContacts, OngInfo, VacancyForm } from "./styles";
import { TextareaInput } from "../../Inputs/Textarea/styles";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { FormEvent, useState } from "react";
import editImg from "../../../assets/editarIcon.svg";
import emailImg from "../../../assets/email.svg";
import callImg from "../../../assets/call.svg";
import { TagSelector } from "../../Inputs/TagSelector";
import { useRequests } from "../../../contexts/useRequests";
import { api } from "../../../services/api";
import { Button } from "../../Buttons/Button";
import { NewFeedback } from "../NewFeedbackModal";
import toast from "react-hot-toast";

export function VacancyModal({ isOpen, onRequestClose, vaga }: any) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { loggedOng } = useRequests();
  const [tags, setTags] = useState<any>([]);
  const [isNewFeedbackModalOpen, setIsNewFeedbackModalOpen] = useState(false);

  function handleSetDisabled(e: any) {
    e.preventDefault();

    !isDisabled ? setIsDisabled(true) : setIsDisabled(false);
  }

  function handleOpenNewFeedbackModal() {
    setIsNewFeedbackModalOpen(true);
  }

  function handleCloseNewFeedbackModal() {
    setIsNewFeedbackModalOpen(false);
  }

  function handleEditVacancy(e: FormEvent) {
    e.preventDefault();
    let { tituloVaga, descricaoVaga } = document.forms["editVacancy"];

    if (!tituloVaga.value || !descricaoVaga.value)
      return toast.error("Preencha todos os campos!");

    if (tags.length === 0)
      return toast.error("Selecione ao menos uma tag para a vaga!");

    let formatTag = [];

    let contador = tags.reduce((acc: any, elemento: any) => {
      if (acc[elemento]) {
        acc[elemento] += 1;
      } else acc[elemento] = 1;

      return acc;
    }, {});

    for (let element in contador) {
      if (contador[element] === 1 || contador[element] % 2 === 1) {
        formatTag.push(element);
      }
    }

    api
      .put("/editVacancy", {
        titulo: tituloVaga.value,
        descricao: descricaoVaga.value,
        tags: formatTag,
        id: vaga.vagaid,
      })
      .then((res) => window.location.reload());
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-VacancyDetailsModal"
      overlayClassName="react-modal-overlay"
    >
      <VacancyForm id="editVacancy" onSubmit={handleEditVacancy}>
        <CloseModalButton onClick={onRequestClose} />
        {isDisabled ? (
          <h1 style={{ textAlign: "center", fontSize: "32px" }}>
            {vaga.titulo}
          </h1>
        ) : (
          <input
            type="text"
            id="tituloVaga"
            style={{ height: "50px" }}
            defaultValue={vaga.titulo}
            placeholder="Título da vaga"
          />
        )}

        <span>
          {isDisabled ? (
            <h1>{vaga.tag}</h1>
          ) : (
            <TagSelector onChange={(e) => setTags([...tags, e.target.value])} />
          )}

          {vaga.ongid === loggedOng.id && (
            <button
              style={{ background: "transparent", border: "none" }}
              onClick={handleSetDisabled}
            >
              <img src={editImg} alt="" />
            </button>
          )}
        </span>

        <TextareaInput
          id="descricaoVaga"
          defaultValue={vaga.descricaovaga}
          disabled={isDisabled}
        />

        <Flex>
          <OngInfo>
            <img src={vaga.imagem} alt="" />
            <h1 style={{ fontSize: "32px" }}>{vaga.nome}</h1>
          </OngInfo>

          <OngContacts>
            <span className="tel">
              <img src={callImg} alt="" />
              <h1>{vaga.tel}</h1>
            </span>
            <span className="email">
              <img src={emailImg} alt="" />
              <h1>{vaga.email}</h1>
            </span>
          </OngContacts>
        </Flex>

        {!isDisabled ? (
          <Button
            style={{
              textAlign: "center",
              padding: "11px 71px",
              margin: "20px auto",
            }}
            type="submit"
          >
            Salvar
          </Button>
        ) : (
          vaga.ongid === loggedOng.id && (
            <Button
              style={{
                textAlign: "center",
                padding: "11px 26px",
                margin: "20px auto",
              }}
              type="button"
              onClick={() => handleOpenNewFeedbackModal()}
            >
              Finalizar vaga
            </Button>
          )
        )}
      </VacancyForm>
      <NewFeedback
        isOpen={isNewFeedbackModalOpen}
        onRequestClose={handleCloseNewFeedbackModal}
        vaga={vaga}
      />
    </Modal>
  );
}

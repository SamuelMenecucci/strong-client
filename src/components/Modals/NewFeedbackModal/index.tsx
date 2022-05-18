import ReactModal from "react-modal";
import { Button } from "../../Buttons/Button";
import { Textarea } from "../../Inputs/Textarea";
import likeImg from "../../../assets/like-dislike.svg";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { api } from "../../../services/api";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import styled from "styled-components";

export function NewFeedback({ isOpen, onRequestClose, vaga }: any) {
  const [newFeedback, setNewFeedback] = useState({
    ongId: vaga.ongid,
    feedback: "",
  });

  async function handleDeleteVacancy(id: any) {
    toast.promise(api.delete(`/deleteVacancy/${id}`), {
      loading: "Excluindo...",
      success: (res) => {
        setTimeout(() => {
          window.location.reload();
        }, 500);
        return "Excluído";
      },
      error: "Algo deu errado.",
    });
  }

  async function handleCreateNewFeedback(e: FormEvent) {
    e.preventDefault();

    const { feedbackCheckbox } = document.forms["newFeedback"];

    if (!feedbackCheckbox.checked && !newFeedback.feedback)
      return toast.error(
        "Digite um feedback ou marque a opção 'Não desejo adicionar um feedback'"
      );

    if (feedbackCheckbox.checked) {
      return await handleDeleteVacancy(vaga.vagaid);
    }

    await handleDeleteVacancy(vaga.vagaid);

    toast.promise(api.post("/newFeedback", { ...newFeedback }), {
      loading: "Salvando ...",
      success: (res) => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);

        return "Obrigado pelo seu Feedback!";
      },
      error: "Algo deu errado ",
    });
  }

  return (
    <ReactModal
      overlayClassName="react-modal-overlay"
      className="react-newFeedbackModal"
      isOpen={isOpen}
    >
      <CloseModalButton onClick={onRequestClose} />
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={likeImg} alt="" style={{ marginRight: "13px" }} />
        Feedback
      </h1>
      <form onSubmit={handleCreateNewFeedback} id="newFeedback">
        <Textarea
          placeholder="Inserir FeedBack"
          style={{ marginBottom: "2px" }}
          onChange={(e) =>
            setNewFeedback({ ...newFeedback, feedback: e.target.value })
          }
        />
        <Styled>
          <input type="checkbox" id="feedbackCheckbox" />
          <label htmlFor="feedbackCheckbox">
            Não desejo adicionar um feedback
          </label>
        </Styled>
        <Button
          // onClick={() => handleDeleteVacancy(vaga.vagaid)}
          style={{ padding: "11px 32px", margin: "auto" }}
          type="submit"
        >
          Concluir
        </Button>
      </form>
    </ReactModal>
  );
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 13px;

  background-color: #fff;

  input[type="checkbox"] {
    width: auto;
    margin-right: 8px;
    margin-bottom: initial;
  }
`;

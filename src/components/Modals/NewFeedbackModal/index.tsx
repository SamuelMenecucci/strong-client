import ReactModal from "react-modal";
import { Button } from "../../Buttons/Button";
import { Textarea } from "../../Inputs/Textarea";
import likeImg from "../../../assets/like-dislike.svg";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { api } from "../../../services/api";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";

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
    await handleDeleteVacancy(vaga.vagaid);
    toast.promise(api.post("/newFeedback", { ...newFeedback }), {
      loading: "Salvando ...",
      success: "Obrigado pelo seu Feedback!",
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
      <form onSubmit={handleCreateNewFeedback}>
        <Textarea
          placeholder="Inserir FeedBack"
          onChange={(e) =>
            setNewFeedback({ ...newFeedback, feedback: e.target.value })
          }
        />

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

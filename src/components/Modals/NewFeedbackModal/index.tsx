import ReactModal from "react-modal";
import { Button } from "../../Buttons/Button";
import { Textarea } from "../../Inputs/Textarea";
import likeImg from "../../../assets/like-dislike.svg";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { api } from "../../../services/api";
import toast from "react-hot-toast";

export function NewFeedback({ isOpen, onRequestClose, vaga }: any) {
  function handleDeleteVacancy(id: any) {
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
      <Textarea placeholder="Inserir FeedBack" />

      <Button
        onClick={() => handleDeleteVacancy(vaga.vagaid)}
        style={{ padding: "11px 32px", margin: "auto" }}
      >
        Concluir
      </Button>
    </ReactModal>
  );
}

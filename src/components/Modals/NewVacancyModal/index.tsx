import { table } from "console";
import { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import { useRequests } from "../../../contexts/useRequests";
import { api } from "../../../services/api";
import { Button } from "../../Buttons/Button";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { TagSelector } from "../../Inputs/TagSelector";
import { Textarea } from "../../Inputs/Textarea";
import { VacancyHeader } from "./styles";

export function NewVacancyModal({ isOpen, onRequestClose }: any) {
  const { loggedOng } = useRequests();
  const [vaga, setVaga] = useState<any>({
    titulo: "",
    tag: [],
    descricao: "",
    ongId: loggedOng.id,
  });

  function handleNovaVaga(e: FormEvent) {
    e.preventDefault();

    api.post("/newVacancy", { vaga });
  }

  return (
    <ReactModal
      isOpen={isOpen}
      className="react-NewVacancyModal"
      overlayClassName="react-modal-overlay"
    >
      <CloseModalButton onClick={onRequestClose} />
      <h1 style={{ textAlign: "center" }}>Criar Vaga</h1>

      <form id="novaVaga" onSubmit={handleNovaVaga}>
        <VacancyHeader>
          <input
            type="text"
            placeholder="Título da vaga"
            maxLength={20}
            onChange={(e) => setVaga({ ...vaga, titulo: e.target.value })}
          />
          <TagSelector
            onChange={(e) =>
              setVaga({ ...vaga, tag: [...vaga.tag, e.target.value] })
            }
          />
        </VacancyHeader>

        <Textarea
          placeholder="Conte mais sobre a vaga que está oferecendo"
          onChange={(e) => setVaga({ ...vaga, descricao: e.target.value })}
        ></Textarea>
        <Button
          type="submit"
          style={{
            width: "150px",
            margin: "0 auto",
            fontSize: "22px",
            padding: "10px ",
          }}
        >
          Criar Vaga
        </Button>
      </form>
    </ReactModal>
  );
}

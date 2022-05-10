import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import { useRequests } from "../../../contexts/useRequests";
import { api } from "../../../services/api";
import { CloseModalButton } from "../../Buttons/CloseModalButton";
import { Container } from "./styles";

export function LoginModal({ isOpen, onRequestClose }: any) {
  const [loginUser, setLoginUser] = useState<any>({});
  const { setLoggedOng } = useRequests();

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    toast.promise(api.post("/login", { ...loginUser }), {
      loading: "Entrando...",
      success: (res) => {
        sessionStorage.setItem("ong", JSON.stringify(res.data));
        setTimeout(() => window.location.reload(), 200);
        return "Seja bem vindo!";
      },
      error: (err) => err.response.data,
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      className="react-login-modal"
      overlayClassName="react-modal-overlay"
    >
      <CloseModalButton onClick={onRequestClose} />
      <Container onSubmit={handleLogin}>
        <label htmlFor="Login">Login</label>
        <input
          type="text"
          placeholder="Digite o seu email "
          onChange={(e) =>
            setLoginUser({ ...loginUser, username: e.target.value })
          }
        />

        <label htmlFor="">Senha</label>
        <input
          type="password"
          placeholder="Digite a sua senha "
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
        />

        <span>
          <button type="submit">
            <h1>Fazer Login</h1>
          </button>
        </span>
      </Container>
    </Modal>
  );
}

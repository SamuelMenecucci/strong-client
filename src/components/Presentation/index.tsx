import { Container } from "./styles";
import homeImg from "../../assets/home-edit.png";
import criadoresImg from "../../assets/criadores.svg";
import buttonImg from "../../assets/arrow-circle-right.svg";
import { useState } from "react";
import { RegisterModal } from "../Modals/RegisterModal";
import { Button } from ".././Buttons/Button";
import { useRequests } from "../../contexts/useRequests";

type PresentationProps = {
  img: string;
  title: string;
};

export function Presentation({ title, img }: PresentationProps) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const { loggedOng } = useRequests();

  function handleOpenRegisterModal() {
    setIsRegisterModalOpen(true);
  }

  function handleCloseRegisterModal() {
    setIsRegisterModalOpen(false);
  }

  return (
    <Container>
      <div className="be-a-volunteer">
        <h1> {title || "Para Voluntário ou Ong, seja StrONG"}</h1>
        <p>
          StrONG é uma aplicação que não se refere a força física, mas sim ao
          conceito da inércia que diz que um corpo irá sempre permanecer em
          repouso, exceto se alguma força atuar sobre ele. <br /> <br />
          Com isso assimilamos o corpo que está parado no tempo as (ONGs) que
          precisam de um empurrãozinho, e a força está atrelada aos
          (Voluntários) que solucionam os respectivos problemas das ONGs.
        </p>

        <div className="home-img mobile">
          <img src={img ? criadoresImg : homeImg} alt="" />
        </div>

        {!loggedOng && (
          <Button id="register" onClick={handleOpenRegisterModal}>
            Cadastre-se <img src={buttonImg} alt="" />
          </Button>
        )}
      </div>

      <div className="home-img desktop">
        <img src={img ? criadoresImg : homeImg} alt="" />
      </div>

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={handleCloseRegisterModal}
      />
    </Container>
  );
}

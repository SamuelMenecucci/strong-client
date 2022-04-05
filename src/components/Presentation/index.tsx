import { Container } from "./styles";
import homeImg from "../../assets/home-edit.png";
import buttonImg from "../../assets/arrow-circle-right.svg";
import { useState } from "react";
import { RegisterModal } from "../RegisterModal";
import { Button } from "../Button/index";

export function Presentation() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  function handleOpenRegisterModal() {
    setIsRegisterModalOpen(true);
  }

  function handleCloseRegisterModal() {
    setIsRegisterModalOpen(false);
  }
  return (
    <Container>
      <div className="be-a-volunteer">
        <h1>Seja um voluntário</h1>
        <p>
          StrONG é uma aplicação que não se refere a força física, mas sim ao
          conceito da inércia que diz que um corpo irá sempre permanecer em
          repouso, exceto se alguma força atuar sobre ele. <br /> <br />
          Com isso assimilamos o corpo que está parado no tempo as (ONGs) que
          precisam de um empurrãozinho, e a força está atrelada aos
          (Voluntários) que solucionam os respectivos problemas das ONGs.
        </p>

        <Button onClick={handleOpenRegisterModal}>
          Cadastre-se <img src={buttonImg} alt="" />
        </Button>
      </div>

      <div className="home-img">
        <img src={homeImg} alt="" />
      </div>

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={handleCloseRegisterModal}
      />
    </Container>
  );
}

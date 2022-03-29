import { Container } from "./styles";
import homeImg from "../../assets/home-edit.png";

export function Presentation() {
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

        <button>Cadastre-se</button>
      </div>

      <div className="home-img">
        <img src={homeImg} alt="" />
      </div>
    </Container>
  );
}

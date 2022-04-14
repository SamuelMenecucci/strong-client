import { Content } from "./styles";

interface VacancyProps {
  onClick: () => void;
}

export function VacancyCard({ onClick }: VacancyProps) {
  return (
    <Content>
      <span>
        <img src={require("../../../assets/user.png")} alt="" />
      </span>

      <div className="info">
        <h1>Social Mídia</h1>
        <p>Nível Fácil - Social - Designe</p>
      </div>
    </Content>
  );
}

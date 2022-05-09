import { Container, Content, Links } from "./styles";
import logoImg from "../../assets/logo.svg";
import { Button } from "../Buttons/Button";
import profileImg from "../../assets/profile-circle.svg";
import { useState } from "react";
import { ProfileModal } from "../Modals/ProfileModal";
import { useRequests } from "../../contexts/useRequests";
import { LoginModal } from "../Modals/LoginModal";

export function Header() {
  const currentPage = window.location.pathname;
  const { loggedOng } = useRequests();

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenProfileModal() {
    setIsProfileModalOpen(true);
  }

  function handleCloseProfileModal() {
    setIsProfileModalOpen(false);
  }

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <span>
          str<b>ONG</b>
        </span>
      </Content>

      <Links>
        <a
          className={currentPage.includes("/home") ? "active" : undefined}
          href="/home"
        >
          Home
        </a>
        <a
          href="/vacancies"
          className={currentPage.includes("/vacancies") ? "active" : undefined}
        >
          Vagas
        </a>
        <a
          href="/feedbacks"
          className={currentPage.includes("/feedbacks") ? "active" : undefined}
        >
          Feedback
        </a>
        <a href="/">Sobre nós</a>

        {loggedOng ? (
          <Button
            style={{ marginLeft: "130px" }}
            className="profile"
            onClick={handleOpenProfileModal}
          >
            <img src={profileImg} alt="" />
          </Button>
        ) : (
          <Button
            style={{ marginLeft: "130px" }}
            className="profile"
            onClick={handleOpenLoginModal}
          >
            <img src={profileImg} alt="" />
          </Button>
        )}
      </Links>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onRequestClose={handleCloseProfileModal}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
      />
    </Container>
  );
}

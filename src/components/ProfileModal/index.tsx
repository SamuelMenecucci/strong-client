import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import profileImg from "../../assets/profileInput.svg";
import InputMask from "react-input-mask";

import { Actions, Grid, ProfileForm } from "./styles";
import { Button } from "../Button";

export function ProfileModal({ isOpen, onRequestClose }: any) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-profileModal-content"
      overlayClassName="react-modal-overlay"
    >
      <ProfileForm>
        <button className="closeButton" onClick={onRequestClose}>
          <img src={closeImg} alt="" />
        </button>

        <div className="name-picture">
          <label htmlFor="profileInputImg">
            <img style={{ cursor: "pointer" }} src={profileImg} alt="" />
          </label>
          <input
            type="file"
            id="profileInputImg"
            name="image"
            accept="image/*"
          />
          <input type="text" name="nomeOng" placeholder="Nome da ONG" />
        </div>

        <Grid>
          <InputMask
            mask="99.999.999./9999-99"
            type="text"
            placeholder="CNPJ"
          />

          <InputMask
            mask="(99) 99999-9999"
            type="tel"
            placeholder="Seu telefone"
          />
          <input type="email" placeholder="E-mail" />

          <input type="password" placeholder="Digite a sua senha" />
        </Grid>

        <textarea
          name=""
          id=""
          placeholder="Conte mais sobre a sua instituição"
          maxLength={300}
        ></textarea>
        <Actions>
          <Button className="modalButtons" type="submit">
            Salvar
          </Button>
        </Actions>
      </ProfileForm>
    </Modal>
  );
}

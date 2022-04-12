import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import profileImg from "../../assets/profileInput.svg";
import editImg from "../../assets/user-edit.svg";
import InputMask from "react-input-mask";

import { Actions, Grid, ProfileForm } from "./styles";
import { Button } from "../Button";
import { PhotosUpload } from "../../Helper";

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
          <span>
            <label htmlFor="profileInputImg">
              <img
                style={{ cursor: "pointer" }}
                src={profileImg}
                alt=""
                id="profileTag"
              />
            </label>
            <input
              type="file"
              id="profileInputImg"
              name="profilePicture"
              onChange={(e) => PhotosUpload.handleProfilePicture(e)}
              accept="image/*"
            />
            <input type="text" name="nomeOng" placeholder="Nome da ONG" />
          </span>

          <img src={editImg} alt="" />
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

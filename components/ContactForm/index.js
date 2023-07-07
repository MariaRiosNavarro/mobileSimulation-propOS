import styled from "styled-components";
import {
  StyledHeadingandFoto,
  StyledFieldsContainer,
} from "../components.style";
import { backSVG } from "../assets/contactsSVG";
import Button from "../Button";
import { StyledButtonsContainer } from "../components.style";
import { ThemeContext } from "../../pages/_app";
import { useContext } from "react";
import { StyledInputName } from "../Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
//------------------------------------------STYLE

const StyledPhotoInput = styled.input`
  background-color: transparent;
`;

const StyledPhotoLabel = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.5rem;
  gap: 0.5rem;
  width: auto;
  outline: none;
  border: 2px solid var(--primary-color);
  &:hover {
    border: 2px solid var(--hover-color);
  }
`;
const StyledInputGray = styled.input`
  background-color: lightgray;
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 0.8rem;
  &:focus {
    border-bottom: 2px solid var(--primary-color);
  }
`;
const StyledTextareaGray = styled.textarea`
  background-color: lightgray;
  border: none;
  border-radius: 8px;
  outline: none;
  padding: 0.8rem;
  &:focus {
    border-bottom: 2px solid var(--primary-color);
  }
`;

const PositioningContainer = styled.div`
  display: flex;
  background-color: transparent;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const EmptyContainerHelpToPositioning = styled.div`
  background-color: transparent;
  width: 2rem;
`;

const BackLink = styled(Link)``;

export default function ContactForm({ onSubmit, defaultData, formName }) {
  const { theme, customColor } = useContext(ThemeContext);
  const [imageChosen, setImageChosen] = useState(false);

  const router = useRouter();
  let photoUrl = "";
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const contactFormData = Object.fromEntries(formData);
    if (imageChosen) {
      const response = await fetch("/api/images/upload", {
        method: "POST",
        body: formData,
      });
      const photoDetails = await response.json();
      photoUrl = photoDetails.url;
      contactFormData.photo = photoUrl;
    }

    onSubmit(contactFormData);
  }
  return (
    <>
      <form onSubmit={handleSubmit} formName={formName}>
        <StyledHeadingandFoto>
          <PositioningContainer>
            <BackLink href={"/contacts"}>{backSVG}</BackLink>
            {/*-------------------------------- PHOTO INPUT  */}
            <StyledPhotoLabel htmlFor="photo">
              Kontakt Foto auswählen:
              <StyledPhotoInput
                type="file"
                id="photo"
                name="file"
                onChange={() => setImageChosen(true)}
              />
            </StyledPhotoLabel>
            <EmptyContainerHelpToPositioning />
          </PositioningContainer>
          {/* --------------------------------NAME INPUT */}
          <label htmlFor="name">
            <StyledInputName
              id="name"
              name="name"
              type="type"
              placeholder="Name *"
              defaultValue={defaultData?.name}
              theme={theme}
              customColor={customColor}
              required
            />
          </label>
        </StyledHeadingandFoto>
        <StyledFieldsContainer>
          {/* PHONE INPUT */}
          <label htmlFor="phone">Nummer:</label>
          <StyledInputGray
            id="phone"
            name="phone"
            type="text"
            defaultValue={defaultData?.phone}
          />
          {/* NOTE TEXTAREA */}
          <label htmlFor="note">Notizen:</label>
          <StyledTextareaGray
            id="note"
            name="note"
            type="text"
            rows={3}
            defaultValue={defaultData?.note}
          />
        </StyledFieldsContainer>
        <StyledButtonsContainer>
          <Button type="submit" name="speichern" />
        </StyledButtonsContainer>
      </form>
    </>
  );
}

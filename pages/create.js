import styled from "styled-components";
import { StyledHR } from "../components/StyledHR";
import { useState } from "react";
import { backSVG } from "../components/assets/contactsSVG";
import Link from "next/link";

//------------------------------------------STYLE

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem;
`;

const StyledInputName = styled.input`
  border: none;
  border-bottom: 2px solid var(--primary-color);
  &::placeholder {
    margin-left: -0.5rem;
    text-align: center;
  }
`;

//DO the ugly upload files input invisible
const StyledInputPhoto = styled.input`
  display: none;
`;

//Style for the input Photo label to replace the ugly uplaud file

const StyledPhotoLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: lightgray;
  border: 2px solid var(--primary-color);
  width: 34px;
  height: 34px;
  outline: none;
  &:hover {
    border: 2px solid var(--hover-color);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
`;

const StyledInputGray = styled.input`
  background-color: lightgray;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 0.8rem;
  &:focus {
    border-bottom: 2px solid var(--primary-color);
  }
`;

const StyledTextareaGray = styled.textarea`
  background-color: lightgray;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 0.8rem;
  &:focus {
    border-bottom: 2px solid var(--primary-color);
  }
`;

const StyledButton = styled.button`
  margin-top: 2rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 3px;
  padding: 1rem;
  width: 40%;
  &:hover {
    background-color: var(--hover-color);
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSuccessMessage = styled.h5`
  text-align: center;
  background-color: green;
  padding: 1rem;
  margin: 4rem;
  border-radius: 8px;
`;

const StyledBackLink = styled(Link)`
  position: absolute;
  margin-left: 2rem;
`;

//----------------------------------------------- FUNCTION------------HERE

export default function CreateContactForm() {
  const [showSuccessMessageState, setShowSuccessMessageState] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const contactData = Object.fromEntries(formData);
    const response = await fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    if (response.ok) {
      event.target.reset();
      //Green Sucess Message Logic
      setShowSuccessMessageState(true);
      setTimeout(() => {
        setShowSuccessMessageState(false);
      }, 2000);
    }
  }

  return (
    <>
      <StyledBackLink href={"/"}>{backSVG}</StyledBackLink>
      <form onSubmit={handleSubmit}>
        <StyledHeader>
          {/* NAME INPUT */}
          <label htmlFor="name">
            <StyledInputName
              id="name"
              name="name"
              type="type"
              placeholder="name *"
              required
            />
          </label>
          {/* PHOTO INPUT -not required- in this US not save. Upload Fotos will be add in the Future */}
          <StyledPhotoLabel htmlFor="photo">
            <StyledInputPhoto type="file" id="photo" />
          </StyledPhotoLabel>
        </StyledHeader>

        <StyledHR />
        <StyledContainer>
          {/* PHONE INPUT */}
          <label htmlFor="phone">Nummer:</label>
          <StyledInputGray id="phone" name="phone" type="text" />
          {/* NOTE TEXTAREA */}
          <label htmlFor="note">Notizen:</label>
          <StyledTextareaGray id="note" name="note" type="text" rows={4} />
          <StyledButtonContainer>
            <StyledButton type="submit">Speichern</StyledButton>
          </StyledButtonContainer>
        </StyledContainer>
      </form>
      {showSuccessMessageState && (
        <StyledSuccessMessage>Kontakte gespeichert</StyledSuccessMessage>
      )}
    </>
  );
}

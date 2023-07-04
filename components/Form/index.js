import styled from "styled-components";
import {
  StyledHeadingandFoto,
  StyledFieldsContainer,
} from "../components.style";
import Button from "../Button";
import { StyledButtonsContainer } from "../components.style";
import { ThemeContext } from "../../pages/_app";
import { useContext } from "react";
import { StyledInputName } from "../Layout";

//------------------------------------------STYLE

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

export default function Form({ onSubmit, formName, defaultData, onClick }) {
  const { theme, customColor } = useContext(ThemeContext);
  return (
    <>
      <form onSubmit={onSubmit} aria-labelledby={formName}>
        <StyledHeadingandFoto>
          {/* NAME INPUT */}
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
          {/* PHOTO INPUT -not required- in this US not save. Upload Fotos will be add in the Future */}
          <StyledPhotoLabel htmlFor="photo">
            <StyledInputPhoto
              type="file"
              id="photo"
              name="photo"
              defaultValue={defaultData?.photo}
            />
          </StyledPhotoLabel>
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

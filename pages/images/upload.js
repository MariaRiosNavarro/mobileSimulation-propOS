import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Button from "../../components/Button";
import Link from "next/link";
import { backSVG } from "../../components/assets/contactsSVG";
import Navigation from "../../components/Navigation";
import { StyledCircularContainer } from "../../components/Layout/index";
import { ThemeContext } from "../_app";
import { useContext } from "react";

const Form = styled.form`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledInput = styled.input`
  width: auto;
  height: 2rem;
  background-color: transparent;
  padding: 0.3rem;
  border-radius: 3px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  width: 20rem;
  padding: 1rem;
  outline: none;
  &:hover {
    border: 2px solid var(--hover-color);
  }
`;
const StyledHeading = styled.h4`
  padding: 0;
  text-align: center;
  font-weight: bold;
  font-size: large;
`;
const StyledSubHeading = styled.h5`
  text-align: center;
  margin-bottom: 2rem;
  padding: 0;
`;

const StyledHeadingContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export default function PhotoUploadForm() {
  const { mutate } = useSWR("/api/images/");
  const [uploadStatus, setUploadStatus] = useState(false);
  const [error, setError] = useState(undefined);
  const { theme, customColor } = useContext(ThemeContext);

  async function handleSubmitImage(event) {
    event.preventDefault();
    setUploadStatus("Uploading...");
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/images/upload", {
        method: "post",
        body: formData,
      });
      if (response.status === 201) {
        mutate();
        setUploadStatus("Upload complete!");
      }
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <StyledHeadingContainer>
        <StyledCircularContainer theme={theme} customColor={customColor}>
          <Link href={"/images"}>{backSVG}</Link>
        </StyledCircularContainer>
        <StyledHeading>Galerie</StyledHeading>
      </StyledHeadingContainer>
      <StyledSubHeading>Fotos Hochladen</StyledSubHeading>
      <Form onSubmit={handleSubmitImage}>
        <StyledLabel htmlFor="photoUpload">
          Auswählen
          <StyledInput type="file" name="file" id="photoUpload" />
        </StyledLabel>
        <Button type="submit" name="Fotos Hochladen" />
        <p>{uploadStatus}</p>
        {error && <p>{error.message}</p>}
      </Form>
      <Navigation />
    </>
  );
}

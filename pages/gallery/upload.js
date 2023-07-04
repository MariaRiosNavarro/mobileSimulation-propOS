import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

export default function PhotoUploadForm() {
  const { mutate } = useSWR("/api/images/");
  const [uploadStatus, setUploadStatus] = useState(false);
  const [error, setError] = useState(undefined);

  async function submitImage(event) {
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
      <h2>Image Upload</h2>
      <Form onSubmit={submitImage}>
        <input type="file" name="file" />
        <StyledButton type="submit">Upload</StyledButton>
        <p>{uploadStatus}</p>
        {error && <p>{error.message}</p>}
      </Form>
    </>
  );
}
const Form = styled.form`
  margin: 2rem auto;
`;
const StyledButton = styled.button`
  background-color: green;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
  color: white;
`;

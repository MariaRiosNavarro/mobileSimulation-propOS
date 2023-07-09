import styled from "styled-components";
import { useState } from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";

import useSWR from "swr";

const StyledSuccessMessage = styled.h5`
  text-align: center;
  background-color: green;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  width: 82%;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const PageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//----------------------------------------------- FUNCTION------------HERE

export default function CreateContact() {
  const [showSuccessMessageState, setShowSuccessMessageState] = useState(false);
  const { mutate, data } = useSWR("/api/contacts");

  async function addContact(newContact) {
    const response = await fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    });
    if (response.ok) {
      mutate();
      setShowSuccessMessageState(true);
      setTimeout(() => {
        setShowSuccessMessageState(false);
      }, 2000);
    }
  }

  return (
    <PageContainer>
      <ContactForm onSubmit={addContact} formName="add-contact" />
      {showSuccessMessageState && (
        <StyledSuccessMessage>Kontakte gespeichert</StyledSuccessMessage>
      )}
      <Navigation />
    </PageContainer>
  );
}

import styled from "styled-components";
import { useState } from "react";
import { backSVG } from "../components/assets/contactsSVG";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Form from "../components/Form";
import {
  StyledAppBodyContainer,
  StyledBackLink,
} from "../components/components.style";
import useSWR from "swr";

const StyledSuccessMessage = styled.h5`
  text-align: center;
  background-color: green;
  padding: 1rem;
  margin: 4rem;
  border-radius: 8px;
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
    <StyledAppBodyContainer>
      
      <Form onSubmit={addContact} formName={"add-contact"} />
      {showSuccessMessageState && (
        <StyledSuccessMessage>Kontakte gespeichert</StyledSuccessMessage>
      )}
      <Navigation />
    </StyledAppBodyContainer>
  );
}

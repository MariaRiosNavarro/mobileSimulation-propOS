import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button";

const StyledBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const StyledSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--primary-color);
  padding: 0.3rem;
  border-radius: 8px;
`;
const StyledSectionHeading = styled.h4`
  text-align: center;
  margin-top: 0.3rem;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledLabel = styled.label`
  font-weight: 500;
  color: darkgray;
`;
const StyledInput = styled.input`
  border-radius: 4px;
  border: none;
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  width: 10rem;
  margin-top: 1rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  padding: 0.5rem;

  &:hover {
    background-color: var(--hover-color);
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [registrationData, setRegistrationData] = useState({
    registrationEmail: "",
    registrationEmailConfirmation: "",
    registrationPassword: "",
  });

  function handleLoginSubmit(event) {
    event.preventDefault();
    router.push(`/home`);
  }
  function handleRegistrationSubmit(event) {
    event.preventDefault();
    router.push(`/home`);
  }

  return (
    <>
      <StyledBigContainer>
        <StyledSectionContainer>
          <StyledSectionHeading>Einloggen</StyledSectionHeading>
          <StyledForm onSubmit={handleLoginSubmit}>
            <StyledLabel htmlFor="loginEmail">Email</StyledLabel>
            <StyledInput
              type="email"
              id="loginEmail"
              name="loginEmail"
            ></StyledInput>
            <StyledLabel htmlFor="loginPassword">Password</StyledLabel>
            <StyledInput
              type="password"
              id="loginPassword"
              name="loginPassword"
            ></StyledInput>
            <StyledButton type="submit">Einloggen</StyledButton>
          </StyledForm>
        </StyledSectionContainer>
        <StyledSectionContainer>
          <StyledSectionHeading>Registrieren</StyledSectionHeading>
          <StyledForm onSubmit={handleRegistrationSubmit}>
            <StyledLabel htmlFor="registrationEmail">Email</StyledLabel>
            <StyledInput
              type="email"
              id="registrationEmail"
              name="registrationEmail"
            ></StyledInput>
            <StyledLabel htmlFor="registrationEmailConfirmation">
              Email bestätigen
            </StyledLabel>
            <StyledInput
              type="email"
              id="registrationEmailConfirmation"
              name="registrationEmailConfirmation"
            ></StyledInput>
            <StyledLabel htmlFor="registrationPassword">Password</StyledLabel>
            <StyledInput
              type="password"
              id="registrationPassword"
              name="registrationPassword"
            ></StyledInput>
            <StyledButton type="submit">Speichern</StyledButton>
          </StyledForm>
        </StyledSectionContainer>
      </StyledBigContainer>
    </>
  );
}

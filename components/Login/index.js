import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button";

const StyledBigContainer = styled.div``;
const StyledSectionContainer = styled.div``;
const StyledSectionHeading = styled.h4``;
const StyledForm = styled.form``;
const StyledLabel = styled.label``;
const StyledInput = styled.input``;

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
          <StyledForm>
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
            <Button>Einloggen</Button>
          </StyledForm>
        </StyledSectionContainer>
        <StyledSectionContainer>
          <StyledSectionHeading>Registrieren</StyledSectionHeading>
          <StyledForm>
            <StyledLabel htmlFor="registrationEmail">Email</StyledLabel>
            <StyledInput
              type="email"
              id="registrationEmail"
              name="registrationEmail"
            ></StyledInput>
            <StyledLabel htmlFor="registrationEmailConfirmation"></StyledLabel>
            <StyledInput
              type="email"
              id="registrationEmailConfirmation"
              name="registrationEmailConfirmation"
            ></StyledInput>
            <StyledLabel htmlFor="registrationPassword"></StyledLabel>
            <StyledInput
              type="password"
              id="registrationPassword"
              name="registrationPassword"
            ></StyledInput>
            <Button>Speichern</Button>
          </StyledForm>
        </StyledSectionContainer>
      </StyledBigContainer>
    </>
  );
}

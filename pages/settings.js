import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const StyledBiGlHeading = styled.h3``;
const StyledSmallHeading = styled.h5``;
const StyledButtonContainer = styled.div``;
const StyledButton = styled.button``;
const StyledLabel = styled.label``;

export default function SettingsPage() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange(selectedTheme) {}

  return (
    <>
      <StyledBiGlHeading>Einstellungen</StyledBiGlHeading>
      <StyledSmallHeading>Profil auswählen:</StyledSmallHeading>
      <StyledButtonContainer>
        <StyledLabel>
          Hell
          <StyledButton onClick={() => handleThemeChange("light")} />
        </StyledLabel>
      </StyledButtonContainer>
      <StyledButtonContainer>
        <StyledLabel>
          <StyledButton onClick={() => handleThemeChange("dark")} />
        </StyledLabel>
      </StyledButtonContainer>
      <Navigation />
    </>
  );
}

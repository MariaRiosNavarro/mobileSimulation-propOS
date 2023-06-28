//i will use useContext and ThemeContext in _app and Layout to handle the apparence change of the APP
import { useContext } from "react";
import { ThemeContext } from "../pages/_app";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import Layout from "../components/Layout";

const StyledBiGlHeading = styled.h3``;
const StyledSmallHeading = styled.h5``;
const StyledButtonContainer = styled.div``;
const StyledButton = styled.button``;
const StyledLabel = styled.label``;

export default function SettingsPage() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange(selectedTheme) {
    setTheme(selectedTheme);
  }

  return (
    <>
      <StyledBiGlHeading>Einstellungen</StyledBiGlHeading>
      <StyledSmallHeading>Profil auswählen:</StyledSmallHeading>
      <StyledButtonContainer>
        <StyledLabel>
          Hell
          <StyledButton
            onClick={() => handleThemeChange("light")}
            disabled={theme === "light"}
          />
          {theme === "light" ? "Aktiviert" : "Aktivieren"}
        </StyledLabel>
      </StyledButtonContainer>
      <StyledButtonContainer>
        <StyledLabel>
          <StyledButton
            onClick={() => handleThemeChange("dark")}
            disabled={theme === "dark"}
          />
          {theme === "dark" ? "Aktiviert" : "Aktivieren"}
        </StyledLabel>
      </StyledButtonContainer>
      <Navigation />
    </>
  );
}

//i will use useContext and ThemeContext in _app and Layout to handle the apparence change of the APP
import { useContext } from "react";
import { ThemeContext } from "../pages/_app";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import Layout from "../components/Layout";
import { StyledAppBodyContainer } from "../components/components.style";
import AppsHeader from "../components/Appsheader";

const StyledSmallHeading = styled.h5`
  text-align: center;
  font-weight: 800;
  padding-bottom: 1rem;
`;
const StyledThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  margin-top: 0.8rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  width: auto;
  &:hover {
    background-color: var(--hover-color);
  }
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

//

const StyledPopUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  align-items: 0;
  gap: 0.2rem;
`;

const StyledLitlePopUpHeading = styled.h5`
  margin: 0;
  padding: 0;
`;

const StyledColorInput = styled.input``;

export default function SettingsPage() {
  const { theme, setTheme, customColor, setCustomColor } =
    useContext(ThemeContext);

  function handleThemeChange(selectedTheme) {
    setTheme(selectedTheme);
  }

  function handleCustomColorChange(event) {
    const color = event.target.value;
    setCustomColor(color);
  }

  return (
    <>
      <StyledAppBodyContainer>
        <AppsHeader heading="Einstellungen" />

        <StyledSmallHeading>Profil auswählen:</StyledSmallHeading>
        <StyledThemeContainer>
          <StyledButtonContainer>
            <StyledLabel>
              Hell
              <StyledButton
                onClick={() => handleThemeChange("light")}
                disabled={theme === "light"}
              >
                {theme === "light" ? "Aktiviert" : "Aktivieren"}
              </StyledButton>
            </StyledLabel>
          </StyledButtonContainer>
          <StyledButtonContainer>
            <StyledLabel>
              Dunkel
              <StyledButton
                onClick={() => handleThemeChange("dark")}
                disabled={theme === "dark"}
              >
                {theme === "dark" ? "Aktiviert" : "Aktivieren"}
              </StyledButton>
            </StyledLabel>
          </StyledButtonContainer>
          <StyledButtonContainer>
            <StyledLabel>
              Personalisieren
              {theme === "custom" && (
                <StyledPopUp>
                  <StyledLitlePopUpHeading>
                    Farbe auswählen:
                  </StyledLitlePopUpHeading>
                  <StyledColorInput
                    type="color"
                    value={customColor}
                    onChange={handleCustomColorChange}
                  />
                </StyledPopUp>
              )}
              <StyledButton
                onClick={() => handleThemeChange("custom")}
                disabled={theme === "custom"}
              >
                {theme === "custom" ? "Aktiviert" : "Aktivieren"}
              </StyledButton>
            </StyledLabel>
          </StyledButtonContainer>
        </StyledThemeContainer>
        <Navigation selected={"settings"} />
      </StyledAppBodyContainer>
    </>
  );
}

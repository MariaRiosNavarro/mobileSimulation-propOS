import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../pages/_app";

//I find a ComplementaryColor Function and SecundaryColor functions to change colors,
//so that i can use dynamical to change the apparence dynamical in theme Dark and Custom,
//only with one color
import {
  getComplementaryColor,
  getSecondaryColor,
} from "./changeColorFunctions";

//This will be the general container that will give the style to the app,
// and through it we will be able to change its appearance.
// I'm going to take this container to the _app,
// so that each page rendered will have these styles

const StyledAplicationContainer = styled.div`
  height: 100vh;
  /* dynamically change the background according to the chosen thema. */
  background-color: ${(props) => {
    if (props.theme === "light") {
      return "var(----lightBG)";
    } else if (props.theme === "dark") {
      return "var(--darkBG)";
    } else if (props.theme === "custom") {
      return props.customColor;
    } else {
      return "var(----lightBG)";
    }
  }};
  /* dynamically change the color according to the chosen thema. */
  color: ${(props) => {
    if (props.theme === "light") {
      return "black";
    } else if (props.theme === "dark") {
      const complementaryColor = getComplementaryColor("#192559");
      return complementaryColor;
    } else if (props.theme === "custom") {
      const complementaryColor = getComplementaryColor(props.customColor);
      return complementaryColor;
    } else {
      return "black";
    }
  }};
`;

//Styles for the APPS at Home and Navigation that we can change with ours theme

export const StyledSvgContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  background-color: ${(props) => {
    if (props.disabled && props.theme === "light") {
      return "var(--lightAPPDisabled)";
    } else if (props.disabled && props.theme === "dark") {
      return "var(--darkAPPDisabled)";
    } else if (props.selected && props.theme === "light") {
      return "var(--lightAPPSelected)";
    } else if (!props.selected && props.theme === "light") {
      return "var(--lightAPPAktiv)";
    } else if (props.selected && props.theme === "dark") {
      return "var(--darkAPPSelected)";
    } else if (!props.selected && props.theme === "dark") {
      return "var(--darkAPPAktiv)";
    } else {
      return "transparent";
    }
  }};

  border: ${(props) => {
    if (props.theme === "custom") {
      return "1px solid orange";
    }
  }};

  outline: ${(props) => {
    if (props.theme === "custom") {
      return "1px solid #ffeacc";
    }
  }};

  color: ${(props) => {
    if (props.theme === "light") {
      return "black";
    } else if (props.theme === "dark") {
      return "#ffeacc";
    } else {
      return "black";
    }
  }};

  border-radius: 5px;
`;

//Apps headings in Home are in DarkMode Black, here will be change it:

export const StyledAppHeading = styled.h5`
  font-size: 10px;
  color: ${(props) => {
    if (props.theme === "light") {
      return "black";
    } else if (props.theme === "dark") {
      return "#ffeacc";
    } else {
      return "black";
    }
  }};
  border: ${(props) => {
    if (props.theme === "custom") {
      return "1px solid #ffeacc";
    } else {
      return "none";
    }
  }};
`;

//Little buttons in Contacts

export const StyledCircularContainer = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.theme === "light") {
      return "transparent";
    } else if (props.theme === "dark") {
      return "#a2afe5";
    } else if (props.theme === "custom") {
      return "#ffeacc";
    } else {
      return "transparent";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

//Badge at the Contacts are to dark in dark mode

export const StyledlitleTabContainer = styled.span`
  display: flex;
  font-size: 12px;
  font-weight: 900;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px 8px 0 0;
  color: black;
  font-weight: 400;
  padding: 0.7rem;
  margin: 0;
  background-color: ${(props) => {
    if (props.theme === "light") {
      return "transparent";
    } else if (props.theme === "dark") {
      return "#a2afe5";
    } else if (props.theme === "custom") {
      return "#ffeacc";
    } else {
      return "orange";
    }
  }};
`;

//placeholder in input name darkmode

export const StyledInputName = styled.input`
  border: none;
  background-color: ${(props) => {
    if (props.theme === "light") {
      return "transparent";
    } else if (props.theme === "dark") {
      return "#ffeacc";
    } else if (props.theme === "custom") {
      return "#ffeacc";
    } else {
      return "transparent";
    }
  }};
  border-bottom: 2px solid var(--primary-color);
  &::placeholder {
    margin-left: -0.5rem;
    text-align: center;
    font-weight: bolder;
    font-size: large;
    color: ${(props) => {
      if (props.theme === "light") {
        return "black";
      } else if (props.theme === "dark") {
        return "#ffeacc";
      } else {
        return "black";
      }
    }};
  }
`;

export default function Layout({ children }) {
  const { theme, customColor } = useContext(ThemeContext);
  return (
    <StyledAplicationContainer theme={theme} customColor={customColor}>
      {children}
    </StyledAplicationContainer>
  );
}

import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../pages/_app";

//This will be the general container that will give the style to the app,
// and through it we will be able to change its appearance.
// I'm going to take this container to the _app,
// so that each page rendered will have these styles

const StyledAplicationContainer = styled.div`
  height: 100vh;
  /* which will dynamically change the background according to the chosen thema. */
  background-color: ${(props) => {
    if (props.theme === "light") {
      return "#ffeacc";
    } else if (props.theme === "dark") {
      return "#192559";
    } else {
      return "transparent";
    }
  }};
  /* which will dynamically change the color according to the chosen thema. */
  color: ${(props) => {
    if (props.theme === "light") {
      return "black";
    } else if (props.theme === "dark") {
      return "#ffeacc";
    } else {
      return "black";
    }
  }};
`;

//Add more Styles that we can change with ours theme

export const StyledSvgContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  background-color: ${(props) => {
    if (props.disabled && props.theme === "light") {
      return "#bbaf98";
    } else if (props.disabled && props.theme === "dark") {
      return "#9f9fb4";
    } else if (props.selected && props.theme === "light") {
      return "#FFA41B";
    } else if (!props.selected && props.theme === "light") {
      return " #ffcb7d ";
    } else if (props.selected && props.theme === "dark") {
      return "#a2afe5";
    } else if (!props.selected && props.theme === "dark") {
      return "#6479d4";
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

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledAplicationContainer theme={theme}>
      {children}
    </StyledAplicationContainer>
  );
}

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

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledAplicationContainer theme={theme}>
      {children}
    </StyledAplicationContainer>
  );
}

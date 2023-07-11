import styled from "styled-components";
import { StyledSvgContainer } from "../Layout";
import { ThemeContext } from "../../pages/_app";
import { useContext } from "react";

const StyledSvg = styled.svg`
  color: black;
  height: 40px;
  width: 40px;
`;

export default function IconAppContainer({ StyledSvg, selected }) {
  const { theme, customColor } = useContext(ThemeContext);
  return (
    <>
      <StyledSvgContainer
        selected={selected}
        theme={theme}
        customColor={customColor}
      >
        {StyledSvg}
      </StyledSvgContainer>
    </>
  );
}

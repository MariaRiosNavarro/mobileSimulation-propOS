import Link from "next/link";
import styled from "styled-components";
import { callSVG, infoSVG, addSVG, messageSVG } from "../assets/contactsSVG";
import { StyledCircularContainer } from "../Layout";
import { ThemeContext } from "../../pages/_app";
import { useContext } from "react";

const StyledLink = styled(Link)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
`;

const StyledSpan = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSvg = styled.svg`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StyledLinkSvgContainer({
  id,
  StyledSvg,
  isFavorite,
  onClick,
}) {
  const { theme, customColor } = useContext(ThemeContext);

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  let href = "";
  if (StyledSvg === infoSVG) {
    href = `/contacts/${id}`;
  } else if (StyledSvg === callSVG) {
    href = `/contacts-call/${id}`;
  } else if (StyledSvg === addSVG) {
    href = `/create`;
  } else if (StyledSvg === messageSVG) {
    href = `/message-call/${id}`;
  } else {
    href = ``;
  }

  return (
    <StyledCircularContainer
      onClick={handleClick}
      isFavorite={isFavorite}
      theme={theme}
      customColor={customColor}
    >
      <StyledLink href={href}>
        <StyledSpan>{StyledSvg}</StyledSpan>
      </StyledLink>
    </StyledCircularContainer>
  );
}

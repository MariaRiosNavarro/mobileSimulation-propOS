import Link from "next/link";
import styled from "styled-components";
import { callSVG, infoSVG, addSVG } from "../assets/contactsSVG";

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

export const StyledCircularContainer = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: 1px solid black;
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
  } else {
    href = ``;
  }

  return (
    <StyledCircularContainer onClick={handleClick} isFavorite={isFavorite}>
      <StyledLink href={href}>
        <StyledSpan>{StyledSvg}</StyledSpan>
      </StyledLink>
    </StyledCircularContainer>
  );
}

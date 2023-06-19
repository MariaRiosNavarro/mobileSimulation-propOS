import Link from "next/link";
import styled from "styled-components";
import { infoSVG, callSVG } from "../assets/contactsSVG";

const StyledCircularContainer = styled.div`
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

export default function StyledLinkSvgContainer({ dynamicId }) {
  let href = "";
  if (svg === infoSVG) {
    href = `/contacts/${dynamicId}`;
  } else if (svg === callSVG) {
    href = `/contacts-call/${dynamicId}`;
  }

  return (
    <StyledCircularContainer>
      <Link href={href}>
        <StyledSpan>{svg}</StyledSpan>
      </Link>
    </StyledCircularContainer>
  );
}

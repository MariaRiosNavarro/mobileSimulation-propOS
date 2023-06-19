import Link from "next/link";
import styled from "styled-components";
import { infoSVG } from "../assets/contactsSVG";
import dynamic from "next/dynamic";

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
  let href = `/contacts/${dynamicId}`;

  return (
    <StyledCircularContainer>
      <Link href={href}>
        <StyledSpan>{infoSVG}</StyledSpan>
      </Link>
    </StyledCircularContainer>
  );
}

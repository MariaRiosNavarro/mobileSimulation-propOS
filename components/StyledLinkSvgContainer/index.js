import Link from "next/link";
import styled from "styled-components";
import { infoSVG } from "../assets/contactsSVG";

const StyledLink = styled(Link)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0.3rem;
  background-color: transparent;
`;

const StyledSpan = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StyledLinkSvgContainer({ id, svg }) {
  let href = "";
  if (svg === infoSVG) {
    href = `/contacts/${id}`;
  } else {
    href = `/contacts-call/${id}`;
  }

  return (
    <StyledLink href={href}>
      <StyledSpan>{svg}</StyledSpan>
    </StyledLink>
  );
}

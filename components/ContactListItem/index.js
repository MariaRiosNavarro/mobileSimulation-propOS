import styled from "styled-components";
import { StyledHR } from "../StyledHR";
import StyledLinkSvgContainer from "../StyledLinkSvgContainer";
import { infoSVG, callSVG } from "../assets/contactsSVG";
import { StyledImagePlaceholder } from "../components.style";
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledName = styled.p`
  font-weight: bold;
`;

const StyledBadgetContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

export default function ContactListItem({ name, id }) {
  return (
    <li>
      <StyledContainer>
        <StyledImagePlaceholder />
        <StyledName>{name}</StyledName>
        <StyledBadgetContainer>
          <StyledLinkSvgContainer svg={callSVG} id={id} />
          <StyledLinkSvgContainer svg={infoSVG} id={id} />
        </StyledBadgetContainer>
      </StyledContainer>
      <StyledHR />
    </li>
  );
}

import styled from "styled-components";
import { StyledHR } from "../StyledHR";
import StyledLinkSvgContainer from "../StyledLinkSvgContainer";
import { infoSVG, callSVG } from "../assets/contactsSVG";
import { StyledImagePlaceholder } from "../components.style";


const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const StyledName = styled.p`
  font-weight: bold;
`;

const StyledBadgetContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
`;

export default function ContactListItem({ name, id }) {
  return (
    <StyledListItem>
      <StyledContainer>
        <StyledImagePlaceholder />
        <StyledName>{name}</StyledName>
        <StyledBadgetContainer>
          <StyledLinkSvgContainer svg={callSVG} id={id} />
          <StyledLinkSvgContainer svg={infoSVG} id={id} />
        </StyledBadgetContainer>
      </StyledContainer>
      <StyledHR />
    </StyledListItem>
  );
}

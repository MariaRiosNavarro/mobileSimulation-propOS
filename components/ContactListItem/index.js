import styled from "styled-components";
import StyledLinkSvgContainer from "../StyledLinkSvgContainer";
import { infoSVG, callSVG, starSVG, starFillSVG } from "../assets/contactsSVG";
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
  border-bottom: 1px solid lightgray;
`;

export default function ContactListItem({
  name,
  id,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <StyledListItem>
      <StyledContainer>
        <StyledImagePlaceholder />
        <StyledName>{name}</StyledName>
        <StyledBadgetContainer>
          <StyledLinkSvgContainer StyledSvg={callSVG} id={id} />
          <StyledLinkSvgContainer
            StyledSvg={isFavorite ? starFillSVG : starSVG}
            isFavorite={isFavorite}
            onClick={() => toggleFavorite(id)}
          />
          <StyledLinkSvgContainer StyledSvg={infoSVG} id={id} />
        </StyledBadgetContainer>
      </StyledContainer>
    </StyledListItem>
  );
}

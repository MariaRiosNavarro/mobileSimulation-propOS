import styled from "styled-components";
import LinkSvgContainer from "../LinkSvgContainer";
import { infoSVG, callSVG, messageSVG } from "../assets/contactsSVG";
import Image from "next/image";

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

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

export default function ContactListItem({
  name,
  id,
  isFavorite,
  toggleFavorite,
  isFavoriteStyledSvg,
  src,
}) {
  return (
    <StyledListItem>
      <StyledContainer>
        <StyledImage src={src} alt="Contact Photo" width={34} height={34} />
        <StyledName>{name}</StyledName>
        <StyledBadgetContainer>
          <LinkSvgContainer StyledSvg={callSVG} id={id} />
          <LinkSvgContainer
            StyledSvg={isFavoriteStyledSvg}
            isFavorite={isFavorite}
            onClick={() => toggleFavorite(id)}
          />
          <LinkSvgContainer StyledSvg={messageSVG} id={id} />
          <LinkSvgContainer StyledSvg={infoSVG} id={id} />
        </StyledBadgetContainer>
      </StyledContainer>
    </StyledListItem>
  );
}

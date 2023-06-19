import styled from "styled-components";
import Image from "next/image";
import { StyledHR } from "../StyledHR";
import StyledLinkSvgContainer from "../StyledLinkSvgContainer";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  margin: 1rem;
  object-fit: cover;
  border-radius: 50%;
  width: 34px;
  height: 34px;
`;

const StyledName = styled.p`
  font-weight: bold;
`;

const StyledBadgetContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

export default function ContactListItem({ name, photo, dynamicId }) {
  return (
    <li>
      <StyledContainer>
        <StyledImage
          src={photo}
          width={34}
          height={34}
          alt={`Photo of ${name}`}
        ></StyledImage>
        <StyledName>{name}</StyledName>
        <StyledBadgetContainer>
          <StyledLinkSvgContainer
            dynamicId={dynamicId}
          ></StyledLinkSvgContainer>
        </StyledBadgetContainer>
      </StyledContainer>
      <StyledHR />
    </li>
  );
}

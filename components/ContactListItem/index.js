import styled from "styled-components";
import { StyledHR } from "../StyledHR";
import StyledLinkSvgContainer from "../StyledLinkSvgContainer";
import { infoSVG, callSVG } from "../assets/contactsSVG";

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

export const GrayCirclePhotoPlaceholder = styled.div`
  margin: 1rem;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: gray;
`;

export default function ContactListItem({ name, dynamicId }) {
  return (
    <li>
      <StyledContainer>
        <GrayCirclePhotoPlaceholder/>
        <StyledName>{name}</StyledName>
        <StyledBadgetContainer>
          <StyledLinkSvgContainer
            svg={callSVG}
            dynamicId={dynamicId}
          ></StyledLinkSvgContainer>
          <StyledLinkSvgContainer
            svg={infoSVG}
            dynamicId={dynamicId}
          ></StyledLinkSvgContainer>
        </StyledBadgetContainer>
      </StyledContainer>
      <StyledHR />
    </li>
  );
}

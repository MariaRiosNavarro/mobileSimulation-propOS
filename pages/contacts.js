import Heading from "../components/Heading";
import styled from "styled-components";

import { addSVG } from "../components/assets/contactsSVG";
import Navigation from "../components/Navigation";
import StyledLinkSvgContainer from "../components/StyledLinkSvgContainer";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
// -----------------------------------STYLE

const BigStyledLinkSvgContainer = styled(StyledLinkSvgContainer)`
  height: 34px;
  width: 34px;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const StyledBodyContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const StyledContentContainer = styled.div``;

//This StyledMain removes the standard schrollin-bar above the navigation,
// making it not look like a mobile
// (no mobile has the bar above the navigation).
// Thanks Stack Overflow. Schrolling still works

const StyledMain = styled.main`
  height: 90vh;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

//----------------------------------------------- FUNCTION------------HERE

export default function Contacts() {
  return (
    <StyledBodyContainer>
      <StyledMain>
        <StyledHeader>
          <Heading>Kontakte</Heading>
          <BigStyledLinkSvgContainer StyledSvg={addSVG} />
        </StyledHeader>
        <StyledContentContainer>
          <ContactListWithFavorite />
        </StyledContentContainer>
      </StyledMain>
      <Navigation />
    </StyledBodyContainer>
  );
}

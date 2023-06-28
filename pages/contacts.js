// import Heading from "../components/Heading";
import styled from "styled-components";
import { StyledAppBodyContainer } from "../components/components.style";
import { addSVG } from "../components/assets/contactsSVG";
import Navigation from "../components/Navigation";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
import AppsHeader from "../components/Appsheader";

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
    <StyledAppBodyContainer>
      <StyledMain>
        <AppsHeader StyledSvg={addSVG} heading="Kontakte" />
        <StyledContentContainer>
          <ContactListWithFavorite />
        </StyledContentContainer>
      </StyledMain>
      <Navigation />
    </StyledAppBodyContainer>
  );
}

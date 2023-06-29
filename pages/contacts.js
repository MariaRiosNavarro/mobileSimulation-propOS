// import Heading from "../components/Heading";
import styled from "styled-components";
import {
  StyledAppBodyContainer,
  StyledMainNoSchrollbar,
} from "../components/components.style";
import { addSVG } from "../components/assets/contactsSVG";
import Navigation from "../components/Navigation";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
import AppsHeader from "../components/Appsheader";

const StyledContentContainer = styled.div``;

//----------------------------------------------- FUNCTION------------HERE

export default function Contacts() {
  return (
    <StyledAppBodyContainer>
      <StyledMainNoSchrollbar>
        <AppsHeader StyledSvg={addSVG} heading="Kontakte" />
        <StyledContentContainer>
          <ContactListWithFavorite />
        </StyledContentContainer>
      </StyledMainNoSchrollbar>
      <Navigation />
    </StyledAppBodyContainer>
  );
}

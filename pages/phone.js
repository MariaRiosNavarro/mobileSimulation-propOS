import styled from "styled-components";
import {
  StyledAppBodyContainer,
  StyledMainNoSchrollbar,
} from "../components/components.style";
import Navigation from "../components/Navigation";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
import AppsHeader from "../components/Appsheader";

const StyledContentContainer = styled.div``;

//----------------------------------------------- FUNCTION------------HERE

export default function PhoneApp() {
  return (
    <StyledAppBodyContainer>
      <StyledMainNoSchrollbar>
        <AppsHeader heading="Telefon" />
        <StyledContentContainer>
          <ContactListWithFavorite />
        </StyledContentContainer>
      </StyledMainNoSchrollbar>
      <Navigation selected={"phone"} />
    </StyledAppBodyContainer>
  );
}

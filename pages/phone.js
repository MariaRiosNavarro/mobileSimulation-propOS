import styled from "styled-components";
import {
  AppContainer,
  NoSchrollbarContainer,
} from "../components/components.style";
import Navigation from "../components/Navigation";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
import AppsHeader from "../components/Appsheader";

const StyledContentContainer = styled.div``;

//----------------------------------------------- FUNCTION------------HERE

export default function PhoneApp() {
  return (
    <AppContainer>
      <NoSchrollbarContainer>
        <AppsHeader heading="Telefon" />
        <StyledContentContainer>
          <ContactListWithFavorite />
        </StyledContentContainer>
      </NoSchrollbarContainer>
      <Navigation selected={"phone"} />
    </AppContainer>
  );
}

import styled from "styled-components";
import Navigation from "../components/Navigation";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
import {
  AppContainer,
  NoSchrollbarContainer,
} from "../components/components.style";
import AppsHeader from "../components/Appsheader";

const StyledContentContainer = styled.div``;

//----------------------------------------------- FUNCTION------------HERE

export default function MessageApp() {
  return (
    <AppContainer>
      <NoSchrollbarContainer>
        <AppsHeader heading="Nachrichten" />
        <StyledContentContainer>
          <ContactListWithFavorite />
        </StyledContentContainer>
      </NoSchrollbarContainer>
      <Navigation selected={"message"} />
    </AppContainer>
  );
}

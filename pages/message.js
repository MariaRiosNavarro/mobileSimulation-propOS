import styled from "styled-components";
import Navigation from "../components/Navigation";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
import {
  StyledAppBodyContainer,
  StyledMainNoSchrollbar,
} from "../components/components.style";
import AppsHeader from "../components/Appsheader";

const StyledContentContainer = styled.div``;

//----------------------------------------------- FUNCTION------------HERE

export default function MessageApp() {
  return (
    <StyledAppBodyContainer>
      <StyledMainNoSchrollbar>
        <AppsHeader heading="Nachrichten" />
        <StyledContentContainer>
          <ContactListWithFavorite />
        </StyledContentContainer>
      </StyledMainNoSchrollbar>
      <Navigation selected={"message"} />
    </StyledAppBodyContainer>
  );
}

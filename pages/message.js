import Navigation from "../components/Navigation";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
import {
  AppContainer,
  NoSchrollbarContainer,
} from "../components/components.style";
import AppsHeader from "../components/Appsheader";

//-----------------------------------------------FUNCTION

export default function MessageApp() {
  return (
    <AppContainer>
      <NoSchrollbarContainer>
        <AppsHeader heading="Nachrichten" />
        <ContactListWithFavorite />
      </NoSchrollbarContainer>
      <Navigation selected={"message"} />
    </AppContainer>
  );
}


import {
  AppContainer,
  NoSchrollbarContainer,
} from "../components/components.style";
import Navigation from "../components/Navigation";
import ContactListWithFavorite from "../components/ContactListWithFavorite";
import AppsHeader from "../components/Appsheader";

//-----------------------------------------------FUNCTION

export default function PhoneApp() {
  return (
    <AppContainer>
      <NoSchrollbarContainer>
        <AppsHeader heading="Telefon" />

        <ContactListWithFavorite />
      </NoSchrollbarContainer>
      <Navigation selected={"phone"} />
    </AppContainer>
  );
}

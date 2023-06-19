import Heading from "../components/Heading";
import ContactListItem from "../components/ContactListItem";
import styled from "styled-components";
import { StyledHR } from "../components/StyledHR";
import { contacts } from "../lib/db";

const StyledList = styled.ul`
  list-style-type: style none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;

export default function Home() {
  return (
    <main>
      <Heading>Kontakte</Heading>
      <StyledList>
        <StyledHR />
        {/* Map the contacts to render for one Contact, one Contactlistitem  */}
        {contacts.map((contact) => {
          return (
            <ContactListItem
              dynamicId={contact.id}
              key={contact.id}
              name={contact.name}
              photo={contact.photo}
            />
          );
        })}
      </StyledList>
    </main>
  );
}

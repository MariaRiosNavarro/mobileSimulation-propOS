import Heading from "../components/Heading";
import ContactListItem from "../components/ContactListItem";
import styled from "styled-components";
import { StyledHR } from "../components/StyledHR";
import { contacts } from "../lib/db";
import { addSVG } from "../components/assets/contactsSVG";
import Link from "next/link";

const StyledList = styled.ul`
  list-style-type: style none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledAddSVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  margin: 1.5rem;
`;

let href = "/";

export default function Home() {
  return (
    <main>
      <StyledHeader>
        <Heading>Kontakte</Heading>
        <Link href={href}>
          <StyledAddSVGContainer>{addSVG}</StyledAddSVGContainer>
        </Link>
      </StyledHeader>

      <StyledList>
        <StyledHR />
        {/* Map the contacts to render for one Contact, one Contactlistitem  */}
        {contacts.map((contact) => {
          return (
            <ContactListItem
              key={contact.id}
              dynamicId={contact.id}
              name={contact.name}
              photo={contact.photo}
            />
          );
        })}
      </StyledList>
    </main>
  );
}

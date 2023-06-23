import Heading from "../components/Heading";
import ContactListItem from "../components/ContactListItem";
import styled from "styled-components";
import { StyledHR } from "../components/StyledHR";
import { addSVG } from "../components/assets/contactsSVG";
import Link from "next/link";
import useSWR from "swr";
import Navigation from "../components/Navigation";

// -----------------------------------STYLE
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

const StyledBodyContainer = styled.body`
  position: relative;
  min-height: 100vh;
`;

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
`

//----------------------------------------------- FUNCTION------------HERE

let href = "/create";

export default function Contacts() {
  const { data, isLoading } = useSWR("/api/contacts");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Keine Daten Gefunden</h1>;
  }

  return (
    <StyledBodyContainer>
      <StyledMain>
        <StyledHeader>
          <Heading>Kontakte</Heading>
          <Link href={href}>
            <StyledAddSVGContainer>{addSVG}</StyledAddSVGContainer>
          </Link>
        </StyledHeader>

        <StyledList>
          <StyledHR />
          {/* Map the contacts to render for one Contact, one Contactlistitem  */}
          {data.map((contact) => {
            return (
              <ContactListItem
                key={contact._id}
                id={contact._id}
                name={contact.name}
              />
            );
          })}
        </StyledList>
      </StyledMain>
      <Navigation />
    </StyledBodyContainer>
  );
}

import ContactListItem from "../ContactListItem";
import styled from "styled-components";
import useSWR from "swr";
import { StyledHR } from "../StyledHR";
import { useState } from "react";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;

export default function ContactListWithFavorite() {
  const { data, isLoading } = useSWR("./api/contacts", { fallbackData: [] });
  const [favoriteContactState, setFavoriteContactState] = useState([]);
  const [filter, setFilter] = useState("all");

  if (isLoading) {
    return <div></div>;
  }

  if (!data) {
    return <h1>Keine Daten Gefunden</h1>;
  }

  function handleToggleFavoriten(id) {
    if (favoriteContactState.includes(id)) {
      setFavoriteContactState(favoriteContactState.filter((_id) => _id !== id));
    } else {
      setFavoriteContactState([...favoriteContactState, id]);
    }
  }

  const favoriteContacts = data.filter((contact) =>
    favoriteContactState.includes(contact._id)
  );
  const filteredContacts = filter === "favorites" ? favoriteContacts : data;

  return (
    <>
      <StyledHR />
      <StyledList>
        {/* Map the contacts to render for one Contact, one Contactlistitem  */}
        {filteredContacts.map((contact) => {
          return (
            <ContactListItem
              key={contact._id}
              id={contact._id}
              name={contact.name}
              isFavorite={favoriteContactState.includes(contact._id)}
              toggleFavorite={handleToggleFavoriten}
            />
          );
        })}
      </StyledList>
    </>
  );
}

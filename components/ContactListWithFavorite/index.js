import ContactListItem from "../ContactListItem";
import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";
import Tab from "../Tab";
import Tabs from "../Tabs";
import Badge from "../Badge";

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

  function handleShowFavorite() {
    setFilter("favorites");
  }

  function handleShowALL() {
    setFilter("all");
  }

  const favoriteContacts = data.filter((contact) =>
    favoriteContactState.includes(contact._id)
  );
  const filteredContacts = filter === "favorites" ? favoriteContacts : data;

  const favoriteCount = favoriteContacts.length;

  return (
    <>
      <Tabs>
        <Tab onClick={handleShowALL} isActive={filter === "all"}>
          <Badge isActive={filter === "all"} badgeHeading="Kontakte">
            {data.length}
          </Badge>
        </Tab>
        <Tab onClick={handleShowFavorite} isActive={filter === "favorites"}>
          <Badge isActive={filter === "favorites"} badgeHeading="Favoriten">
            {favoriteCount}
          </Badge>
        </Tab>
      </Tabs>
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

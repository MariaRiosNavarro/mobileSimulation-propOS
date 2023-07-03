import ContactListItem from "../ContactListItem";
import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";
import Tab from "../Tab";
import Tabs from "../Tabs";
import Badge from "../Badge";
import { starSVG, starFillSVG } from "../assets/contactsSVG";
import { useEffect } from "react";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-top: 0;
`;

export default function ContactListWithFavorite() {
  const { data, isLoading, mutate } = useSWR("./api/contacts");
  const [favoriteContactState, setFavoriteContactState] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (data) {
      const initialFavoriteContacts = data.map((contact) => contact._id);
      setFavoriteContactState(initialFavoriteContacts);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data) {
    return <h1>Keine Daten Gefunden</h1>;
  }

  async function handleToggleFavoriten(id) {
    const updatedFavoriteContacts = [...favoriteContactState];
    if (updatedFavoriteContacts.includes(id)) {
      const index = updatedFavoriteContacts.indexOf(id);
      updatedFavoriteContacts.splice(index, 1);
    } else {
      updatedFavoriteContacts.push(id);
    }

    const contactToUpdate = data.find((contact) => contact._id === id);
    const updatedContact = {
      ...contactToUpdate,
      favorite: !contactToUpdate.favorite,
    };

    const response = await fetch(`/api/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    });

    if (response.ok) {
      mutate();
    }
  }
  function handleShowFavorite() {
    setFilter("favorites");
  }

  function handleShowALL() {
    setFilter("all");
  }

  const filteredContacts =
    filter === "favorites" ? data.filter((contact) => contact.favorite) : data;

  const favoriteCount = filteredContacts.length;

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
        {filteredContacts.map((contact) => {
          return (
            <ContactListItem
              key={contact._id}
              id={contact._id}
              name={contact.name}
              isFavorite={favoriteContactState.includes(contact._id)}
              toggleFavorite={handleToggleFavoriten}
              isFavoriteStyledSvg={contact.favorite ? starFillSVG : starSVG}
            />
          );
        })}
      </StyledList>
    </>
  );
}

import ContactListItem from "../ContactListItem";
import styled from "styled-components";
import useSWR from "swr";




const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`;




export default function ContactListWithFavorite(){

    const { data, isLoading } = useSWR("./api/contacts", { fallbackData: [] });

    if (isLoading) {
      return <div></div>;
    }
  
    if (!data) {
      return <h1>Keine Daten Gefunden</h1>;
    }
  return(        
  <StyledList>
   
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
  </StyledList>)

}
import styled from "styled-components";
import { useRouter } from "next/router";
import { backSVG, editSVG } from "../../../components/assets/contactsSVG";

import { StyledImagePlaceholder } from "../../../components/components.style";
import useSWR from "swr";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import {
  StyledHeadingandFoto,
  StyledFieldsContainer,
  StyledLoading,
} from "../../../components/components.style";

const StyledHeader = styled.div`
  margin: 0 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const StyledHeading = styled.h5`
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: bold;
  font-size: large;
`;

const StyledFieldPhoneNote = styled.p`
  margin: 0;
  padding: 0;
`;

const StyledInfo = styled.p`
  background-color: lightgray;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 400;
  margin: 0;
`;

const StyledLink = styled(Link)`
  height: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: var(--detail-color);
  font-weight: bolder;
  font-size: 12px;
  align-items: center;
`;

//----------------------------------------------- FUNCTION------------HERE
export default function ContactDetail() {
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  const { data: contact, isLoading, error } = useSWR(`/api/contacts/${id}`);

  if (isLoading) return <StyledLoading>Kontakt wird gesucht...</StyledLoading>;
  if (error) return <h2>Error...</h2>;

  return (
    <>
      <StyledHeader>
        <StyledLink href={"/contacts"}>{backSVG}</StyledLink>
        <StyledHeadingandFoto>
          <StyledHeading>{contact.name}</StyledHeading>
          <StyledImagePlaceholder />
        </StyledHeadingandFoto>
        <StyledLink href={`/contacts/${id}/edit`}>{editSVG}</StyledLink>
      </StyledHeader>
      
      <StyledFieldsContainer>
        <StyledFieldPhoneNote>Nummer:</StyledFieldPhoneNote>
        <StyledInfo>
          <strong>{contact.phone}</strong>
        </StyledInfo>
        <StyledFieldPhoneNote>Notizen:</StyledFieldPhoneNote>
        <StyledInfo>
          <strong>{contact.note}</strong>
        </StyledInfo>
      </StyledFieldsContainer>
      <Navigation />
    </>
  );
}

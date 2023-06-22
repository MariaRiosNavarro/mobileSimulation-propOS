import styled from "styled-components";
import { useRouter } from "next/router";
// import { contacts } from "../../../lib/db";
import { StyledHR } from "../../../components/StyledHR";
import { StyledImagePlaceholder } from "../../../components/ContactListItem";
import useSWR from "swr";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;

  align-items: center;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH3 = styled.h3`
  margin: 1rem 0 0 0;
  padding: 0;
`;

const StyledContainer = styled.div`
  margin: 2rem;
`;

const StyledInfo = styled.p`
  background-color: lightgray;
  padding: 1rem;
  border-radius: 8px;
`;
//----------------------------------------------- FUNCTION------------HERE
export default function ContactDetail() {
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  const { data: contact, isLoading, error } = useSWR(`/api/contacts/${id}`);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer>
          <StyledH3>{contact.name}</StyledH3>
          <StyledImagePlaceholder />
        </StyledHeaderContainer>
      </StyledHeader>
      <StyledHR />
      <StyledContainer>
        <p>
          <strong>Phone:</strong>
        </p>
        <StyledInfo>
          <strong>{contact.phone}</strong>
        </StyledInfo>
        <p>
          <strong>Notizen:</strong>
        </p>
        <StyledInfo>
          <strong>{contact.note}</strong>
        </StyledInfo>
      </StyledContainer>
    </>
  );
}

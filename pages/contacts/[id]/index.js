import styled from "styled-components";
import { useRouter } from "next/router";
import { backSVG } from "../../../components/assets/contactsSVG";
import { StyledHR } from "../../../components/StyledHR";
import { StyledImagePlaceholder } from "../../../components/ContactListItem";
import useSWR from "swr";
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10rem;
`;

const StyledHeading = styled.h3`
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

const StyledLink = styled(Link)`
  margin: 2rem;
  height: 1.5;
  color: gray;
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
        <StyledLink href={"/"}>{backSVG}</StyledLink>
        <StyledHeadingContainer>
          <StyledHeading>{contact.name}</StyledHeading>
          <StyledImagePlaceholder />
        </StyledHeadingContainer>
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

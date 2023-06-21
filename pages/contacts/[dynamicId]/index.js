import styled from "styled-components";
import { useRouter } from "next/router";
import { contacts } from "../../../lib/db";
import { StyledHR } from "../../../components/StyledHR";
import { GrayCirclePhotoPlaceholder } from "../../../components/ContactListItem";

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

export default function ContactDetail() {
  const router = useRouter();
  const { dynamicId } = router.query;

  const contact = contacts.find((contact) => contact.id === dynamicId);

  if (!contact) {
    return <p>Kontakte nicht gefunden</p>;
  }

  const { name, phone, note } = contact;

  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer>
          <StyledH3>{name}</StyledH3>
          <GrayCirclePhotoPlaceholder />
        </StyledHeaderContainer>
      </StyledHeader>
      <StyledHR />
      <StyledContainer>
        <p>
          <strong>Phone:</strong>
        </p>
        <StyledInfo>
          <strong>{phone}</strong>
        </StyledInfo>
        <p>
          <strong>Notizen:</strong>
        </p>
        <StyledInfo>
          <strong>{note}</strong>
        </StyledInfo>
      </StyledContainer>
    </>
  );
}

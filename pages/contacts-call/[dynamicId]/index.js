import styled from "styled-components";
import { callEndSVG } from "../../../components/assets/contactsSVG";
import { GrayCirclePhotoPlaceholder } from "../../../components/ContactListItem";
import { contacts } from "../../../lib/db";
import { useRouter } from "next/router";

const StyledCallContainer = styled.div`
  background-color: gray;
  margin: 0;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StyledBigHeader = styled.h2`
  display: inline;
  font-size: x-large;
  font-weight: bold;
  position: absolute;
  top: 6rem;
  margin: 0;
`;

const StyledRedButton = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background-color: red;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBigPlaceholder = styled(GrayCirclePhotoPlaceholder)`
  width: 9rem;
  height: 9rem;
  margin: 0;
`;

export default function CallContactsDetail() {
  const router = useRouter();
  const { dynamicId } = router.query;
  const contact = contacts.find((contact) => contact.id === dynamicId);

  if (!contact) {
    return <p>Kontakte nicht gefunden</p>;
  }

  const { name, photo } = contact;

  return (
    <>
      <StyledCallContainer>
        <StyledBigHeader>{name}</StyledBigHeader>
        <StyledBigPlaceholder />
        <StyledRedButton>{callEndSVG}</StyledRedButton>
      </StyledCallContainer>
    </>
  );
}

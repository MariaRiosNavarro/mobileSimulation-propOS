import styled from "styled-components";
import { callEndSVG } from "../../../components/assets/contactsSVG";
import { StyledImage } from "../../../components/ContactListItem";
import { contacts } from "../../../lib/db";
import { useRouter } from "next/router";

const StyledCallContainer = styled.div`
  background-color: gray;
  margin: 0;
  height: 100%;
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

const StyledBigImage = styled(StyledImage)`
  width: 9rem;
  height: 9rem;
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

export default function CallContactsDetail() {
  const router = useRouter();
  const { dynamicId } = router.query;
  const contact = contacts.find((contact) => contact.id === dynamicId);

  if (!contact) {
    return <p>Kontakte nicht gefunden</p>;
  }
  const { name, photo } = contacts;

  return (
    <>
      <StyledCallContainer>
        <StyledBigHeader>{name}</StyledBigHeader>
        <StyledBigImage
          src={photo}
          width={100}
          height={100}
          alt={`Photo of ${name}`}
        />
        <StyledRedButton>{callEndSVG}</StyledRedButton>
      </StyledCallContainer>
    </>
  );
}

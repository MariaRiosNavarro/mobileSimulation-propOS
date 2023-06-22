import styled from "styled-components";
import { callEndSVG } from "../../../components/assets/contactsSVG";
import { StyledImagePlaceholder } from "../../../components/ContactListItem";

import { useRouter } from "next/router";
import useSWR from "swr";

//--------------------STYLE

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

const StyledButton = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  background-color: red;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBigImagePlaceholder = styled(StyledImagePlaceholder)`
  width: 9rem;
  height: 9rem;
  margin: 0;
`;

//----------------------------------------------- FUNCTION------------HERE

export default function CallContactsDetail() {
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  const {
    data: contact,
    isLoading,
    error,
  } = useSWR(`/api/contacts-call/${id}`);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  return (
    <>
      <StyledCallContainer>
        <StyledBigHeader>{contact.name}</StyledBigHeader>
        <StyledBigImagePlaceholder />
        <StyledButton>{callEndSVG}</StyledButton>
      </StyledCallContainer>
    </>
  );
}

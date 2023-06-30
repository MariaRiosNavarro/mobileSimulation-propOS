import useSWR from "swr";
import styled from "styled-components";
import { backSVG } from "../../../components/assets/contactsSVG";
import {
  StyledLoading,
  StyledAppBodyContainer,
} from "../../../components/components.style";
import AppsHeader from "../../../components/Appsheader";
import { useRouter } from "next/router";
import Link from "next/link";
import { StyledImagePlaceholder } from "../../../components/components.style";
import MyKeyboard from "../../../components/MyKeyboard";

const StyledAppHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContactHeaderContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.h5`
  font-size: small;
  font-weight: bold;
`;
const StyledLink = styled(Link)`
  margin: 0;
  padding: 0;
`;

const StyledKeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid black;
  /* position: relative;
  bottom: 2rem; */
`;

//----------------------------------------------- FUNCTION------------HERE

export default function MessageDetail() {
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  const {
    data: contact,
    isLoading,
    error,
  } = useSWR(`/api/contacts-message/${id}`);

  if (isLoading)
    return <StyledLoading>Verbindung wird hergestellt...</StyledLoading>;
  if (error) return <h2>Error...</h2>;

  return (
    <>
      <StyledAppBodyContainer>
        <StyledAppHeaderContainer>
          <StyledLink href={"/contacts"}>{backSVG}</StyledLink>
          <AppsHeader heading="Nachrichten" />
        </StyledAppHeaderContainer>
        <StyledContactHeaderContainer>
          <StyledHeader>{contact.name}</StyledHeader>
          <StyledImagePlaceholder />
        </StyledContactHeaderContainer>
        <StyledKeyboardContainer>
          <MyKeyboard />
        </StyledKeyboardContainer>
      </StyledAppBodyContainer>
    </>
  );
}

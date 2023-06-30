import Link from "next/link";
import useSWR from "swr";
import styled from "styled-components";
import {
  StyledLoading,
  StyledAppBodyContainer,
} from "../../../components/components.style";
import AppsHeader from "../../../components/Appsheader";
import { useRouter } from "next/router";

const StyledHeader = styled.h5`
  font-size: small;
  font-weight: bold;
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
        <AppsHeader>Nachrichten</AppsHeader>
        <StyledHeader>{contact.name}</StyledHeader>
      </StyledAppBodyContainer>
    </>
  );
}

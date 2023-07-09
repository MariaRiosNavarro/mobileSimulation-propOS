import useSWR from "swr";
import styled from "styled-components";
import { backSVG } from "../../../components/assets/contactsSVG";
import { StyledLoading } from "../../../components/components.style";
import AppsHeader from "../../../components/Appsheader";
import { useRouter } from "next/router";
import Link from "next/link";
import MyKeyboard from "../../../components/MyKeyboard";
import Navigation from "../../../components/Navigation";
import Image from "next/image";
import contactplaceholder from "../../../components/assets/contactplaceholder.jpg";
import { PageContainer } from "../../../components/components.style";


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
  position: absolute;
  bottom: 5rem;
  width: 100%;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
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
      <PageContainer>
        <StyledAppHeaderContainer>
          <StyledLink href={"/contacts"}>{backSVG}</StyledLink>
          <AppsHeader heading="Nachrichten" />
        </StyledAppHeaderContainer>
        <StyledContactHeaderContainer>
          <StyledHeader>{contact.name}</StyledHeader>
          <StyledImage
            src={contact.photo || contactplaceholder}
            alt="Contact Photo"
            width={34}
            height={34}
          />
        </StyledContactHeaderContainer>
        <StyledKeyboardContainer>
          <MyKeyboard />
        </StyledKeyboardContainer>
        <Navigation selected={"message"} />
      </PageContainer>
    </>
  );
}

import styled from "styled-components";
import { useRouter } from "next/router";
import { backSVG, editSVG } from "../../../components/assets/contactsSVG";
import {
  StyledInfo,
  StyledCircularContainer,
} from "../../../components/Layout";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import {
  StyledHeadingandFoto,
  StyledFieldsContainer,
  StyledLoading,
} from "../../../components/components.style";
import { ThemeContext } from "../../_app";
import { useContext } from "react";
import contactplaceholder from "../../../components/assets/contactplaceholder.jpg";

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

const StyledLink = styled(Link)`
  height: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: var(--detail-color);
  font-weight: bolder;
  font-size: 12px;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

//----------------------------------------------- FUNCTION------------HERE
export default function ContactDetail() {
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  const { data: contact, isLoading, error } = useSWR(`/api/contacts/${id}`);
  const { theme, customColor } = useContext(ThemeContext);

  if (isLoading) return <StyledLoading>Kontakt wird gesucht...</StyledLoading>;
  if (error) return <h2>Error...</h2>;

  return (
    <>
      <StyledHeader>
        <StyledCircularContainer theme={theme} customColor={customColor}>
          <StyledLink href={"/contacts"}>{backSVG}</StyledLink>
        </StyledCircularContainer>
        <StyledHeadingandFoto>
          <StyledHeading>{contact.name}</StyledHeading>
          <StyledImage
            src={contact.photo || contactplaceholder}
            alt="Contact Photo"
            width={34}
            height={34}
          />
        </StyledHeadingandFoto>
        <StyledCircularContainer theme={theme} customColor={customColor}>
          <StyledLink href={`/contacts/${id}/edit`}>{editSVG}</StyledLink>
        </StyledCircularContainer>
      </StyledHeader>

      <StyledFieldsContainer>
        <StyledFieldPhoneNote>Nummer:</StyledFieldPhoneNote>
        <StyledInfo theme={theme} customColor={customColor}>
          <strong>{contact.phone}</strong>
        </StyledInfo>
        <StyledFieldPhoneNote>Notizen:</StyledFieldPhoneNote>
        <StyledInfo theme={theme} customColor={customColor}>
          <strong>{contact.note}</strong>
        </StyledInfo>
      </StyledFieldsContainer>
      <Navigation />
    </>
  );
}

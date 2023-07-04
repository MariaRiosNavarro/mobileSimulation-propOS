import styled from "styled-components";
import PhotoList from "../../components/PhotoList";
import Link from "next/link";
import { backSVG, addSVG } from "../../components/assets/contactsSVG";
import Navigation from "../../components/Navigation";

const StyledHeading = styled.h5`
  padding: 0;
  text-align: center;
  font-weight: bold;
  font-size: large;
`;

const StyledHeadingContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export default function Gallery() {
  return (
    <>
      <StyledHeadingContainer>
        <Link href={"/"}>{backSVG}</Link>
        <StyledHeading>Galerie</StyledHeading>
        <Link href={"/images/upload"}>{addSVG}</Link>
      </StyledHeadingContainer>
      <PhotoList />
      <Navigation />
    </>
  );
}

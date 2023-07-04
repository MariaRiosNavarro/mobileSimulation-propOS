import styled from "styled-components";
import { cameraSmallSVG } from "../../components/assets/homeSVG";
import { backSVG } from "../../components/assets/contactsSVG";
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

import PhotoList from "../../components/PhotoList";
import Link from "next/link";
export default function Gallery() {
  return (
    <>
      <StyledHeadingContainer>
        <Link href={"/"}>{backSVG}</Link>
        <StyledHeading>Galerie</StyledHeading>
        <Link href={"/images/upload"}>{cameraSmallSVG}</Link>
      </StyledHeadingContainer>
      <PhotoList></PhotoList>
      <Navigation />
    </>
  );
}

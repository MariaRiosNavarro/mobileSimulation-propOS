import styled from "styled-components";
import PhotoList from "../../components/PhotoList";
import Link from "next/link";
import { backSVG, addSVG } from "../../components/assets/contactsSVG";
import Navigation from "../../components/Navigation";
import { StyledCircularContainer } from "../../components/Layout/index";
import { ThemeContext } from "../_app";
import { useContext } from "react";

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
  const { theme, customColor } = useContext(ThemeContext);
  return (
    <>
      <StyledHeadingContainer>
        <StyledCircularContainer theme={theme} customColor={customColor}>
          <Link href={"/home"}>{backSVG}</Link>
        </StyledCircularContainer>
        <StyledHeading>Galerie</StyledHeading>
        <StyledCircularContainer theme={theme} customColor={customColor}>
          <Link href={"/images/upload"}>{addSVG}</Link>
        </StyledCircularContainer>
      </StyledHeadingContainer>
      <PhotoList />
      <Navigation />
    </>
  );
}

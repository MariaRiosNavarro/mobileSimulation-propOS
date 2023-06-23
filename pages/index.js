import styled from "styled-components";
import Link from "next/link";
import Navigation from "../components/Navigation";
import StyledAppContainer from "../components/StyledAppContainer";
import { calenderSVG } from "../components/assets/homeSVG";

const StyledMain = styled.main``;

const StyledAppHeading = styled.h5`
  font-size: 10px;
  color: black;
`;

const StyledWrapAppLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: 48px;
  justify-self: center;
  align-self: center;
  text-decoration: none;
`;
//----------------------------------------------- FUNCTION------------HERE

export default function Home() {
  return (
    <>
      <StyledMain>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/contacts"}>
          <StyledAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
      </StyledMain>
      <Navigation selected={"home"} />
    </>
  );
}

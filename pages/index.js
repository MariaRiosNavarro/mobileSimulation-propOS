import styled from "styled-components";
import Link from "next/link";
import Navigation from "../components/Navigation";
import StyledAppContainer from "../components/StyledAppContainer";
import {
  alarmSVG,
  beachSVG,
  calenderSVG,
  cameraSVG,
  checkSVG,
  mailSVG,
  languageSVG,
  lensSVG,
  musicSVG,
  permContactSVG,
  photoCamSVG,
  questionSVG,
  roundaboutSVG,
  shoppingSVG,
  sportSVG,
  trainSVG,
} from "../components/assets/homeSVG";

const StyledMain = styled.main`
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  justify-content: start;
  align-items: center;
  justify-items: center;
  place-items: center;
  height: 90vh;
`;

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
          <StyledAppContainer StyledSvg={calenderSVG} disabled />
          <StyledAppHeading>Kalender</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={beachSVG} disabled />
          <StyledAppHeading>Wetter</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={alarmSVG} disabled />
          <StyledAppHeading>Uhr</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={musicSVG} disabled />
          <StyledAppHeading>Audio</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={sportSVG} disabled />
          <StyledAppHeading>Spiele</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={roundaboutSVG} disabled />
          <StyledAppHeading>Navigation</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={trainSVG} disabled />
          <StyledAppHeading>Transport</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={shoppingSVG} disabled />
          <StyledAppHeading>Einkaufen</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={cameraSVG} disabled />
          <StyledAppHeading>Sozial Media</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={questionSVG} disabled />
          <StyledAppHeading>Chats</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={checkSVG} disabled />
          <StyledAppHeading>ToDo</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={languageSVG} disabled />
          <StyledAppHeading>Internet</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={lensSVG} disabled />
          <StyledAppHeading>Galerie</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={photoCamSVG} disabled />
          <StyledAppHeading>Kamera</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={mailSVG} disabled />
          <StyledAppHeading>Mail</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/contacts"}>
          <StyledAppContainer StyledSvg={permContactSVG} />
          <StyledAppHeading>Kontakte</StyledAppHeading>
        </StyledWrapAppLink>
      </StyledMain>
      <Navigation selected={"home"} />
    </>
  );
}

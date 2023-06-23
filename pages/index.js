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
          <StyledAppContainer StyledSvg={beachSVG} />
          <StyledAppHeading>Wetter</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={alarmSVG} />
          <StyledAppHeading>Uhr</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={musicSVG} />
          <StyledAppHeading>Audio</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={sportSVG} />
          <StyledAppHeading>Spiele</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={roundaboutSVG} />
          <StyledAppHeading>Navigation</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={trainSVG} />
          <StyledAppHeading>Transport</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={shoppingSVG} />
          <StyledAppHeading>Einkaufen</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={cameraSVG} />
          <StyledAppHeading>Sozial Media</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={questionSVG} />
          <StyledAppHeading>Chats</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={checkSVG} />
          <StyledAppHeading>ToDo</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={languageSVG} />
          <StyledAppHeading>Internet</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={lensSVG} />
          <StyledAppHeading>Galerie</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={photoCamSVG} />
          <StyledAppHeading>Kamera</StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/"}>
          <StyledAppContainer StyledSvg={mailSVG} />
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

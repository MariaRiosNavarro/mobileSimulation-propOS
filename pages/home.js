import styled from "styled-components";
import Link from "next/link";
import Navigation from "../components/Navigation";
import IconAppContainer from "../components/IconAppContainer";
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

import { ThemeContext } from "./_app";
import { useContext } from "react";
import { StyledAppHeading } from "../components/Layout";

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
  height: 92vh;
`;

const StyledWrapAppLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  align-self: center;
  text-decoration: none;
`;
//----------------------------------------------- FUNCTION------------HERE

export default function Home() {
  const { theme, customColor } = useContext(ThemeContext);
  return (
    <>
      <StyledMain>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={calenderSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Kalender
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={beachSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Wetter
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={alarmSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Uhr
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={musicSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Audio
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={sportSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Spiele
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={roundaboutSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Navigation
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={trainSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Transport
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={shoppingSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Einkaufen
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={lensSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Sozial Media
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={questionSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Chats
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={checkSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            ToDo
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={mailSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Mail
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/images"}>
          <IconAppContainer StyledSvg={cameraSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Galerie
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/home"}>
          <IconAppContainer StyledSvg={photoCamSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Kamera
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/aipage"}>
          <IconAppContainer StyledSvg={languageSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Internet
          </StyledAppHeading>
        </StyledWrapAppLink>
        <StyledWrapAppLink href={"/contacts"}>
          <IconAppContainer StyledSvg={permContactSVG} />
          <StyledAppHeading theme={theme} customColor={customColor}>
            Kontakte
          </StyledAppHeading>
        </StyledWrapAppLink>
      </StyledMain>
      <Navigation selected={"home"} />
    </>
  );
}

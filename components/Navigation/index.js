import Link from "next/link";
import { homeSVG, phoneSVG, messageSVG, settingsSVG } from "../assets/homeSVG";
import StyledAppContainer from "../StyledAppContainer";
import styled from "styled-components";

const StyledNavigationContainer = styled.div``;

export default function Navigation({ selected }) {
  return (
    <StyledNavigationContainer>
      <Link href={"/"}>
        <StyledAppContainer
          StyledSvg={homeSVG}
          selected={selected === "home"}
        />
      </Link>
      <Link href={"/"}>
        <StyledAppContainer
          StyledSvg={phoneSVG}
          selected={selected === "phone"}
        />
      </Link>
      <Link href={"/"}>
        <StyledAppContainer
          StyledSvg={messageSVG}
          selected={selected === "message"}
        />
      </Link>
      <Link href={"/"}>
        <StyledAppContainer
          StyledSvg={settingsSVG}
          selected={selected === "settings"}
        />
      </Link>
    </StyledNavigationContainer>
  );
}

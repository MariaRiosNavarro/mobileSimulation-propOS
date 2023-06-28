import Link from "next/link";
import {
  homeSVG,
  phoneSVG,
  messageSVG,
  settingsSVG,
} from "../assets/navigationSVG";
import StyledAppContainer from "../StyledAppContainer";
import styled from "styled-components";

const StyledNavigationContainer = styled.div`
  background-color: var(--nav-color);
  width: 100%;
  height: 86px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
`;

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
      <Link href={"/settings"}>
        <StyledAppContainer
          StyledSvg={settingsSVG}
          selected={selected === "settings"}
        />
      </Link>
    </StyledNavigationContainer>
  );
}

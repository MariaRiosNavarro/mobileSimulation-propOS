import Link from "next/link";
import {
  homeSVG,
  phoneSVG,
  messageSVG,
  settingsSVG,
} from "../assets/navigationSVG";
import IconAppContainer from "../IconAppContainer";
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
      <Link href={"/home"}>
        <IconAppContainer StyledSvg={homeSVG} selected={selected === "home"} />
      </Link>
      <Link href={"/phone"}>
        <IconAppContainer
          StyledSvg={phoneSVG}
          selected={selected === "phone"}
        />
      </Link>
      <Link href={"/message"}>
        <IconAppContainer
          StyledSvg={messageSVG}
          selected={selected === "message"}
        />
      </Link>
      <Link href={"/settings"}>
        <IconAppContainer
          StyledSvg={settingsSVG}
          selected={selected === "settings"}
        />
      </Link>
    </StyledNavigationContainer>
  );
}

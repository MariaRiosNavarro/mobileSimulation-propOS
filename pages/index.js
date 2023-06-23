import styled from "styled-components";
import Link from "next/link";
import Navigation from "../components/Navigation";

const StyledMain = styled.main``;

//----------------------------------------------- FUNCTION------------HERE

export default function Home() {
  return (
    <>
      <StyledMain>
        <Link href={"/contacts"}>Kontakte</Link>
      </StyledMain>
      <Navigation selected={"home"} />
    </>
  );
}

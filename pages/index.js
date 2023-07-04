import styled from "styled-components";
import Link from "next/link";

import { ThemeContext } from "./_app";
import { useContext } from "react";
import { StyledAppHeading } from "../components/Layout";

//----------------------------------------------- FUNCTION------------HERE

export default function LoginPage() {
  return (
    <>
      <Link href={"/home"}>Home</Link>
    </>
  );
}

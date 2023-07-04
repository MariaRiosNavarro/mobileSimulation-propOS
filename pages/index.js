import styled from "styled-components";
import Link from "next/link";
import LoginPage from "../components/Login";

import { ThemeContext } from "./_app";
import { useContext } from "react";
import { StyledAppHeading } from "../components/Layout";

//----------------------------------------------- FUNCTION------------HERE

export default function indexPage() {
  return (
    <>
      <LoginPage />
      <Link href={"/home"}>Home</Link>
    </>
  );
}

import styled from "styled-components";
import Link from "next/link";

//----------------------------------------------- FUNCTION------------HERE

export default function Home() {
  return (
    <main>
      <Link href={"/contacts"}>Kontakte</Link>
    </main>
  );
}

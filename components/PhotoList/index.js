import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";

const StyledList = styled.ul``;

const StyledListItem = styled.li``;

const StyledImage = styled(Image)``;

const StyledTag = styled.span``;

export default function PhotoList() {
  const { data, error } = useSWR("api/images");
  if (error) return <div>könnte nicht geladen werden</div>;
  if (!data) return <div>Fotos werden geladen...</div>;

  return (
    <>
      <StyledList>
        <StyledListItem></StyledListItem>
        <StyledImage></StyledImage>
        <StyledTag></StyledTag>
      </StyledList>
    </>
  );
}

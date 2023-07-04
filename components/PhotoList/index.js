import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";

const StyledList = styled.ul``;

const StyledListItem = styled.li``;

const StyledImage = styled(Image)``;

const StyledTag = styled.span``;

const StyledTagParagrph = styled.p``;

export default function PhotoList() {
  const { data, error } = useSWR("api/images");
  if (error) return <div>könnte nicht geladen werden</div>;
  if (!data) return <div>Fotos werden geladen...</div>;

  return (
    <>
      <StyledList>
        {data.resources.map((image) => (
          <StyledListItem key={image.asset_id}>
            <Link href={`/images/${image.public_id}`} key={image.asset_id}>
              <StyledImage
                key={image.public_id}
                src={image.url}
                width={image.width}
                height={image.height}
                alt={`Photo-Id: ${image.public_id}`}
              />
            </Link>
            <StyledTagParagrph>
              {image.tags.length > 0 ? (
                image.tags.map((tag, index) => (
                  <StyledTag key={`tag-${index}`}>{tag}</StyledTag>
                ))
              ) : (
                <i>Ohne Tag</i>
              )}
            </StyledTagParagrph>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

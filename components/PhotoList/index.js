import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledListItem = styled.li`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  width: 20vw;
  object-fit: contain;
  height: 20vw;
  border-color: aliceblue;
`;

const StyledTag = styled.span``;

const StyledNoTag = styled.span`
  color: gray;
`;

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
                <StyledNoTag>Ohne Tag</StyledNoTag>
              )}
            </StyledTagParagrph>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

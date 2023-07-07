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
  grid-template-columns: repeat(2, 1fr);
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
  width: 40vw;
  object-fit: contain;
  height: 20vw;
`;

const StyledTag = styled.span`
  font-weight: 800;
`;

const StyledNoTag = styled.span`
  color: gray;
  font-size: smaller;
`;

const StyledTagParagrph = styled.p`
  text-align: center;
`;

const StyledMessage = styled.p`
  background-color: darkgray;
  color: var(--bg-color);
`;

export default function PhotoList() {
  const { data, error } = useSWR("api/images");
  if (error) return <StyledMessage>könnte nicht geladen werden</StyledMessage>;
  if (!data) return <StyledMessage>Fotos werden geladen...</StyledMessage>;

  return (
    <>
      <StyledList>
        {data.resources.map((image) => (
          <StyledListItem key={image.asset_id}>
            <StyledImage
              key={image.public_id}
              src={image.url}
              width={image.width}
              height={image.height}
              alt={`Photo-Id: ${image.public_id}`}
            />

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

import styled from "styled-components";
import Image from "next/image";
import { StyledHR } from "../StyledHR";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  margin: 1rem;
  object-fit: cover;
  border-radius: 50%;
  width: 34px;
  height: 34px;
`;

const StyledName = styled.p`
  font-weight: bold;
`;

export default function ContactListItem({ name, photo }) {
  return (
    <li>
      <StyledContainer>
        <StyledImage
          src={photo}
          width={34}
          height={34}
          alt={`Photo of ${name}`}
        ></StyledImage>
        <StyledName>{name}</StyledName>
      </StyledContainer>
      <StyledHR />
    </li>
  );
}

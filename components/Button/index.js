import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 2rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  padding: 1rem;
  width: 20rem;
  &:hover {
    background-color: var(--hover-color);
  }
`;

export default function Button({ type, name }) {
  return <StyledButton type={type}>{name}</StyledButton>;
}

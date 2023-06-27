import styled from "styled-components";

const StyledTabButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? "orange" : "transparent")};
  color: black;
  padding: 1rem;
  border: 1px solid black;
  cursor: pointer;
`;

export default function Tab({ children, isActive, onClick }) {
  return (
    <StyledTabButton onClick={onClick} isActive={isActive}>
      {children}
    </StyledTabButton>
  );
}

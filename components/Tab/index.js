import styled from "styled-components";

const StyledTabButton = styled.button`
  background-color: transparent;
  color: black;
  padding: 0;
  border-bottom: ${({ isActive }) => (isActive ? "0" : "1px solid lightgray")};
  border-top: ${({ isActive }) =>
    isActive ? "1px solid orange" : "1px solid lightgray"};
  border-left: ${({ isActive }) =>
    isActive ? "1px solid orange" : "1px solid lightgray"};
  border-right: ${({ isActive }) =>
    isActive ? "1px solid orange" : "1px solid lightgray"};
  border-radius: 8px 8px 0 0;
  width: 7rem;

  cursor: pointer;
`;

export default function Tab({ children, isActive, onClick }) {
  return (
    <StyledTabButton onClick={onClick} isActive={isActive}>
      {children}
    </StyledTabButton>
  );
}

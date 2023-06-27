import styled from "styled-components";

const StyledlitleContainer = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 0.2rem;
  border-radius: 8px;
  background-color: "lightyellow";
  color: black;
  font-weight: 400;
  &.badge--active {
    background-color: var(--primary-color);
  }
`;

export default function Badge({ children, isActive }) {
  return (
    <StyledlitleContainer isActive={isActive}>{children}</StyledlitleContainer>
  );
}

import styled from "styled-components";

const StyledlitleContainer = styled.span`
  display: inline-block;
  font-size: 10px;
  border-radius: 8px;
  background-color: "lightyellow";
  color: black;
  font-weight: 400;
  padding: 0;
  margin: 0;
  /* &.badge--active {
    background-color: var(--primary-color);
  } */
`;

const StyledBadgeHeading = styled.h6`
  margin: 0;
  padding: 0;
`;

export default function Badge({ children, isActive, badgeHeading }) {
  return (
    <StyledlitleContainer isActive={isActive}>
      <StyledBadgeHeading>{badgeHeading}</StyledBadgeHeading>
      {children}
    </StyledlitleContainer>
  );
}

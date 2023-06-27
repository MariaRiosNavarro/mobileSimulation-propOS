import styled from "styled-components";

const StyledlitleContainer = styled.span`
  display: flex;
  font-size: 12px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  color: black;
  font-weight: 400;
  padding: 0 0.7rem 0 0.7rem;
  margin: 0;
`;

// const StyledBadgeHeading = styled.h6`
//   margin: 0;
//   padding: 0;
//   font-size: 12px;
// `;
{
  /* <StyledBadgeHeading>{badgeHeading}</StyledBadgeHeading> */
}

export default function Badge({ children, isActive }) {
  return (
    <StyledlitleContainer isActive={isActive}>{children}</StyledlitleContainer>
  );
}

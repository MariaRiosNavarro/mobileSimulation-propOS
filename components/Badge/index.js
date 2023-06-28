import styled from "styled-components";
import { StyledlitleTabContainer } from "../Layout";
import { ThemeContext } from "../../pages/_app";
import { useContext } from "react";

const StyledBadgeHeading = styled.h6`
  margin: 0;
  padding: 0;
  font-size: 12px;
`;

export default function Badge({ children, isActive, badgeHeading }) {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledlitleTabContainer isActive={isActive} theme={theme}>
      <StyledBadgeHeading>{badgeHeading}</StyledBadgeHeading>
      {children}
    </StyledlitleTabContainer>
  );
}

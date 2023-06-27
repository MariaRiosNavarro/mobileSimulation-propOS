import styled from "styled-components";

const StyledTabsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export default function Tabs({ children }) {
  return <StyledTabsContainer>{children}</StyledTabsContainer>;
}

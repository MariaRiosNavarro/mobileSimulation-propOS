import styled from "styled-components";

const StyledTabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

export default function Tabs({ children }) {
  return <StyledTabsContainer>{children}</StyledTabsContainer>;
}

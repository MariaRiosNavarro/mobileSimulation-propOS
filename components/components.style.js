import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
`;

export const StyledImagePlaceholder = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  background-color: lightgray;
`;

export const StyledHeadingandFoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
  border-bottom: 1px solid lightgray;
`;

export const StyledFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const StyledButtonsContainer = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 10%;
`;

export const StyledLoading = styled.div`
  text-align: center;
  align-items: center;
  background-color: darkgray;
  color: lightyellow;
  font-weight: bold;
`;

//APPS reusable parts

export const AppContainer = styled.div`
  margin-top: 0;
  position: relative;
  min-height: 100vh;
`;

//This StyledMain removes the standard schrollin-bar above the navigation,
// making it not look like a mobile
// (no mobile has the bar above the navigation).
// Thanks Stack Overflow. Schrolling still works

export const NoSchrollbarContainer = styled.div`
  height: 90vh;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

import styled from "styled-components";
import LoginPage from "../components/Login";


const StyledAppTitle = styled.h1`
  text-align: center;
  font-size: x-large;
  border-radius: 8px;
  border: 2px solid var(--primary-color);
  display: inline;
  align-items: center;
  padding: 0.5rem;
`;

const StyledAppContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//----------------------------------------------- FUNCTION------------HERE

export default function indexPage() {
  return (
    <>
      <StyledAppContainer>
        <StyledAppTitle>PropOS</StyledAppTitle>
        <LoginPage />
      </StyledAppContainer>
    </>
  );
}

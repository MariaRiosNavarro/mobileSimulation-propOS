import styled from "styled-components";
import { createGlobalStyle } from "../styles";

export const StyledImagePlaceholder = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  background-color: lightgray;
`;

export const StyledHeadingandFoto = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem;
  border-bottom: 1px solid lightgray;
`;

export const StyledFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
`;


export const StyledButtonsContainer = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLoading = styled.div`
  text-align: center;
  align-items: center;
  background-color: darkgray;
  color: lightyellow;
  font-weight: bold;
`;
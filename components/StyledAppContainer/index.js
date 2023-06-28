import styled from "styled-components";
import { StyledSvgContainer } from "../Layout";

const StyledSvg = styled.svg`
  color: black;
  height: 40px;
  width: 40px;
`;

export default function StyledAppContainer({ StyledSvg, selected, disabled }) {
  return (
    <>
      <StyledSvgContainer selected={selected} disabled={disabled}>
        {StyledSvg}
      </StyledSvgContainer>
    </>
  );
}

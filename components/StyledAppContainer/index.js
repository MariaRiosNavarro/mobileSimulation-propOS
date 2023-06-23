import styled from "styled-components";

const StyledSvg = styled.svg`

`;

const StyledSvgContainer = styled.span`

`;

export default function StyledAppContainer({ StyledSvg, selected }) {
  return (
    <>
      <StyledSvgContainer selected={selected}>{StyledSvg}</StyledSvgContainer>
    </>
  );
}

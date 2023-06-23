import styled from "styled-components";

const StyledSvg = styled.svg``;

const StyledSvgContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 12px;
  background-color: ${(props) => (props.selected ? `#ffeacc` : `#ffcb7d `)};
`;

export default function StyledAppContainer({ StyledSvg, selected }) {
  return (
    <>
      <StyledSvgContainer selected={selected}>{StyledSvg}</StyledSvgContainer>
    </>
  );
}

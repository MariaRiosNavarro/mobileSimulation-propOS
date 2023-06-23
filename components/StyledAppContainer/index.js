import styled from "styled-components";

const StyledSvg = styled.svg`
  color: black;
  height: 40px;
  width: 40px;
`;

const StyledSvgContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 12px;
  background-color: ${(props) => {
    if (props.disabled) {
      return "lightGray";
    } else if (props.selected) {
      return "#f86f03";
    } else {
      return "#ffcb7d";
    }
  }};
  }
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

import Heading from "../Heading";
import LinkSvgContainer from "../LinkSvgContainer";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default function AppsHeader({ heading, StyledSvg }) {
  return (
    <>
      <StyledHeader>
        <Heading>{heading}</Heading>
        <LinkSvgContainer StyledSvg={StyledSvg} />
      </StyledHeader>
    </>
  );
}

import { render } from "@testing-library/react";
import IconAppContainer from "../IconAppContainer";
import { addSVG } from "../assets/contactsSVG";

//In this code, react's createContext function is used to create a custom mock version of ThemeContext.
//This ensures that ThemeContext is available in the test and contains the required values.

jest.mock("../../pages/_app", () => {
  const { createContext } = require("react");
  const mockThemeContext = createContext({ theme: "light", customColor: null });
  return {
    ThemeContext: mockThemeContext,
  };
});

test("renders SVG element", () => {
  render(<IconAppContainer StyledSvg={addSVG} selected={false} />);
  const svgElement = document.querySelector("svg");
  expect(svgElement).toBeInTheDocument();
});
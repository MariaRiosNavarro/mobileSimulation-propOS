import { render, screen, fireEvent } from "@testing-library/react";
import LinkSvgContainer from "../LinkSvgContainer";
import { infoSVG } from "../assets/contactsSVG";

//In this code, react's createContext function is used to create a custom mock version of ThemeContext.
//This ensures that ThemeContext is available in the test and contains the required values.

jest.mock("../../pages/_app", () => {
  const { createContext } = require("react");
  const mockThemeContext = createContext({ theme: "light", customColor: null });
  return {
    ThemeContext: mockThemeContext,
  };
});

test("renders SVG element and correct href", () => {
  const mockOnClick = jest.fn();
  render(
    <LinkSvgContainer
      id="123"
      StyledSvg={infoSVG}
      isFavorite={false}
      onClick={mockOnClick}
    />
  );

  const svgElement = document.querySelector("svg");
  const linkElement = screen.getByRole("link");

  expect(svgElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/contacts/123");

  fireEvent.click(linkElement);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

import Heading from ".";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Heading>Kontakte</Heading>);
  const element = screen.getByText("Kontakte");
  expect(element).toBeInTheDocument();
});

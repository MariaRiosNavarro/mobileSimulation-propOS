import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

test("renders button with provided name", () => {
  const { getByText } = render(<Button name="Speichern" />);
  const buttonElement = getByText("Speichern");
  expect(buttonElement).toBeInTheDocument();
});

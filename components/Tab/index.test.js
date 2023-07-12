import { render, fireEvent } from "@testing-library/react";
import Tab from "../Tab";


  test("renders tab with provided children", () => {
    const { getByText } = render(<Tab>Favoriten</Tab>);
    const tabElement = getByText("Favoriten");
    expect(tabElement).toBeInTheDocument();
  });

  test("fires onClick event when tab is clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Tab onClick={handleClick}>Favoriten</Tab>);
    const tabElement = getByText("Favoriten");
    fireEvent.click(tabElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });


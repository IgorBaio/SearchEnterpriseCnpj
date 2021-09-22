// UNIT TEST
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Button from "../";

describe("#Button", () => {
  describe("#Smoke Tests", () => {
    it("should render the component", () => {
      const { getByRole } = render(<Button />);

      expect(getByRole("button")).toBeInTheDocument();
    });

    it("should set the text if it is passed into props", () => {
      const { getByText } = render(<Button textButton="mock-text" />);

      expect(getByText(/mock-text/i)).toBeVisible();
    });

    it("should set the text if it is passed as a children", () => {
      const { getByText } = render(<Button>another-mock-text</Button>);

      expect(getByText(/another-mock-text/i)).toBeVisible();
    });
  });
  describe("#Component Functionality", () => {
    it("should call a onClick function when clicked", () => {
      const mockedHandleClick = jest.fn();
      const { getByRole } = render(<Button onClick={mockedHandleClick} />);

      userEvent.click(getByRole("button"));

      expect(mockedHandleClick).toHaveBeenCalled();
    });
  });
});

// UNIT TEST

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import ModalAlert from "../";
import { Button } from "@material-ui/core";

const mockOnDismiss = jest.fn();
const mockOnClick = jest.fn();

const fakeProps = {
  isVisible: true,
  onDismiss: mockOnDismiss,
  resultTransition: {
    status: "payment",
    statusColor: "#27AE60",
    statusTitle: "mock-title",
    statusDescription: "mock-description",
    btn: <Button onClick={mockOnClick}>ok</Button>,
  },
};

describe("#ModalAlert", () => {
  describe("#Smoke Tests", () => {
    it("should render the component", () => {
      const { getByText } = render(<ModalAlert {...fakeProps} />);

      expect(getByText(/mock-title/i)).toBeVisible();
      expect(getByText(/mock-description/i)).toBeVisible();
      expect(getByText(/ok/i)).toBeVisible();
    });
  });
  describe("#Component Functionality", () => {
    it("should call mockFunction when confirm Button is clicked", () => {
      const { getByRole } = render(<ModalAlert {...fakeProps} />);

      userEvent.click(getByRole("button", { name: /ok/i }));
      expect(mockOnClick).toBeCalled();
    });

    it("should not be visible when prop isVisible is passed as false", () => {
      const mockAsDisabled = { ...fakeProps, isVisible: false };
      const { queryByText } = render(<ModalAlert {...mockAsDisabled} />);

      expect(queryByText(/mock-title/i)).toBe(null);
      expect(queryByText(/mock-description/i)).toBe(null);
    });
  });
});

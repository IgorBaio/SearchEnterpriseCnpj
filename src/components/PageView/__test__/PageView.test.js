// UNIT TEST

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProviderTest from "../../../utils/test";
import PageView from "../";
import { MemoryRouter } from "react-router";

const fakeProps = {
  hasHeader: true,
  title: "Github - Interview",
  subHeader: "mock-header-text",
  pageContent: "mock-page-content",
};

describe("#PageView", () => {
  describe("#Smoke Tests", () => {
    it("should render the Component with mock-texts", () => {
      const { getByText } = render(
        <ProviderTest>
          <PageView {...fakeProps} />
        </ProviderTest>,
        {
          wrapper: MemoryRouter,
        }
      );

      expect(getByText(/Github - Interview/i)).toBeVisible();
      expect(getByText(/mock-header-text/i)).toBeVisible();
      expect(getByText(/mock-page-content/i)).toBeVisible();
    });
  });
  describe("#Component Functionality", () => {
    it("should not render subHeader mock-text if hasHeader props is passed as false", () => {
      const notHeaderProps = { ...fakeProps, hasHeader: false };
      const { getByText, queryByText, getAllByRole } = render(
        <ProviderTest>
          <PageView {...notHeaderProps} />
        </ProviderTest>,
        { wrapper: MemoryRouter }
      );

      expect(queryByText(/Github - Interview/i)).toBe(null);
      expect(queryByText(/mock-header-text/i)).toBe(null);
      expect(getByText(/mock-page-content/i)).toBeVisible();
    });
  });
});

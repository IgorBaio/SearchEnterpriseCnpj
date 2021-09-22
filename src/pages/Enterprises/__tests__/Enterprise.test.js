// UNIT TEST

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Enterprise from "..";
import ProviderTest from "../../../utils/test";
import userEvent from "@testing-library/user-event";

describe("#TablesList", () => {
  describe("#Smoke Tests", () => {
    it("should verify if exists the title of page", () => {
      const { getByText } = render(
        <ProviderTest>
          <Enterprise />
        </ProviderTest>
      );

      expect(getByText(/Search Enterprises By CNPJ/i)).toBeVisible();
    });
    it("should verify if exists the subtitle of page", () => {
      const { getByText, getAllByText } = render(
        <ProviderTest>
          <Enterprise />
        </ProviderTest>
      );

      expect(getByText(/Link repositório api:/)).toBeVisible();
      expect(getAllByText(/https:\/\/github.com/)).toHaveLength(2);
      expect(getByText(/Link repositório site:/)).toBeVisible();
    });
  });
});

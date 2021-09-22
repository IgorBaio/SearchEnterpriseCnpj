// UNIT TEST

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchButton from "..";

describe("#SearchButton", () => {
  describe("#Smoke Tests", () => {
    it("should render the repository button", () => {
      const { getByRole } = render(<SearchButton />);

      expect(
        getByRole("button", { name: /Buscar/i })
      ).toBeInTheDocument();
    });
    it("should render the starred button", () => {
      const { getByRole } = render(<SearchButton />);

      expect(getByRole("button", { name: /empresas cadastradas/i })).toBeInTheDocument();
    });
  });
});

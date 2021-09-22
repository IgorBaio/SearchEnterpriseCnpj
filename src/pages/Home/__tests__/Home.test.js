// UNIT TEST

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "..";
import ProviderTest from "../../../utils/test";
import userEvent from "@testing-library/user-event";

describe("#TablesList", () => {
  describe("#Smoke Tests", () => {
    it("should verify if exists the title of page", () => {
      const { getByText } = render(
        <ProviderTest>
          <Home />
        </ProviderTest>
      );

      expect(getByText(/Search Enterprises By CNPJ/i)).toBeVisible();
    });
    it("should verify if exists the subtitle of page", () => {
      const { getByText, getAllByText } = render(
        <ProviderTest>
          <Home />
        </ProviderTest>
      );

      expect(getByText(/Link repositório api:/)).toBeVisible();
      expect(getAllByText(/https:\/\/github.com/)).toHaveLength(2);
      expect(getByText(/Link repositório site:/)).toBeVisible();
    });
    it("should verify if exists the Section to insere Data", () => {
      const { getByText, getByRole } = render(
        <ProviderTest>
          <Home />
        </ProviderTest>
      );

      expect(getByText(/Cnpj da Empresa/)).toBeVisible();
      expect(
        getByText(/Insira o cnpj da empresa que deseja buscar./)
      ).toBeVisible();
      expect(getByRole("textbox")).toBeVisible();
    });
    it("should verify if exists the Section to insere Data", () => {
      const { getByRole } = render(
        <ProviderTest>
          <Home />
        </ProviderTest>
      );

      expect(getByRole("textbox")).toBeVisible();
    });
  });
});

// UNIT TEST

import { render } from "@testing-library/react";
import Loading from "../";

describe("#Loading", () => {
  describe("#Smoke Test", () => {
    it("should render", () => {
      const { getByText } = render(<Loading />);

      expect(getByText(/loading\.\.\./i)).toBeVisible();
    });
  });
});

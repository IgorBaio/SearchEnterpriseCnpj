// UNIT TEST

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BigCard from "../";
import { Button as MockBtn } from "@material-ui/core";

describe("#BigCard", () => {
  describe("#Smoke Tests", () => {
    it("should render de Component", async () => {
      const { findAllByRole } = render(<BigCard />);
      const divs = await findAllByRole("generic");
      expect(divs[1]).toBeVisible();
    });
    it("should be abble to recieve and render a children component", () => {
      const { getByRole } = render(
        <BigCard>
          <MockBtn />
        </BigCard>
      );
      expect(getByRole("button")).toBeInTheDocument();
    });
  });
});

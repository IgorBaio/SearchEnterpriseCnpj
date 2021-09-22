// UNIT TEST

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SubHeader from "..";

const fakeProps = {
  title: "Title-Mocked",
  values: () => Object.values(fakeProps),
};

const fakePropsWithData = {
  title: "Title-Mocked",
  user: {
    login: "Igor",
    id: 37658514,
    node_id: "MDQ6VXNlcjM3NjU4NTE0",
    avatar_url: "https://avatars.githubusercontent.com/u/37658514?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/IgorBaio",
    html_url: "https://github.com/IgorBaio",
    followers_url: "https://api.github.com/users/IgorBaio/followers",
    following_url:
      "https://api.github.com/users/IgorBaio/following{/other_user}",
    gists_url: "https://api.github.com/users/IgorBaio/gists{/gist_id}",
    starred_url: "https://api.github.com/users/IgorBaio/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/IgorBaio/subscriptions",
    organizations_url: "https://api.github.com/users/IgorBaio/orgs",
    repos_url: "https://api.github.com/users/IgorBaio/repos",
    events_url: "https://api.github.com/users/IgorBaio/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/IgorBaio/received_events",
    type: "User",
    site_admin: false,
    name: null,
    company: "Doctuz",
    blog: "",
    location: "Juiz de Fora",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 53,
    public_gists: 0,
    followers: 15,
    following: 33,
    created_at: "2018-03-22T11:07:39Z",
    updated_at: "2021-09-06T23:20:26Z",
  },
  values: () => Object.values(fakePropsWithData),
};

describe("#SubHeader", () => {
  describe("#Smoke Tests", () => {
    it("should render the component", () => {
      const { getByText } = render(<SubHeader {...fakeProps} />);
      expect(getByText(/Title-Mocked/i)).toBeInTheDocument();
    });
  });
  describe("#Component Functionality", () => {
    it("should render the component with user data", () => {
      const { getByText, getByRole, getAllByText } = render(
        <SubHeader {...fakePropsWithData} />
      );
      expect(getByText(/Title-Mocked/i)).toBeInTheDocument();
      expect(getByText(/Link repositório api:/)).toBeVisible();
      expect(getAllByText(/https:\/\/github.com/)).toHaveLength(2);
      expect(getByText(/Link repositório site:/)).toBeVisible();
      expect(getByRole("img", { name: "" })).toBeInTheDocument();
    });
  });
});

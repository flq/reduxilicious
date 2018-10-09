import * as React from "react";
import { shallow } from "enzyme";
import {Profile, ProfileProps} from "./Profile";
import { Button } from "semantic-ui-react";

describe("profile/Profile", () => {
  function renderProfile(overrides: Partial<ProfileProps> = {}) {
    const props: ProfileProps = {
      user: {name: "Joe", email: "joe@bloggs.com"},
      logOut: jest.fn(),
      ...overrides
    };

    return shallow(<Profile {...props} />);
  }

  it("calls logout when button is clicked", () => {
    const logOut = jest.fn();
    const component = renderProfile({ logOut });
    component.find(Button).simulate("click");
    expect(logOut).toHaveBeenCalled();
  });

});

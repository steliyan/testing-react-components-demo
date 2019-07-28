import React from "react";
import { shallow } from "enzyme";

import { Home } from "../../components/Menu/Home";

it("shallow render", () => {
  const wrapper = shallow(<Home />);

  expect(wrapper.find("MenuItem").props()).toEqual({
    text: "Home"
  });
});

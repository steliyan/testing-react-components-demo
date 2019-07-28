import React from "react";
import { mount } from "enzyme";

import { Home } from "../../components/Menu/Home";

it("mount render", () => {
  const wrapper = mount(<Home />);

  expect(wrapper.find("MenuItem").props()).toEqual({
    text: "Home"
  });
});

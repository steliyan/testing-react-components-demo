import React from "react";
import { mount } from "enzyme";

import { Counter } from "../components/Counter";

it("mount render", () => {
  const wrapper = mount(<Counter />);

  wrapper.find("button").simulate("click");

  expect(wrapper).toMatchSnapshot();
});

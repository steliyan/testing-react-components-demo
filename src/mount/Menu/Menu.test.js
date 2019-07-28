import React from "react";
import { mount } from "enzyme";

import { Menu } from "../../components/Menu/Menu";

it("mount render", () => {
  const container = mount(<Menu />);

  expect(container).toMatchSnapshot();
});

it("mount rerender with user", () => {
  const container = mount(<Menu />);

  container.setProps({ user: "Gosho" });

  expect(container).toMatchSnapshot();
});

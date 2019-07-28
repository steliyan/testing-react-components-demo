import React from "react";
import { mount } from "enzyme";

import { Menu } from "../../components/Menu/Menu";

it("mount render", () => {
  const container = mount(<Menu />);

  expect(container).toMatchSnapshot();
});

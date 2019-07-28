import React from "react";
import { shallow } from "enzyme";

import { Menu } from "../../components/Menu/Menu";

it("shallow render", () => {
  const container = shallow(<Menu />);

  expect(container).toMatchSnapshot();
});

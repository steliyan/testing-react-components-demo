import React from "react";
import { mount } from "enzyme";

import { Login } from "../components/Login";

const sleep = timeout => new Promise(r => setTimeout(r, timeout));

it('should render "no user" on initial render', () => {
  const wrapper = mount(<Login />);

  expect(wrapper).toMatchSnapshot();
});

it('should render "Petkan" on after login', async () => {
  const wrapper = mount(<Login />);

  await sleep(0);
  wrapper.update();

  expect(wrapper).toMatchSnapshot();
});

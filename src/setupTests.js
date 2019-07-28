/* eslint-disable import/no-extraneous-dependencies, no-console */
import { configure } from "enzyme";
import { cleanup } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";

import "jest-enzyme";

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

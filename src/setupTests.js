/* eslint-disable import/no-extraneous-dependencies, no-console */
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "jest-enzyme";

configure({ adapter: new Adapter() });

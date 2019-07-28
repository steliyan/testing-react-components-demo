import React from "react";

import { Home } from "./Home";
import { About } from "./About";

export const Menu = ({ user }) => {
  return (
    <div>
      {user && `Hello, ${user}`}
      Navigation:
      <Home />
      <About />
    </div>
  );
};

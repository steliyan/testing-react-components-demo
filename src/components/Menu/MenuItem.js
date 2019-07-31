import React from "react";

const MenuItem = ({ text }) => {
  return (
    <div>
      {text}
      <button>{text}</button>
    </div>
  );
};

export default MenuItem;

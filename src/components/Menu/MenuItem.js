import React from "react";

export const MenuItem = ({ text }) => {
  return (
    <div>
      {text}
      <button>{text}</button>
    </div>
  );
};

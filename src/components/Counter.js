import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>
        Current count is: <b>{count}</b>
      </p>
      <button
        onClick={e => {
          e.preventDefault();
          setCount(count + 1);
        }}
      />
    </div>
  );
};

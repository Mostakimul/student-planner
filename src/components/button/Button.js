import React from "react";

const Button = ({ children, clikHandler }) => {
  return (
    <button
      onClick={clikHandler}
      className="bg-yellow-600 text-gray-200 rounded-md px-4 py-2"
    >
      {children}
    </button>
  );
};

export default Button;

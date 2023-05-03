import React from "react";

const Button = ({ children, clikHandler, classNames, type = "button" }) => {
  return (
    <button
      onClick={clikHandler}
      type={type}
      className={`bg-yellow-600 text-gray-200 rounded-md ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;

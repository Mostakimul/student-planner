import React from "react";

const Button = ({ children, clikHandler, classNames }) => {
  return (
    <button
      onClick={clikHandler}
      className={`bg-yellow-600 text-gray-200 rounded-md ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;

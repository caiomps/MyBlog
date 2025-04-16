import React from "react";

const Button = ({ type, txt }) => {
  return (
    <button
      type={type}
      value={txt}
      className="cursor-pointer bg-blue-700 text-white font-bold py-2 px-4 rounded lg:text-xl hover:bg-white hover:text-blue-700 hover:border-blue-700 hover:border-2 hover:shadow-lg transition duration-300 ease-in-out"
    >
      {txt}
    </button>
  );
};

export default Button;

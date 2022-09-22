import React from "react";

const AppButton = ({ children, onClick, style }) => {
  return (
    <button
      className={`${style} capitalize bg-gradient-to-r flex justify-center bg-gray-800 hover:bg-gray-600 items-center rounded-xl text-white font-bold tracking-wide py-2 w-full `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AppButton;

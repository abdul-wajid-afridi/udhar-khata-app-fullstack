import React from "react";
import "../Styles/Form.css";
const Form = ({ children, width, style }) => {
  return (
    <div
      className={`${
        style ? style : "gap-10"
      }  flex flex-col bg-gray-400  shadow-lg p-10 ${
        width ? width : "w-[320px] sm:w-[400px]"
      }`}
    >
      {children}
    </div>
  );
};

export default Form;

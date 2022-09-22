import React from "react";

const CardGallary = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-20 justify-center items-center my-10">
      {children}
    </div>
  );
};

export default CardGallary;

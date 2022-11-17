import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary font-semibold border-none text-white bg-gradient-to-r from-indigo-500 mt-5">
      {children}
    </button>
  );
};

export default PrimaryButton;

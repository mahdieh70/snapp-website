import React from "react";

const HeaderOfRequest = ({ children }) => {
  return (
    <>
      <h2 className="font-bold text-5 my-4 text-[19px] opacity-[0.9]">
        {children}
      </h2>
    </>
  );
};

export default HeaderOfRequest;
